const { asset, base } = require('bulbo')

const wrapper = require('layout-wrapper')
const marked = require('gulp-marked')
const frontMatter = require('gulp-front-matter')
const bundle = require('bundle-through')

base('source')

asset('source/js/*.js')
  .watch('source/js/**/*.js')
  .pipe(bundle({transform: 'babelify'}))

asset('source/pages/**/*.md')
  .pipe(frontMatter({property: 'fm'}))
  .pipe(marked())
  .pipe(wrapper.ejs({
    frontMatterProp: 'fm',
    layout: 'source/layout'
  }))
