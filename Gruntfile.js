module.exports = function (grunt) {

    var cssFiles = [
        'resources/public/css/bootstrap.min.css',
        'resources/public/css/bootstrap-datetimepicker.min.css',
        'resources/public/css/site.css'
    ];

    var jsFiles = [
        'resources/public/lib/jquery-2.1.1.min.js',
        'resources/public/lib/highstock.js',
        'resources/public/lib/bootstrap.min.js',
        'resources/public/lib/moment.min.js',
        'resources/public/lib/bootstrap-datetimepicker.min.js'
    ];

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                keepSpecialComments: 0
            },
            combine: {
                files: {
                    'resources/public/css/logging-dashboard.css': cssFiles,
                }
            }
        },
      
        uglify: {
          my_target: {
            files: {
              'resources/public/lib/libs.min.js': jsFiles
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};
