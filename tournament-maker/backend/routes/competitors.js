var express = require("express");
var Router = express.Router();
var connection = require('../connection/connection');



Router.get("/", function(req, res) {
    console.log("Before query");
    connection.query("SELECT * FROM competitors", function(err, response){
        console.log("After query");
        if(!err){
            console.log(response)
            res.send(response);
        }
        else{
            console.log(err);
        }
    })
})
    

    module.exports = Router;