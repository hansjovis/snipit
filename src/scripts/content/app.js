import gatherSnippet from "./gather/snippet";

(
	function() {

		// Make sure this script is loaded only once per page.
		if ( window.hasRun ) {
			return;
		}
		window.hasRun = true;

		/**
		 * Save the given snippet.
		 *
		 * @param {Object} snippet The snippet to save.
		 */
		function saveSnippet( snippet ) {
			console.log( "Saving snippet", snippet );
			chrome.runtime.sendMessage( { command: "saveSnippet", payload: snippet } );
		}

		/**
		 * Gather and save a snippet of the current page.
		 */
		function snipit() {
			const snippet = gatherSnippet( window.location.href, document.head );
			saveSnippet( snippet );
		}

		/**
		 * Handle messages sent from background scripts.
		 *
		 * @param {Object} message           The message.
		 * @param {string} message.command   The command identifier.
		 * @param {Object} [message.payload] An optional payload.
		 */
		function handleMessage( { command, payload } ) {
			switch ( command ) {
				case "snipit":
					snipit();
					break;
				default:
					console.warn( `Snipit: '${command}' is an unknown command.` );
			}
		}

		chrome.runtime.onMessage.addListener( handleMessage );
	}
)();
