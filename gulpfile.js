var watch = require('gulp-watch');
var gulp = require('gulp');
var shell = require('gulp-shell');
var path = require('path');

gulp.task("assets", ["entities"], function()
{
    gulp.src("")
        .pipe(shell("cd assets/; python directory.py"));
});

gulp.task("entities", function()
{
    gulp.src("")
        .pipe(shell("cd entities/loadable/; python generate.py"));
});

var fs = require('fs');

gulp.task("pack", function() {
    gulp.src(["assets/new_player", "assets/NPC/*", "assets/Packable/*", "!**/*.ase", "!**/*.png"], {read: false})
        .pipe(shell(
            "<%= buildCommand(file) %>",
            {
              templateData: {
                buildCommand: function(file) {
                    var outputName = path.basename(file.path);
                    var outputFinal = path.join(file.path, outputName);
                    var filesToMatch = path.join(file.path, "*.ase");

                    return "/Applications/Aseprite.app/Contents/MacOS/aseprite -b --sheet " + outputFinal + ".png --data " + outputFinal + ".json " + filesToMatch + " --list-tags --filename-format '{title}_{frame}' --ignore-empty";
                }
              }
            }
        ));
});

gulp.task("watch", ['assets'], function()
{
    watch(["assets/**/*.{png,oel,xml,mp3}"], function() {
        gulp.start("assets");
    });

    watch(["entities/loadable/**.as", "!entities/loadable/E.as"], function() {
        gulp.start("entities");
    });
});
