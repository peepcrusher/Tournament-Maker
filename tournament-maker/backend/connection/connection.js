var mysql = require('mysql');

// cridentials to connect to our database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tournaments_db"
});
//create the connection
connection.connect(function(err){
if(err) throw err;

console.log("Connection Successful");
})

module.exports = connection;

//WORKING