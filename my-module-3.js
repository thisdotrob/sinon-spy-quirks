// THIS WORKS!

const foo = () => {
  console.log('foo has been called!');
}

const bar = () => {
  module.exports.foo();
}

module.exports = {
  foo,
  bar,
}
