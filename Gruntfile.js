module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compile:{
            options:{
                namespace:"tmpl",
                prettify:true,
                processName: function(filename){
                    var f = filename.replace("templates/","");
                    f = f.replace(".tmpl.html","");
                    return f;
                },
                processContent: function(src) {
                    src = src.replace(/(^\s+|\s+$)/gm, '');
                    src = src.replace(/<!--[\s\S]*?-->/g,'');
                    return src;
                }
            },
            files:{
                "js/templates.js":[
                    "templates/*.tmpl.html"
                ],
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('default', ['compile']);
};