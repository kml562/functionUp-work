import userModel from "../model/userScema.js";

export const createUser = async (req, res) => {
  try {
    let data = req.body;
    let user = await userModel.create(data);
    if (!user) {
      return res.status(409).json({ message: "user is alredy exits" });
    }
    res.status(201).json({ message: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


