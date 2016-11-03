// THIS DOESN'T WORK :(

const foo = () => {
  console.log('foo has been called!');
}

const bar = () => {
  foo();      // doesn't matter if you make this "this.foo()"...
}

module.exports = {
  foo,
  bar,
}
