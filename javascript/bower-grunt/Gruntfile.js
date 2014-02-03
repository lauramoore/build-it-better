module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			all: ["build"],
			images: ["build/img"], 
			text: ["build/**/*.html", "build/css", "build/js", "build/partials"]
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'bower_components',
						src: ['**/*.min.js'],
						dest: 'build/bower_components'
					}
				]
			}
		},
		cssmin: {
			combine: {
				files: {
					'build/css/styles.min.css': ['src/css/*.css']
				}
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			dynamic_mappings: {
				expand: true,
				cwd: 'src',
				src: '**/*.html',
				dest: 'build'
			}
		},
		less: {
			development: {
				files: {
					"src/css/style.css": "src/less/style.less"
				}
			}
		},
		smushit: {
			mygroup: {
				src: ['src/img/**/*.png','src/img/**/*.jpg'],
				dest: 'build/img'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['src/lib/**/*.js', 'src/js/*.js'],
				dest: 'build/js/scripts.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-smushit');

	grunt.registerTask('default', ['clean:text', 'copy', 'uglify', 'htmlmin', 'less', 'cssmin']);
	grunt.registerTask('images', ['clean:images', 'smushit']);
};
