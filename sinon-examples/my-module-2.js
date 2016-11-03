// THIS WORKS!

function foo() {
  console.log('foo has been called!');
}

function bar() {
  this.foo();
}

module.exports = {
  foo,
  bar,
}
