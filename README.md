# Javascript Modules
Examples of various kinds of JavaScript modules.

JavaScript has been in a state of growth with respect to modular design over the years.
Often this has created some confusion over which module type we should be using.
Very often, if we are not creating from scratch, we may be relegated to using the code structure the library we are using requires.
Yet, a newer modern structure has emerged with ES6.

This repo contains some examples of the various types of modules you might encounter.

## IIFE - Immediately Invoked Function Expression  

A native module design that leverages the extreme flexibility of JavaScript functions to encapsulate code.

[IIFE_modules.js](IIFE_modules.js)

## AMD - Asynchronous Module Definition

The define definition is a common method utilized by particular libraries called AMD loaders.

[AMD_modules.js](AMD_modules.js)

### Usage:

#### In-browser:
- RequireJS http://requirejs.org
- curl.js http://github.com/unscriptable/curl
- bdLoad http://bdframework.com/bdLoad
- Yabble http://github.com/jbrantly/yabble
- PINF http://github.com/pinf/loader-js
- (and more)
#### Server-side:
-  RequireJS http://requirejs.org
-  PINF http://github.com/pinf/loader-js

## CJS - CommonJS

[CJS_modules.js](CJS_modules.js)

### Usage:

#### In-browser:
- curl.js http://github.com/unscriptable/curl
- SproutCore 1.1 http://sproutcore.com
- PINF http://github.com/pinf/loader-js
- (and more)
#### Server-side:
- Node http://nodejs.org
- Narwhal https://github.com/tlrobinson/narwhal
- Persevere http://www.persvr.org/
- Wakanda http://www.wakandasoft.com/


# ES6

The ECMAScript (ES) 6 version of modules are native JavaScript!

[ES6_modules.js](ES6_modules.js)

#### In-browser:
- Can be invoked with the script tag type attribute:

  ```
  <script src="./someModule.js" type="module"></script>
  ```


#### Server-side:
- Node http://nodejs.org

## Recommended References:
Check out these resources to go deeper!

https://addyosmani.com/writing-modular-js/
https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da
https://www.tutorialspoint.com/es6/es6_modules.htm
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## About the Author
Written by Dan Guinn
http://danguinn.com
