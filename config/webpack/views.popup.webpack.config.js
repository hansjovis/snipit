const path = require( "path" );

module.exports = {
	entry: "./src/views/popup/popup.js",
	output: {
		path: path.resolve( __dirname, "../../dist/views/popup" ),
		filename: "popup.js"
	},
	mode: "development",
	devtool: "cheap-module-source-map"
};
