var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


/* GET home page. */
router.get('/', function(req, res, next) {
    knex.table('team').select().then(function(data) {
      console.log(data);
      res.render('index', {data: data});
    });
});

module.exports = router;
