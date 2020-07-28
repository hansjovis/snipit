const backgroundWebpackConfig = require( "./background.webpack.config" );
const contentWebpackConfig = require( "./content.webpack.config" );

module.exports = function( grunt ) {
	grunt.initConfig( {
		webpack: {
			content: contentWebpackConfig,
			background: backgroundWebpackConfig
		}
	} );

	grunt.loadNpmTasks( "grunt-webpack" );

	grunt.registerTask( "default", [ "webpack" ] );
};
