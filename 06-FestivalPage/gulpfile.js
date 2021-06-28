const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// Utilidades JS

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

// Paths

const paths = {
    imagenes: "src/img/**/*",
    imagenesDestino: './build/img',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// Funcion para compilar SASS //
function css () {
    return src('src/scss/app.scss')                 // Lee el archivo //
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss( [autoprefixer(), cssnano() ]))
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') )                 // Guarda el archivo compilado //

}

function minificarCss () {
    return src('src/scss/app.scss')                
        .pipe( sass({                              
            outputStyle : 'compressed'
        })  )
        .pipe( dest('./build/css'))                 
}

function javascript () {
    return src(paths.js)
    .pipe( sourcemaps.init())
    .pipe( concat('bundle.js'))
    .pipe( terser () )
    .pipe( rename({suffix: '.min' }))
    .pipe( sourcemaps.write() )
    .pipe( dest('./build/js') )

}

function watchArchivos() {
    watch(paths.scss, css),
    watch(paths.js, javascript) ;
}

function imagenes () {
    return src(paths.imagenes)
        .pipe( imagemin())
        .pipe( dest(paths.imagenesDestino));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe ( webp() )
        .pipe ( dest(paths.imagenesDestino));
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.javascript = concat;

exports.default = series (css, javascript, imagenes, versionWebp, watchArchivos);