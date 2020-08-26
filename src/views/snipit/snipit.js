import Database from "../../scripts/background/database/Database";
import Snippet from "./components/Snippet";
import render from "./components/render";

function setSnippets( snippets ) {
	const root = document.getElementById( "snippets" );

	for( let i = 0; i < snippets.length; i++ ) {
		const snippet = new Snippet( snippets[i] );
		render( root, snippet, { append: true } );
	}
}

function onLoad() {
	Database.retrieveAll( "snippets" )
			.then( setSnippets );
}

window.addEventListener( "load", onLoad );
