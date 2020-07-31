const path = require( "path" );

module.exports = {
	entry: "./src/scripts/content/app.js",
	output: {
		path: path.resolve( __dirname, "../../dist/scripts/content" ),
		filename: "app.js"
	},
	mode: "development"
};
