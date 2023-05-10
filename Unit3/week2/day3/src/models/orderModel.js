const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const OderModel= mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"User",
        required:true,
},
productId:{
    type:ObjectId,
    ref:"Product",
    required:true,
},
amount:Number,
isFreeAppUser:{
    type:Boolean,
    default:false,
    
},
date:{
    type:Date
}
})

module.exports=mongoose.model('Order', OderModel)