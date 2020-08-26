
class Snippet {

	constructor( props ) {
		this.props = props;
	}

	render() {
		const { url, image, title, description } = this.props;
		return `
		<article>
			<button class="remove-button">Remove</button>
			<a href="${url}">
				<img src="${image || "assets/fallback.png"}" alt=""/>
				<h1 title="${title}">${title}</h1>
				<p class="link">${url}</p>
				<p>${description}</p>
			</a>
		</article>`;
	}

	register( fragment ) {
		const removeButton = fragment.querySelector( ".remove-button" );
		removeButton.onclick = () => {
			console.log( `Removing '${this.props.url}'` );
		}
	}
}

export default Snippet;
