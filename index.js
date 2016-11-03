const sinon = require('sinon');
const assert = require('assert');

const moduleToTest = 0;   // change me

const myModule = require(`./my-module-${moduleToTest}`);

const spy = sinon.spy(myModule, 'foo');

myModule.bar();

assert(spy.called);
