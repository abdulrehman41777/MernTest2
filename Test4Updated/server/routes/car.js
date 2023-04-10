import express from 'express';
import Car from '../models/car.js';


const router = express.Router();


// posting car  
router.post('/post-car' , async (req, res) => {
    try{
        const newCar = new Car(req.body);
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});


// delete car 
router.delete("/delete-car/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const car = await Car.findByIdAndDelete(id);
        if(!car) {
            res.status(404).json({ message : "car not found" });
        } else {
            res.status(200).json(car)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Server error" });
    }
});

// Get Car 
router.get('/all-cars', async (req, res) => {

    try{
        const car = await Car.find();
        res.json(car);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Server error" });
    }
});


// update User 
router.patch('/update-car/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const UpdateCar =  await Car.findById(id);

        UpdateCar.name = req.body.name || UpdateCar.name;
        UpdateCar.amount = req.body.amount || UpdateCar.amount;
        UpdateCar.model = req.body.model || UpdateCar.model;
        UpdateCar.color = req.body.color || UpdateCar.color;
        UpdateCar.email = req.body.email || UpdateCar.email;
       
        const car = UpdateCar.save();
        res.status(200).json(car);
    } catch (error){
        console.log(error);
        res.status(500).json({ message : "Server Error" })
    }
});




export default router;
