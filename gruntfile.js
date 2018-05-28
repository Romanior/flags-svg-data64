module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {

        },
        svgmin: {
            dist: {
                options: {
                    plugins: [
                        { removeXMLProcInst: false }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'flags',
                    src: ['*.svg'],
                    dest: 'source'
                }]
            }
        },
    		grunticon: {
    		    myIcons: {
    		        files: [{
    		            expand: true,
    		            cwd: 'source',
    		            src: ['*.svg'],
    		            dest: "output"
    		        }],
    		        options: {
	                   cssprefix: '.icon-flag--',
                       defaultWidth: '50px',
                       defaultHeight: '30px'
    		        }
    		    }
    		}

    });

	grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-svgmin');


    grunt.registerTask('default', ['svgmin', 'grunticon:myIcons']);

};
