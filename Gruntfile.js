module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          options: {
            port: 80
          }
        }
      },
      csslint: {
        all: ['css/*.css'],
        options: {
          "box-sizing": false
        }
      },
      watch: {
        js: {
            files: ['js/*.js'],
            options: {
              livereload: true,
            }
        },
        css: {
            files: ['css/*.css'],
            tasks: ['csslint'],
            options: {
              livereload: true,
            }
        },
        scss: {
            files: ['css/src/*.scss'],
            tasks: ['sass']
        }
      },
      sass: {
        dist: {
          files: [{
            expand: true,
            cwd: 'scss',
            src: ['*.scss'],
            dest: 'css/',
            ext: '.css'
          }]
        }
      }
    });

    grunt.registerTask('launch', ['connect', 'watch']);

    grunt.registerTask('default', ['launch']);
}