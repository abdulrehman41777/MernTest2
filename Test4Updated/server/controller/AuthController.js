import user from "../models/user.js";
import bcrypt from "bcrypt";

// Sigup Controller
const authController = async (req, res) => {
  try {
    const enPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body, enPassword);
    const registedUser = new user({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      address: req.body.address,
      password: enPassword,
    });

    const saveRegisteredUser = await registedUser.save();
    res.status(201).json(saveRegisteredUser);
  } catch (error) {
    res.status(500).json({ massage: "unable to register user" });
  }
};


// Login Controller
const loginController = async (req, res) => {
  try {
    const registedUser = await user.findOne({ email: req.body.email });
    const result = await bcrypt.compare(req.body.password, registedUser.password);

    if (result && registedUser) {
       return res.status(200).json(registedUser)
    }

    return res.status(404).json({massage: "Invalid username or password"})


  } catch (error) {
    res.status(500).json({ massage: "unable to login user" });
  }
};

export { authController, loginController };