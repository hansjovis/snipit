import gatherTitle from "../gather/title";
import gatherDescription from "../gather/description";
import gatherImage from "../gather/image";

/**
 * Gather a snippet from the page.
 *
 * @param {string} url The URL of the webpage.
 * @param {HTMLElement} element The element to gather the snippet from
 */
function gatherSnippet( url, element ) {
	const title = gatherTitle( element );
	const description = gatherDescription( element );
	const image = gatherImage( element );
	return { url, title, description, image };
}

export default gatherSnippet;
