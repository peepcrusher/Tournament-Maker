var express = require('express');
var router = express.Router();
var controller = require("../controllers/tournament");

/* GET users listing. */
controller.getCompetitors('/', function(req, res, next) {
  res.json([{
    id:"1",
    username:"billy"
  },
{
  id: "2",
  username: "bobby"
}])
});

module.exports = router;
