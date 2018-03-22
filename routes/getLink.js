var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var getLink = require('../models/Code');
var htmlspecialchars = require('htmlspecialchars');
/* GET ALL BOOKS */
router.get('/:id', function(req, res, next) {
  var hiId = htmlspecialchars(req.params.id);
    getLink.findOne({ _id: hiId }).select({_id: 1, title: 1,link: 1,code: 1})
    .lean()
    .exec((error, xCode) => {
       if (error||!xCode) {
        res.json({content: 'Lỗi rồi nhé!',
        statusCode: false});
       }else{
        res.json({content: xCode.link,
          code: xCode.code,
        statusCode: true});
       } 
    });
    
});

module.exports = router;
