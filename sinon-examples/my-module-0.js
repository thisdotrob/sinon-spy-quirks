// THIS DOESN'T WORK :(

function foo() {
  console.log('foo has been called!');
}

function bar() {
  foo();
}

module.exports = {
  foo,
  bar,
}
