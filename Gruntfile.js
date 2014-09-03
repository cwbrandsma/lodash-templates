module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* jst will 'compile' lodash/underscore templates */
        jst: {
            compile: {
                options: {
                    namespace: "tmpl",
                    prettify: true,
                    processName: function (filename) {
                        var f = filename.replace("templates/", "");
                        f = f.replace(".tmpl.html", "");
                        return f;
                    },
                    processContent: function (src) {
                        src = src.replace(/(^\s+|\s+$)/gm, '');
                        src = src.replace(/<!--[\s\S]*?-->/g, '');
                        return src;
                    }
                },
                files: {
                    "js/templates.js": [
                        "templates/*.tmpl.html"
                    ],
                }
            }
        },

        /* jsdoc generates javascript documenation */
        jsdoc:{
            dist: {
                src:['js/modules/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        },

        /* Clean will delete files/directories */
        clean:{
            docs:['docs/*.html'],
            reset:['docs', 'js/ven.js', 'js/ven.min.js']
        },

        concat:{
            ven:{
                src:['js/ven/jquery.min.js','js/ven/lodash.js', 'js/ven/bootstrap.min.js'],
                dest:'js/ven.js'
            }
        },
        uglify:{
            ven:{
                src:['js/ven/jquery.min.js','js/ven/lodash.js', 'js/ven/bootstrap.min.js'],
                dest:'js/ven.min.js'
            }
        },

        /* watch is a filesystem watcher.  It will monitor the file system for changes and automatically execute a task */
        watch: {
            templates: {
                files: ['**/*.tmpl.html'],
                tasks: ["jst:compile"]
            }
        }

        });

    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // this is the default task, simply calling 'grunt' will execute this
    grunt.registerTask('default', ['jst:compile']);

    // build javascript documentation
    grunt.registerTask('docs', ['clean:docs','jsdoc']);

    grunt.registerTask('prod', ['uglify']);

    grunt.registerTask('reset', ['clean:reset'])
};