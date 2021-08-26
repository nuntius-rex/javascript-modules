

//CommonJS - JavaScript API design (EARLIER USE IN NODE JS)


// package/lib is a dependency we require
var lib = require('package/lib');

// some behaviour for our module
function hello(){
    lib.hello('hello world!');
}

// export (expose) hello to other modules
exports.hello = hello;
