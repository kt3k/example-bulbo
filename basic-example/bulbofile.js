const { asset, dest } = require('bulbo')
const marked = require('gulp-marked')

asset('pages/**/*.md')
.pipe(marked())

dest('dist')
