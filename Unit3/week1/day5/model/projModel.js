import mongoose from 'mongoose';
 import userModel from "./userModel.js"
 import orderModel from "./orderModel.js";
const ObjectId = mongoose.Schema.Types.ObjectId

const prodScema = new mongoose.Schema( {

    userId: {
        type:ObjectId,
        ref: "User",
        require:true,
        
    },
    ammount: Number,
    isFreeAppUser:{
        type:Boolean,
        default:false,
    },
    date: Date

})

module.exports=mongoose.model('Product', prodScema)
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }