/**
 * Tries to gather a description from the first paragraph within the given element.
 * 
 * @param {HTMLElement} element The element to gather the description from.
 * 
 * @returns {string} The description.
 */
function fromFirstParagraph( element ) {
	const firstParagraph = element.querySelector( "p" );
	if ( firstParagraph ) {
		// First sentence from the first paragraph.
		let sentences = firstParagraph.innerText.split( /([\.!\?] )/g, 2 );
		return sentences.join("").trim();
	}
	return "";
}

/**
 * Tries to gather a description from a `description` meta tag within the given element.
 *
 * @param {HTMLElement} element The element to gather the description from.
 * 
 * @returns {string} The description.
 */
function fromMeta( element ) {
	const metaDescriptionElement = element.querySelector( "meta[name='description']" );
	return metaDescriptionElement ? metaDescriptionElement.getAttribute( "content" ) : "";
}

/**
 * Gather the description from the given web page.
 *
 * @param {HTMLElement} element The web page.
 *
 * @return {string} The description.
 */
function gatherDescription( element ) {
	return fromMeta( element )
		|| fromFirstParagraph( element )
		|| "";
}

export default gatherDescription;
