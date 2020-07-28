/**
 * Gather the description from the given head of a web page.
 *
 * @param {HTMLElement} head The head of a web page.
 *
 * @return {string} The description.
 */
function gatherDescription( head ) {
	const metaDescriptionElement = head.querySelector( "meta[name='description']" );
	if ( metaDescriptionElement ) {
		return metaDescriptionElement.getAttribute( "content" );
	} else {
		return "";
	}
}

export default gatherDescription;
