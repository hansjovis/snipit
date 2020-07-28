function getCurrentActiveTabs() {
	return new Promise(
		( resolve, reject ) => {
			chrome.tabs.query( { active: true, currentWindow: true },
				( tabs ) => resolve( tabs )
			);
		}
	);
}

/**
 * Load the menu.
 */
function load() {

	/**
	 * Function that is called when the main "Snip it" button is clicked.
	 *
	 * @param event Click event.
	 */
	function snapButtonClick( event ) {
		getCurrentActiveTabs()
			.then( tabs => chrome.tabs.sendMessage( tabs[ 0 ].id, { command: "snipit" } ) );
	}

	// Add click event listener on main "Snip it" button.
	const button = document.getElementById( "main-button" );
	button.addEventListener( "click", snapButtonClick );
}

chrome.tabs.executeScript( { file: "dist/scripts/content/app.js" }, load );
