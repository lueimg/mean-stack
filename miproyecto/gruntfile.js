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
				dest:'build/unidos.min.js'
			}
		},

		shell:{
			multiple:{
				command:[
					'rm -rf unidos.js',
					'rm -rf deploy',
					'mkdir deploy',
					'mv build/unidos.min.js deploy/unidos.min.js'
				].join('&&')
			}
		}



	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default',['jshint','concat','uglify','shell']);
}