const mongoose= require('mongoose');

const productSchema = new mongoose.Schema({


        name:String,

        category:String,

        price:{
                type:Number,
                required:true,
                default:10
        } 
    

});
module.exports = mongoose.model('Product', productSchema)