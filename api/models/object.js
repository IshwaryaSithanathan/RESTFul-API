'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectSchema = new Schema({
  key :{
   type : String
  },
  value :{
    type : String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  active:{
      type: Boolean,
      default:true
  }
});


module.exports = mongoose.model('Objects', ObjectSchema);