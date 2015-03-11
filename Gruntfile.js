module.exports = function (grunt) {
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        /*
         * Direct copy asset files
         */
        copy: {
            vendorFiles: {
                files: [
                    {
                        expand: true,
                        cwd: 'vendor-front/font-awesome/fonts/',
                        src: ['**'],
                        dest: 'web/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'vendor-front/bootstrap/dist/fonts/',
                        src: ['**'],
                        dest: 'web/fonts/'
                    }
                ]
            }
        },
        
        /*
         * Minify CSS
         */
        cssmin: {
            vendorCSS: {
                files: {
                    'web/css/vendor.min.css': [
                        'vendor-front/bootstrap/dist/css/bootstrap.css',
                        'vendor-front/bootstrap/dist/css/bootstrap-theme.css',
                        'vendor-front/font-awesome/css/font-awesome.css'
                    ]
                }
            }
        },
        
        /*
         * Minify JS
         */
        uglify: {
            vendorJS: {
                files: {
                    'web/js/vendor.min.js': [
                        'vendor-front/jquery/dist/jquery.js',
                        'vendor-front/bootstrap/dist/js/bootstrap.js'
                    ]
                }
            }
        }
    });
    
    // Tasks
    grunt.registerTask('default', ['copy', 'cssmin', 'uglify']);
};