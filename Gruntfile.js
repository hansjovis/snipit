const backgroundWebpackConfig = require( "./config/webpack/background.webpack.config" );
const contentWebpackConfig = require( "./config/webpack/content.webpack.config" );
const popupWebpackConfig = require( "./config/webpack/views.popup.webpack.config" );
const snipitWebpackConfig = require( "./config/webpack/views.snipit.webpack.config" );

module.exports = function( grunt ) {
	grunt.initConfig( {
		webpack: {
			content: contentWebpackConfig,
			background: backgroundWebpackConfig,
			popup: popupWebpackConfig,
			snipit: snipitWebpackConfig
		},
		copy: {
			views: {
				expand: true,
				cwd: "src/",
				src: [ "views/**/*.{html,css}" ],
				dest: "dist/"
			}
		}
	} );

	grunt.loadNpmTasks( "grunt-webpack" );
	grunt.loadNpmTasks( "grunt-contrib-copy" );

	grunt.registerTask( "default", [ "webpack", "copy" ] );
};
