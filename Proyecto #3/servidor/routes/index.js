var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');


const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'MVC' });
});

module.exports = router;