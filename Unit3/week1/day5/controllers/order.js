export const createorder= async()=>{
    try {
        let data= req.body;
        let newuser = userModel.create(data);
        res.status(200).json({message:newuser})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
