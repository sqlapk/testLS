var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    //jquery = require('gulp-jquery'),
    sourcemaps = require('gulp-sourcemaps'),
    spritesmith = require('gulp.spritesmith'),
    jquery = require('gulp-jquery'),
    notify = require('gulp-notify');


gulp.task('styl', function () {
    gulp.src('stylus/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(notify("Успех"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
        return gulp.src('./node_modules/jquery/src')
        .pipe(jquery({
        flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('js/vendor/'))

});

gulp.task('watch', function(){
    gulp.watch('stylus/*.styl', ['styl']);
})

gulp.task('sprite', function() {
    var spriteData =
        gulp.src('img/sprite/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }));

    spriteData.img.pipe(gulp.dest('img/sprite/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('css/')); // путь, куда сохраняем стили
});

gulp.task('default', ['styl','watch'], function () {
    // что-то делаем
});
