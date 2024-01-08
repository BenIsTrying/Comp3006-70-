var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiAsPromised = require('chai-as-promised');


var host = require("../host");
var should = chai.should();
var done = chai.done;
chai.use(chaiHttp);
chai.use(chaiAsPromised);


suite("Test suite description", function() {
    test("Test hello function", function() {
        let result = host.sayHello();
        chai.assert.isString(result, "Result should be string");
        chai.assert.equal(result, "hello", "Result should say 'hello'");

    });
    suiteTeardown(function(){
        host.closeHost();
    })
        
   });


   
