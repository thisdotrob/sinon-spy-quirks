// THIS WORKS!

'use strict';

class MyClass {

  foo() {
    console.log('foo has been called!');
  }

  bar() {
    this.foo();
  }

}

module.exports = new MyClass;
