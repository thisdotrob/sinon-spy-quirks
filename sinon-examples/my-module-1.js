// THIS DOESN'T WORK :(

const foo = () => {
  console.log('foo has been called!');
}

const bar = () => {
  foo();
}

module.exports = {
  foo,
  bar,
}
