import mongoose from "mongoose";


const carSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    amount:{
        type : Number,
        required: true,
    },
    model:{
        type: Number,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    email:{
        type : String,
        required: true,
    }
},
{ 
    timestamps: true
   }

) 

export default mongoose.model("Car", carSchema);