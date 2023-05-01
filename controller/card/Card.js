import Card from "../../modal/DebitCard.js"



export const CardSubmit = async (req, res) => {
    const {name, email, password, address, city, state, pinCode, nameOnCard, expYear, expMonth, cvv } = req.body;

    if(name === "")
        res.status(400).json({ error: "Please Enter Name" });
    if (email === "")
        res.status(400).json({ error: "Please Enter email" });
    if (password === "")
        res.status(400).json({ error: "Please enter password" });
    if (address === "")
        res.status(400).json({ error: "Please enter adress" });
    if (city === "")
        res.status(400).json({ error: "Please enter city" });
    if (state === "")
        res.status(400).json({ error: "Please enter state" });
    if (pinCode === "")
        res.status(400).json({ error: "Please enter pincode" });
    if (nameOnCard === "")
        res.status(400).json({ error: "Please enter name on card" });
    if (expYear === "")
        res.status(400).json({ error: "Please enter expYear" });
    if (expMonth === "")
        res.status(400).json({ error: "Please enter expMonth" });
    if (cvv === "")
        res.status(400).json({ error: "Please enter CVV" });

    try {
        const response = await Card.create({name, email, password, address, city, state, pinCode, nameOnCard, expYear, expMonth, cvv})
        if (response)
            res.status(200).json({ msg: "User Card details submit successfully"})
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}