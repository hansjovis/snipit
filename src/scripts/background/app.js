import Snippet from "./model/Snippet";

/**
 * Handles messages sent from content scripts.
 *
 * @param {Object} message           The message.
 * @param {string} message.command   The command identifier.
 * @param {Object} [message.payload] An optional payload.
 */
function handleMessage( { command, payload } ) {
	switch ( command ) {
		case "saveSnippet":
			const snippet = new Snippet( payload );
			snippet.store();
			break;
		default:
			console.warn( `Snipit: '${command}' is an unknown command.` );
	}
}

chrome.runtime.onMessage.addListener( handleMessage );
