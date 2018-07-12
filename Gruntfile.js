var path = require('path');

module.exports = function (grunt) {

    // Auto-load tasks
    require('load-grunt-tasks')(grunt);

    // Auto-load configuration
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks')
    });

    // Register grunt tasks
    grunt.registerTask('build', [
        'clean',
        'webpack:build',
        'rem_to_px'
    ]);

    // Register grunt tasks
    grunt.registerTask('server', [
        'clean',
        'webpack-dev-server:start'
    ]);

    // Test task
    grunt.registerTask('test', [
        'karma:unit',
        'eslint'
    ]);

    grunt.registerMultiTask('rem_to_px', 'Parses CSS and recalculates all values to pixels.', function() {
        var dest = this.data.dest,
            options = this.options();

        this.files[0].src.forEach((filepath) => {
            grunt.log.writeln('Parsing ' + filepath + '.');

            var filecontent = grunt.file.read(filepath),
                regex = new RegExp('([0-9\\.]+)rem'),
                replacements = 0,
                match;

            // Calculate and replace rem with px
            while (match = regex.exec(filecontent)) {
                var pixelValue = Math.round(parseFloat(match[1]) * options.baseFontSize) + 'px';

                filecontent = filecontent.replace(match[0], pixelValue);
                replacements++;
            }

            grunt.log.ok(replacements + ' replacement(s) made in ' + filepath + '.');
            grunt.file.write(dest + '/' + path.basename(filepath), filecontent);
        });
    });
};
