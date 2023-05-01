import User from "../../modal/User.js"



export const Login = async (req, res) => {
    const { email, password } = req.body;

    if(email === "")
        res.status(400).json({error:"Please Enter email"});
    if(password === "")
        res.status(400).jsom({error:"Please enter password"});

    try {
        const response  = await User.findOne({email})
        if(response.password === password)
            res.status(200).json({msg:"User login successfull" , response})
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}