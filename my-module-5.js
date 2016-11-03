// THIS WORKS!

const self = {

  foo: () => console.log('foo has been called!'),

  bar: () => self.foo(),

}

module.exports = self;
