import express from "express";
import cors from "cors";
import MongoDBConnection from "./MongoDBConnection.js";
import user from "./routes/user.js";
import authenticationroutes from "./routes/auth.js";
import product from "./routes/product.js";
import checkout from "./routes/checkout.js";
import cars from "./routes/car.js";

// importing path from path mpm i path
import path from "path";


const db = MongoDBConnection();
const app = express();

//////////For Multer////////////
// Defining __dirname 
const __dirname = path.resolve();

// Set up static file serving middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//////////For Multer////////////

app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/auth", authenticationroutes);
app.use("/product", product);
app.use("/checkout", checkout);
app.use("/cars", cars);




const port = 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  console.log("Connected To Databases");
});
