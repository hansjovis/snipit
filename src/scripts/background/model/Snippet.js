import Database from "../database/Database";

/**
 * A snippet.
 */
class Snippet {

	/**
	 * Create a new snippet.
	 *
	 * @param {Object} params              The snippet's parameters.
	 * @param {string} params.url          The URL to the web page.
	 * @param {string} params.title        The title of the web page.
	 * @param {string} params.description  A short description of the web page.
	 * @param {string} params.image        An url to an image describing the web page.
	 */
	constructor( { url, title, description, image } ) {
		this.snippet = { url, title, description, image };
	}

	/**
	 * Retrieves the snippet from the store.
	 *
	 * @param {string} url The url of the web page for which to retrieve the snippet.
	 */
	retrieve( url ) {

	}

	/**
	 * Stores this snippet.
	 */
	store() {
		Database.open()
				.then( () => Database.storeObject( "snippets", this.snippet ) );
	}
}

export default Snippet;
