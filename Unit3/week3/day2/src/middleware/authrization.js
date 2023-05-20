
export const checkCrad = (req, res, next) => { 
    try {
        const { name, email, password } = req.body;
        if (!name && !email && !password) {
            return res.status(401).json({message:"fill all the info is required"});
        }
        next();
        
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};
