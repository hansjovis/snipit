import { getCurrentActiveTabs } from "./helpers/tabs";

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

	function openSnippetsPage( event ) {
		chrome.tabs.create( { url: "dist/views/snipit/snipit.html" } );
	}

	// Add click event listener on main "Snip it" button.
	const mainButton = document.getElementById( "main-button" );
	mainButton.addEventListener( "click", snapButtonClick );

	// Add click event listener on "view snippets" button.
	const viewSnippetsButton = document.getElementById( "view-snippets-button" );
	viewSnippetsButton.addEventListener( "click", openSnippetsPage );
}

chrome.tabs.executeScript( { file: "dist/scripts/content/app.js" }, load );
