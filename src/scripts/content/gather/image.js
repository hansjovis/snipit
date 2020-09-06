
/**
 * Gathers the URL to the image from the first `og:image` meta tag
 * in the given HTML element.
 * 
 * @param {HTMLElement} element The element to gather the image from.
 * 
 * @returns {string} The URL to the image.
 */
function fromMeta( element ) {
	const meta = element.querySelector( "meta[property='og:image']" );
	if( meta ) {
		const url = meta.getAttribute( "content" );
		return new URL( url, window.location.origin ).toString();
	}
	return false;
}

/**
 * Gathers the URL to the first image on the given HTML element. 
 * 
 * @param {HTMLElement} element The element to gather the image from.
 * 
 * @returns {string} The URL to the image.
 */
function firstContentImage( element ) {
	const image = element.querySelector( "img" );
	if ( image ) {
		const url = image.getAttribute( "src" );
		return new URL( url, window.location.origin ).toString();
	}
	return false;
}

/**
 * Gather the image from the given web page.
 *
 * @param {HTMLElement} element The web page.
 *
 * @returns {string} The URL to the image.
 */
function gatherImage( element ) {
	return fromMeta( element )
		|| firstContentImage( element )
		|| "";
}

export default gatherImage;
