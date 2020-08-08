import Database from "../../scripts/background/database/Database";
import snippetTemplate from "./templates/snippet";

function snippetListTemplate( snippets ) {
	return snippets.reduce( ( aggr, snippet ) => aggr + snippetTemplate( snippet ), "" );
}

function setSnippets( snippets ) {
	const snippetsElement = document.getElementById( "snippets" );
	snippetsElement.innerHTML = snippetListTemplate( snippets );
}

function onLoad() {
	Database.open()
			.then( () => Database.retrieveAll( "snippets" ) )
			.then( setSnippets );

}

window.addEventListener( "load", onLoad );
