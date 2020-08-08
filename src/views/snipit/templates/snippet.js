function snippet( { title, description, image, url } ) {
	return `
		<article>
			<button class="remove-button">Remove</button>
			<a href="${url}">
				<img src="${image || "assets/fallback.png"}" alt=""/>
				<h1 title="${title}">${title}</h1>
				<p class="link">${url}</p>
				<p>${description}</p>
			</a>
		</article>
	`;
}

export default snippet;
