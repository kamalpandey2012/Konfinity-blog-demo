/*eslint-disable no-var*/
process.env.NODE_ENV = 'test';
require('babel-register')();

require.extensions['.css'] = function () { return null; };
require.extensions['.png'] = function () { return null; };
require.extensions['.jpg'] = function () { return null; };

var jsdom = require('jsdom').jsdom;
var exposedProps = ['window', 'document', 'navigator'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach(property => {
  if (global[property] === 'undefined') {
    global[property] = document.defaultView[property];
    exposedProps.push(property);
  }
});

global.navigator = {
  userAgent: 'node.js'
};
