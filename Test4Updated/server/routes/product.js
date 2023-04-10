import express from "express";
import Product from "../models/products.js";
// Multer module importing
import upload from "../utills/multer.js";


const router = express.Router();

// posting Product
router.post(
  "/post-product",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "gallery_image", maxCount: 5 },
  ]),
  async (req, res) => {
    try {
      const { title, email, price, ratings } = req.body;

      const imagePath = req.files['image'][0].path; 
      const gallery = req.files['gallery_image'].map((file) => file.path); 

      const newProduct = new Product({
        title,
        email,
        price,
        ratings,
        image: imagePath,
        gallery_image: gallery
      });
      const saveProduct = await newProduct.save();
      res.status(201).json(saveProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error" });
    }
  }
);


// getProducts 
router.get('/all-products', async (req, res) => {
    try{
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Server error" });
    }
})

// get Single Product 
router.get('/single-product/:id', async (req, res) => {

  try{
    const {id} = req.params;
      const SingleProduct = await Product.findById(id);
      res.json(SingleProduct);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message : "Server error" });
  }
})







export default router;
