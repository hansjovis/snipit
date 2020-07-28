const path = require( "path" );

module.exports = {
	entry: "./src/scripts/background/app.js",
	output: {
		path: path.resolve( __dirname, "dist/scripts/background" ),
		filename: "app.js"
	},
	mode: "development",
	devtool: "cheap-module-source-map"
};
