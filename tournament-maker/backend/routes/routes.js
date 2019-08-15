var express = require("express");
var router = express.Router();

function sayHi(){
    console.log("hi");
}

router.route("/")
    .get(sayHi);





    module.exports = router;