const mongoose = require('mongoose');


const publicScema= new mongoose.Schema( {
 name:String,
 headQuarter:String,

}, { timestamps: true });


module.exports = mongoose.model('PublichBook', publicScema)

// isHardCover:{
//     type:Boolean,
//     default:false,
//  }

