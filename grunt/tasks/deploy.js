module.exports = function(grunt) {

	grunt.registerTask("deploy", ["copy:assets", "esdoc"]);

};
