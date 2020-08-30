import Database from "../../../scripts/background/database/Database";

class Snippet {

	constructor( props ) {
		this.props = props;
	}

	/**
	 * Returns an HTML representation of this component.
	 */
	render() {
		const { url, image, title, description } = this.props;
		return `
		<article id=${url}>
			<button class="remove-button">Remove</button>
			<a href="${url}">
				<img src="${image || "assets/fallback.png"}" alt=""/>
				<h1 title="${title}">${title}</h1>
				<p class="link">${url}</p>
				<p>${description}</p>
			</a>
		</article>`;
	}

	/**
	 * Registers event listeners on the document fragment, before it is added to the page.
	 * 
	 * @param {DocumentFragment} fragment The document fragment that will be added to the page.
	 */
	register( fragment ) {
		const removeButton = fragment.querySelector( ".remove-button" );
		removeButton.onclick = () => {
			Database.delete( "snippets", this.props.url )
				.then( id => document.getElementById( id ) )
				.then( element => element.remove() )
				.catch( error => console.error( `An error occurred: ${error}` ) )
		}
	}
}

export default Snippet;
