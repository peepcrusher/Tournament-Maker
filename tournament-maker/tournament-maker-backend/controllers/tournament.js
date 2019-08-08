//Dependancies
var mysql = require("mysql")
var express = require("express")
var app = express();

//Create database cridentials 
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "tournaments_db"
});

//connect to the database
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected as id " + connection.threadId)
});

module.exports = {

 getCompetitors: function(req, res, next){
app.get("/", function(req, res){
    connection.query("SELECT * FROM competitors;", function(err, res){
        res.json(res);
    })
})
    }

};