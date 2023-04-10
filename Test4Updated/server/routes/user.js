import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// posting User
router.post('/post-user', async (req, res) => {
    try{
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "server error" });
    }

});

// delete users 
router.delete("/delete-user/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            res.status(404).json({ message : "User not found" });
        } else {
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Server error" });
    }
});

// Get Users 
router.get('/all-users', async (req, res) => {

    try{
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Server error" });
    }
})

// update User 
router.patch('/update-users/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const UpdateUser =  await User.findById(id);

        UpdateUser.name = req.body.name || UpdateUser.name;
        UpdateUser.email = req.body.email || UpdateUser.email;
        UpdateUser.email = req.body.email || UpdateUser.email;
        UpdateUser.number = req.body.number || UpdateUser.number;
        UpdateUser.address = req.body.address || UpdateUser.address;
        UpdateUser.password = req.body.password || UpdateUser.password;

        const user = UpdateUser.save();
        res.status(200).json(user);
    } catch (error){
        console.log(error);
        res.status(500).json({ message : "Server Error" })
    }
});


export default router;