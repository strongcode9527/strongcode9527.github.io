// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./app/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src(['./app/js/lib/jquery.js','./app/js/lib/jquery-ui.min.js','./app/js/lib/jquery.fullPage.js','./app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./app/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/dist'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./app/js/*.js', function(){
        gulp.run('scripts','lint');
    });
		gulp.watch('./app/css/*.scss', function(){
				gulp.run('sass');
		});

});
