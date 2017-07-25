'use strict';

var mongoose = require('mongoose'),
Object = mongoose.model('Objects');

exports.create_a_obj = function(req, res) {
  var new_obj = new Object(req.body);
  Object.findOneAndUpdate({key: req.body.key}, {$set:{active:false}}, {new: true}, function(err, doc){
    if(err){
        res.send(err);
    }
  });
  new_obj.save(function(err, obj) {
    if (err)
        res.send(err);
    res.json({"key":obj.key,"value":obj.value,"timestamp":obj.created_date});
  });
};

exports.read_a_obj = function(req, res) {
  if(req.query.time!=null){
    Object.findOne({key :req.params.key, created_date : req.query.time}, function(err, obj) {
        if (err)
            res.send(err);
        res.json({"value":obj.value});
    });
  }
  else { 
      Object.findOne({key :req.params.key, active :true}, function(err, obj) {
        if (err)
            res.send(err);
        res.json({"value":obj.value});
      });
    };
}
