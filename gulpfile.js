var 
gulp = require('gulp'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
exec = require('child_process').execSync,
browserSync = require('browser-sync'),
reload = require("browser-sync").reload;


function hugo() {
    var cmd = 'hugo --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/"';
    var result = exec('rm -r -f ./public', {encoding: 'utf-8'});
    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

// Compile SCSS files to CSS
gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        .pipe(autoprefixer({
            browsers : ['last 20 versions']
        }))
        .pipe(gulp.dest('static/css')
    )
});

gulp.task('hugo', ['scss'], function() {
    hugo();
});

gulp.task('build', ['hugo'], reload);

gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: './public/'
        },
        open: false
    });
})

gulp.task('default', ['serve'], function() {
    gulp.watch(['layouts/**/*', 'content/**/*', 'archetypes/**/*', 'src/scss/*.scss', 'src/js/*.js', 'src/img/*.*'], ['build']); 
})