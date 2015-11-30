var gulp = require('gulp'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    gutil = require('gulp-util'),
    runSequence = require('run-sequence'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify');

var environment = 'production';

function productionOnly(cb, opts) {
    if (environment === 'production') {
        return cb(opts);
    } else {
        return gutil.noop();
    }
}

function developmentOnly(cb, opts) {
    if (environment === 'development') {
        return cb(opts);
    } else {
        return gutil.noop();
    }
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, dest) {
    var bundler = browserify({
            entries: [file],
            cache: {},
            packageCache: {}
        }, watchify.args),
        srcFile = file.substring(file.lastIndexOf('/')+1);

    if ( environment !== 'production' ) {
        bundler = watchify(bundler);
        bundler.on('update', function() {
            rebundle();
        });
    }

    function rebundle() {
        gutil.log('Running rebundle');
        return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe( source(srcFile) )
            .pipe( buffer() )
            .pipe( productionOnly(uglify) )
            .pipe( gulp.dest(dest) )
            .pipe( developmentOnly( browserSync.reload, {stream:true} ) );
    }

    return rebundle();
}

// ---------------------
// Cleanup
// ---------------------

gulp.task('clean', function(callback){
    return del(['example/dist','lib'], callback);
});

// ---------------------
// Static Files
// ---------------------

gulp.task('static:example', function() {
    return gulp.src(['example/src/index.html', 'example/src/example.css'])
        .pipe( gulp.dest('example/dist') );
});

// ---------------------
// Scripts
// ---------------------

gulp.task('scripts:lint', function(){
    return gulp.src('src/**/*.js')
        .pipe( eslint() )
        .pipe( eslint.format() )
        .pipe( eslint.failOnError() )
});

gulp.task('browserify:example', function() {
    return buildScript('./example/src/example.js','./example/dist');
});

// ---------------------
// Development Server
// ---------------------

gulp.task('server', function(){

    browserSync.init({
        server: {
            baseDir: "./example/dist"
        }
    });

});

// ---------------------
// Watch tasks
// ---------------------
gulp.task('watch', function () {
    gulp.watch('example/src/**/*.html', ['static:example']);
});

gulp.task('watch:lint', function () {
    gulp.watch('src/**/*.js', ['scripts:lint']);
});

// ---------------------
// Build tasks
// ---------------------
gulp.task('build', function (callback) {
    runSequence('clean', 'build:lib',
        ['static:example', 'browserify:example'],
        callback);
});

gulp.task('build:lib', function () {
    return gulp.src([ 'src/**/*.js' ])
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});


// ---------------------
// User facing tasks
// ---------------------

gulp.task('dev', function(callback){

    callback = callback || function() {};

    environment = 'development';
    runSequence('default', 'server', 'watch', 'watch:lint', callback);
});

gulp.task('default', ['build']);
