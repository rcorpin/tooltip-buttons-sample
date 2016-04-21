module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      lib: {},
      options: {
        transform: [
          ['stringify', {
            extensions: ['.html']
          }],
          ['babelify', {
            ignore: /(?:node_modules|assets)\//
          }]
        ],
        external: [],
        browserifyOptions: {
          debug: true
        }
      },
      dist: {
        files: {
          'myApp/myApp.min.js': ['myApp/app/app.module.js']
        }
      },
      watch: {
        files: '<%=browserify.dist.files%>',
        options: {
          watch: true,
          keepAlive: true,
        }
      }
    },
    less: {
      dist: {
        options: {
          compress: true,
          rootpath: ''
        },
        files: {
          'myApp/myApp.min.css': ['myApp/assets/stylesheets/main.less']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.registerTask('default', ['browserify:dist', 'less:dist']);
};