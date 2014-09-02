/* This sample is to show valid jsdoc documentation */

/** @typedef {object} myModuleExport
 * @property {string} name
 * @property {int} value
 * @property {boolean} truth
 * @property {function} test
 * @property {function} returnArray
 */

/**
 * myModule documentation
  * @returns {myModuleExport}
 */
var myModule = (function(){
    var exports = {name:'mytable', value:1, truth:true, test:test, returnArray:returnArray};

    return exports;

    /**
     * returnsArray returns an array of numbers
     * @returns {number[]}
     */
    function returnArray(){
        return [1,2,3,4,5];
    }

    /** this function return 'test'
     * @oaram {string}
     * */
    function test(param){
        return 'text';
    }

}());

