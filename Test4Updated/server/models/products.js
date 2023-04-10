import { Schema , model } from "mongoose";

const ProductSchema = new Schema({

    title: {
        type : String,
        required: true, 
    },
    
    email: {
        type : String,
        required: true, 
    },

    price: {
        type : Number,
        required: true, 
    },
    ratings: {
        type : Number,
        required: true, 
    },
    image: {
        type : String,
        required: true,
    },
    gallery_image: {
        type : Array,
        required: true,
    },

})

export default model("product", ProductSchema);
