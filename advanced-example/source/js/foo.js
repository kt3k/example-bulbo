require('./lib/baz')

class Foo {
  method() {
    console.log('This is foo.js')
  }
}

window.Foo = Foo
