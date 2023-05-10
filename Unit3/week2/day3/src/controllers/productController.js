const productModel= require('../models/productModel')

const createproduct= async()=>{
    try {
        let data= req.body;
        let newuser = productModel.create(data);
        res.status(200).json({message:newuser})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = createproduct;