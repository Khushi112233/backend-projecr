import User from "../../modal/User.js"



export const Register = async (req, res) => {
    const { email, password , name } = req.body;

    if(email === "")
        res.status(400).json({error:"Please Enter email"});
    if(password === "")
        res.status(400).json({error:"Please enter password"});
    if(name === "")
        res.status(400).json({error:"Please enter name"});

    try {
        
        const response  = await User.create({email,password,name});
        if(response)
            res.status(200).json({msg:"User created successfully",response});
        else
            res.status(400).json({msg:"Something happining wrong"});
    } catch (error) {
        res.status(500).json({
            msg:"Something went wrong"
        })
    }

}