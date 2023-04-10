import { Schema , model } from "mongoose";

const UserSchema = new Schema({

    name: {
        type : "string",
        required: true, 
    },
    
    email: {
        type : "string",
        required: true, 
    },

    number: {
        type : Number,
        required: true, 
    },
    address: {
        type : "string",
        required: true, 
    },
    password: {
        type : "string",
        required: true, 
    },

})

export default model("user", UserSchema);
