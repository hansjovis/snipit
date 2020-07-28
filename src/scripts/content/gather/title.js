/**
 * Gathers the title from the given head of a web page.
 *
 * @param {HTMLElement} head The head of a web page.
 *
 * @return {string} The title.
 */
function gatherTitle( head ) {
	const titleElement = head.querySelector( "title" );
	if ( titleElement ) {
		return titleElement.innerText;
	} else {
		return "";
	}
}

export default gatherTitle;
