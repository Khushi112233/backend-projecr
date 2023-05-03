import nodemailer from "nodemailer"




export const sendemail = async (req, res) => {
    const { fname, lname, email, message } = req.body;

    // if (fname === "")
    //     res.status(400).json({ error: "Please Enter FName" });
    // if (lname === "")
    //     res.status(400).json({ error: "Please Enter LName" });
    // if (email === "")
    //     res.status(400).json({ error: "Please Enter email" });
    // if (message === "")
    //     res.status(400).json({ error: "Please enter Message" });

    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.USER, // generated ethereal user
              pass: process.env.PASSWORD, // generated ethereal password
            },
          });
        
          let info = await transporter.sendMail({
            from: '"Pet SHop" <khushijoshi1402@gmail.com>', // sender address
            to: "Joshikhushi78601@gmail.com", // list of receivers
            subject: "Contact form", // Subject line
            // text: "Hello world?", // plain text body
            text:`Name : ${fname}, Email : ${email} , Message: ${message}` ,  // html body
          });
          if(info)
            res.status(200).json({ msg: "Emial send successfully" })
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}