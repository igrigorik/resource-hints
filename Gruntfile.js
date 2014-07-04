'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      clean: 'rm -rf ./index.html',
      build: 'bikeshed -q spec ./index.src.html ./build/index.html'
    },

    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['index.html']
    },

    watch: {
      files: '*.src.html',
      tasks: ['exec:build']
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['watch']);
};
