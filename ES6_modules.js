
//Import from other ES6 Modules:
import * as modObj from './someMod.js'; //Gets everything made available from export in someMod.js file, as an alias
import {proc} as modObj from './someMod.js'; //Gets a specific named export
import {component1,component2} from './someMod.js' //Getss multiple components at once

//Some general module code:
//Normally, this would involve a process of code using the contents importd.
let thisModuleCode1="Content of this module";

let thisModuleCode2=function(){
  return modObj.proc;
}

//Default (can only be one default):
export default thisModuleCode1;


//General export
export thisModuleCode2;
