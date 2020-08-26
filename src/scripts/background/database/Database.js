import config from "./db-config";

/**
 *
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
		console.error( "Snipit: Could not open a connection to the database.", error );
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
			store.transaction.oncomplete = function( event ) {
				resolve( database );
			};

			store.transaction.onerror = function( event ) {
				reject( event.target );
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

		request.onsuccess = function() {
			console.log( `Stored object to the ${storeName} store: ${JSON.stringify( object )}` );
		};
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

	static async delete( storeName, id ) {
		const database = await Database.open();

		const transaction = database.transaction( storeName, "readwrite" );
		const store = transaction.objectStore( storeName );
		const request = store.delete( id );

		return new Promise( ( resolve, reject ) => {
			request.onsuccess = function() {
				resolve( id );
			}
			request.onerror = function( event ) {
				reject( event );
			}
		} );
		
	}
}

export default Database;
