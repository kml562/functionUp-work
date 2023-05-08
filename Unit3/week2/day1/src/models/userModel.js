const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    name: String,
	balance:Number,
	address:String,
	age: Number,
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
      },
	isFreeAppUser: Boolean
});
module.exports = mongoose.model('User', userSchema)