var express = require('express')
var app = express()



 // ==============Question
 // function run() {
 //     "use strict";
 //     return {
 //        helloWorld: function () {
 //        str = { message: "Hello World"};
 //        return str
 //     }};
 // }


function run() {
    "use strict";
    return {
       helloWorld: function () {
       var str = { message: "Hello World"};
       console.log("string: ", str)
       return str
    }};
}
