import config from "./db-config";

/**
 * Database interface layer.
 */
class Database {

	/**
	 * Open a connection to the database.
	 *
	 * @return {Promise<IDBDatabase>} The database.
	 */
	static open() {
		if ( self.database ) {
			return Promise.resolve( self.database );
		} else {
			let request = window.indexedDB.open( config.name, config.version );

			return new Promise( ( resolve, reject ) => {
				request.onupgradeneeded = ( event ) => {
					self.database = event.target.result;
					Database.upgrade( self.database ).then( resolve ).catch( Database.logError );
				};

				request.onsuccess = ( event ) => {
					self.database = event.target.result;
					resolve( event.target.result );
				};

				request.onerror = ( event ) => {
					Database.logError( event );
					reject( event.target );
				};
			} );
		}
	}

	/**
	 * Log the error.
	 *
	 * @todo Implement an addon-wide logging framework.
	 *
	 * @param {Object} error The error to log.
	 */
	static logError( error ) {
		console.error( `Snipit - Error in database: ${error}` );
	}

	/**
	 * Upgrades the database.
	 *
	 * @param {IDBDatabase} database The database.
	 *
	 * @return {Promise<IDBDatabase>} The database object.
	 */
	static upgrade( database ) {
		// Create the object store for the snippets.
		const store = database.createObjectStore( "snippets", { keyPath: "url" } );

		return new Promise( ( resolve, reject ) => {
			store.transaction.oncomplete = function() {
				resolve( database );
			};

			store.transaction.onerror = function( event ) {
				reject( event.target );
			};
		} );
	}

	/**
	 * Wraps the given database request in a promise.
	 *
	 * @param {IDBRequest} request The databse request.
	 */
	static toPromise( request ) {
		return new Promise( ( resolve, reject ) => {
			request.onsuccess = function( event ) {
				resolve( event.target.result );
			};
			request.onerror = function( event ) {
				Database.logError( event.target.error );
				reject( event.target.error );
			};
		} );
	}

	/**
	 * Store the given object in the given store.
	 *
	 * @param {string} storeName The store in which to store the object.
	 * @param {Object} object    The object to store.
	 */
	static async storeObject( storeName, object ) {
		const database = await Database.open();

		const transaction = database.transaction( storeName, "readwrite" );
		const store = transaction.objectStore( storeName );
		const request = store.add( object );

		return Database.toPromise( request );
	}

	/**
	 * Retrieves all object from the given store.
	 *
	 * @param {string} storeName The name of the store.
	 */
	static async retrieveAll( storeName ) {
		const database = await Database.open();

		const transaction = database.transaction( storeName, "readonly" );
		const store = transaction.objectStore( storeName );
		const request = store.getAll();

		return Database.toPromise( request );
	}

	/**
	 * Deletes the item with the given id from the store.
	 *
	 * @param {string} storeName The name of the store.
	 * @param {string} id        The id of the object to delete from the store.
	 */
	static async delete( storeName, id ) {
		const database = await Database.open();

		const transaction = database.transaction( storeName, "readwrite" );
		const store = transaction.objectStore( storeName );
		const request = store.delete( id );

		return Database.toPromise( request );		
	}
}

export default Database;
