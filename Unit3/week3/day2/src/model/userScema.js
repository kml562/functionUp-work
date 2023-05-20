import mongoose from "mongoose";
const mixedtype = mongoose.Schema.Types.Mixed;
const {model,Schema}= mongoose
//mongoose.Schema.Types.Mixed,==>>>>>
const userscema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
      type: String,
      require: true,
      unique: true,
  },
});

const User =model('User', userscema)
export default User;