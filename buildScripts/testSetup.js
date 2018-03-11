// This file isn't transpiled, so must use Common.js and ES5

// Register babel to transpile before ur tests run
require('babel-register')();

// Disable webpack fetures that Mocha doesn't understands
require.extensions['.css'] = function() {};
