module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    shell: {
      latex2pdf: {
        command: 'pdflatex --output-directory=build --output-format=pdf src/cv.tex'
      }
    },
    watch: {
      scripts: {
        files  : ['src/*.tex'],
        tasks  : ['shell:latex2pdf'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.registerTask('default', ['watch']);
};
