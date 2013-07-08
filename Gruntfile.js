module.exports = function(grunt) {

   grunt.initConfig({

      // Read package.json
      pkg: grunt.file.readJSON('package.json'),

      meta: {
         basePath: '',
         srcPath : 'src/',
         deployPath: 'dist/'
      },

      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',


      // Task configuration
      clean: {
         release: ['dist']
      },
      copy: {
         release: {
            files: [
               { expand: true, cwd: 'src/', src: [
                  '.htaccess', '_partials/**',
                  'img/**', 'index.html',
                  'feed.php'
               ],
                  dest: 'dist/'
               },
               {
                  expand: true, src: [
                     '_git_hook.php'
                  ],
                     dest: 'dist/'
               }
            ]
         }
      },
      less: {
         release: {
            options: {
               paths: ['src/less'],
               compress: true
            },
            files: {
               'dist/css/style.css': 'src/less/style.less'
            }
         }
      },
      useminPrepare: {
         html: 'dist/index.html'
      },
      usemin: {
        html: 'dist/index.html'
      },
      cssmin: {
         minify: {
            expand: true
         }
      },
      concat: {
         options: {
            separator: ""
         }
      },
      uglify: {
         options: {
            beautify: false,
            mangle: false
         }
      },
      watch: {
         options: {
            livereload: true
         },
         css: {
            files: ['src/less/style.less'],
            tasks: ['less']
         },
         other: {
            files: ['src/js/*', 'src/index.html']
         }
      },

      replace: {
         release: {
            src: ['dist/index.html', 'dist/js/script.js'],
            overwrite: true,
            replacements: [
               {
                  from: 'base href="/src/"',
                  to: 'base href="/"'
               },
               {
                  from: 'localhost:8888',
                  to: 'api.mattiaslyckne.se'
               }
            ]
         }
      }
   });

   // These plugins provide necessary tasks.
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-usemin');
   grunt.loadNpmTasks('grunt-text-replace');

    // Default task
   grunt.registerTask('default', ['clean', 'copy', 'less', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin', 'replace']);
};