var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var paths = {
  views: {
    src: './*.html',
    dest: './'
  },
  styles: {
    src: './*.css',
    dest: 'css/'
  },
  scripts: {
    src: './*.js',
    dest: 'js/'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(browserSync.stream());
}

function views() {
  return gulp.src(paths.views.src)
    .pipe(browserSync.stream());
}

function watch() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.views.src, views);
}


var build = gulp.series(gulp.parallel(styles, scripts, views));

exports.styles = styles;
exports.scripts = scripts;
exports.views = views;
exports.watch = watch;
exports.build = build;

// Default task called by just running `gulp` from cli
 
exports.default = build;
