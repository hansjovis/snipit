const path = require( "path" );

module.exports = {
	entry: "./src/views/snipit/snipit.js",
	output: {
		path: path.resolve( __dirname, "../../dist/views/snipit" ),
		filename: "snipit.js"
	},
	mode: "development",
	devtool: "cheap-module-source-map"
};
