//Asynchronous Module Definition



//AMD MODULES REQUIRE A LIBRARY CALLED AN "AMD LOADER" TO RUN (LIKE require.js)

define('MODULE_NAME', ['dep1', 'dep2'],function ( dep1, dep2 ) {

        //MODULE MAIN CODE:
        var Module1 = {
            method1:function(){
                console.log('This is what I do!');
            }
        }

        return Module1;
});

//ALTERNATE WAY OF WRITING:
define(
    'MODULE_NAME',                //ID (OPTIONAL)
    ['dep1', 'dep2'],             //DEPENDENCIES  (OPTIONAL)
    function ( dep1, dep2 ) {     //INSTANTIATOR FUNCTION

        //MODULE MAIN CODE:
        var Module1 = {
            method1:function(){
                console.log('This is what I do!');
            }
        }

        return Module1;
});
