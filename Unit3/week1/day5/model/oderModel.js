import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;


const OderModel= mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:User,
        required:true,
},
productId:{
    type:ObjectId,
    ref:Product,
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


// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }