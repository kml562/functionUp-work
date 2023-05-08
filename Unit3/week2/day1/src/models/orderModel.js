const mongoose= require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userModel= require("./userModel")


const OrderModel= mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"User",
        required:true,
        isValid:true,
},
productId:{
    type:ObjectId,
    ref:"Product",
    required:true,
    isValid:true,
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

module.exports=mongoose.model('Order', OrderModel)