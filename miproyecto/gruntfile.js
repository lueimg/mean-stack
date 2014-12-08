module.exports = function(grunt){

	grunt.initConfig({

		jshint:{
			all:['script.js']
		},
		concat:{
			dist:{
				src:['script.js','otroscript.js'],
				dest:'unidos.js'
			}
		},
		uglify:{
			dist:{
				src:'unidos.js',
				dest:'build/unidos.min .js'
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default',['jshint','concat','uglify']);
}