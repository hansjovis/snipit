/**
 * Gather the image from the given head of a web page.
 *
 * @param {HTMLElement} head The head of a web page.
 *
 * @return {string} The URL to the image.
 */
function gatherImage( head ) {
	const imageElement = head.querySelector( "meta[property='og:image']" );
	if ( imageElement ) {
		return imageElement.getAttribute( "content" );
	} else {
		return "";
	}
}

export default gatherImage;
