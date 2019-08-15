
//dependnacies
var express = require("express");
var app = express();
var CopmetitorRoutes = require('./routes/competitors');
var connection = require('./connection/connection');

var PORT = 3001;






// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/competitors', CopmetitorRoutes);

app.listen(PORT, function(){
    console.log("Server listening on PORT: " + PORT);
})
