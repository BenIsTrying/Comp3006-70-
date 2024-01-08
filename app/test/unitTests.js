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
    test("Test get /admins ", function() {
        let app = host.server;
        chai.request(app).get("/admins")
        .end(function(error, response){
            chai.assert.equal(response.status, 200);
        })

    });
    test("Test get /seats ", function() {
        let app = host.server;
        chai.request(app).get("/seats")
        .end(function(error, response){
            chai.assert.equal(response.status, 200);
        })

    });
    test("Test get /movies ", function() {
        let app = host.server;
        chai.request(app).get("/movies")
        .end(function(error, response){
            chai.assert.equal(response.status, 200);
        })

    });
    test("Test get /users ", function() {
        let app = host.server;
        chai.request(app).get("/users")
        .end(function(error, response){
            chai.assert.equal(response.status, 200);
        })

    });
    

    // test("Test admin login", function() {
    //     let result = host.adminSignIn();
    //     chai.assert.isString(result, );
    //     chai.assert.equal(result, "Dave admin123", "Result should say 'hello'");

    // });
    suiteTeardown(function(){
        host.closeHost();
    })
        
   });


   
