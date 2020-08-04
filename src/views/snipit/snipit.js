import Database from "../../scripts/background/database/Database";

function snippetTemplate( snippet ) {
	return `<li>${snippet.title}</li>`;
}

function snippetListTemplate( snippets ) {
	return snippets.reduce( ( aggr, snippet ) => aggr + snippetTemplate( snippet ), "" );
}

function setSnippets( snippets ) {
	console.log( snippets );
	const snippetsElement = document.getElementById( "snippets" );
	snippetsElement.innerHTML = snippetListTemplate( snippets );
}

function onLoad() {
	Database.open()
			.then( () => Database.retrieveAll( "snippets" ) )
			.then( setSnippets );

}

window.addEventListener( "load", onLoad );
