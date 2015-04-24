module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      react: {
        files: [
          'components/*.jsx',
          'assets/js/*.js',
        ],
        tasks: ['browserify']
      },
      sass: {
        files: './assets/sass/*.scss',
        tasks: ['sass', 'cssmin']
      },
    },

    sass: {
      all: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
          require: ['breakpoint', 'susy'],
        },
        files: [{
          expand: true,
          cwd: 'assets/sass/',
          src: ['*.scss', '!_init.scss', '!_mixins.scss', '!_variables.scss'],
          dest: 'assets/css',
          ext: '.css',
          extDot: 'first'
        }]
      }
    },

    cssmin: {
      all: {
        files: {
          './public/css/styles.min.css': ['./assets/css/*.css']
        }
      }
    },
   
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        files: {
          'public/js/client.min.js': ['assets/js/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['sass', 'browserify']);
};
