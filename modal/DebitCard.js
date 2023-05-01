import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        address:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        pinCode:{
            type:String
        },
        nameOnCard:{
            type:String
        },
        cardNumber:{
            type:String
        },
        expMonth:{
            type:String
        },
        expYear:{
            type:String
        },
        cvv:{
            type:String
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("card",userSchema);

 export default schema;