let gulp 				= require('gulp'),
		sass 				= require('gulp-sass'),
		bs	 				= require('browser-sync').create(),
		mini 				= require('gulp-clean-css'),
		pref 				= require('gulp-autoprefixer'),
		minjs				= require('gulp-uglifyjs'),
		del 				= require('del'),
		cache				= require('gulp-cache'),
		image				= require('gulp-imagemin'),
		png					= require('imagemin-pngquant'),
		imgMoz 				= require('imagemin-mozjpeg');

gulp.task('sass', function() {
	return gulp.src('app/sass/style.scss')
	.pipe(sass())
	.pipe(pref({/* browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], */ cascade: true}))
	.pipe(mini())
	.pipe(gulp.dest('app/css'))
	.pipe(bs.stream());
});
gulp.task('js', function(){
	return gulp.src('app/js/**/*.js')
	.pipe(minjs())
	.pipe(gulp.dest('build/js'));
});
gulp.task('serv', gulp.series('sass', function() {
	bs.init({
		server: {
			baseDir: "./app"
		},
		notify: false,
		https: false
	});
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html').on('change', bs.reload);
	gulp.watch('app/js/script.js').on('change', bs.reload);
}));
gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
});
gulp.task('clean', async function() {
	return del.sync('build');
});
gulp.task('clear', function (callback) {
	return cache.clearAll();
});
gulp.task('build', async function() {
  gulp.series('js');
	var imageCompress = gulp.src('app/img/**/*')
		.pipe(cache(image([imgMoz({
				quality: 85
			})])))
		.pipe(gulp.dest('build/img'));
	var fonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('build/fonts'));
	var css = gulp.src('app/css/**/*')
		.pipe(gulp.dest('build/css'));
	var html = gulp.src('app/views/*.html')
	  .pipe(gulp.dest('build'));
});

exports.build = gulp.parallel('clean', 'build');
exports.default = gulp.series('serv');