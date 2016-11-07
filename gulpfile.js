var gulp = require('gulp');
var nodemon = require('nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function() {
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./assets/css/*.css',
        './assets/js/*.js'
    ], { read: false });

    var injectOptions = {
        ignorePath: '/assets'
    };

    return gulp.src('./src/views/*.html')
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], function() {
    var options = {
        script: 'index.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: jsFiles
    };

    return nodemon(options).on('restart', function(ev) {
        console.log('Restarting....');
    });
});