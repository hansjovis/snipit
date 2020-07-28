const backgroundWebpackConfig = require( "./background.webpack.config" );
const contentWebpackConfig = require( "./content.webpack.config" );
const popupWebpackConfig = require( "./views.popup.webpack.config" );

module.exports = function( grunt ) {
	grunt.initConfig( {
		webpack: {
			content: contentWebpackConfig,
			background: backgroundWebpackConfig,
			popup: popupWebpackConfig
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
