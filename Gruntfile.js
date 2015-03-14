module.exports = function (grunt) {
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
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
            },
            appFiles: {
                files: [
                    {
                        expand: true,
                        cwd: 'resource/public/fonts/',
                        src: ['**'],
                        dest: 'web/fonts/'
                    },
                    {
                        expand: true,
                        cwd: 'resource/public/ico/',
                        src: ['**'],
                        dest: 'web/ico/'
                    },
                    {
                        expand: true,
                        cwd: 'resource/public/img/',
                        src: ['**'],
                        dest: 'web/img/'
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
            },
            appCSS: {
                files: {
                    'web/css/app.min.css': [
                        'resource/private/css/bootstrap-override.css',
                        'resource/private/css/app.css'
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
                        'vendor-front/bootstrap/dist/js/bootstrap.js',
                        'vendor-front/jquery-qrcode/jquery.qrcode.min.js'
                    ]
                }
            },
            appJS: {
                files: {
                    'web/js/app.min.js': [
                        'resource/private/js/app.js'
                    ]
                }
            }
        },
        
        /**
         * Launch tasks on file editing
         */
        watch: {
            css: {
                files: ['resource/private/css/*.css'],
                tasks: ['cssmin:appCSS']
            },
            javascript: {
                files: ['resource/private/js/*.js'],
                tasks: ['uglify:appJS']
            }
        }
        
    });
    
    // Tasks
    grunt.registerTask('default', ['copy', 'cssmin', 'uglify']);
};