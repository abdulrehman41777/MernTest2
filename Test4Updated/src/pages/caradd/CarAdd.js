import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import API_BASE_URL from "../../BaseUrl/config";

const CarAdd = () => {

    const [name , setName] = useState("");
    const [amount , setAmount] = useState("");
    const [model , setModel] = useState("");
    const [color , setColor] = useState("");
    const [email , setEmail] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("amount", amount);
        formData.append("model", model);
        formData.append("color", color);
        formData.append("email", email);

        try{
            axios.post(`${API_BASE_URL}/cars/post-car`, formData, {
                headers:{
                    "Content-Type": "application/json",
                },
            });
            alert("car has been added");
        }catch(error)
        {
            console.log("Error", error);
        }
    };



  return (
    <>
    <Header />
    <div>

    <form onSubmit={handleSubmit}>
    <div>
    
    <input
    type="text"
    value={name}
    placeholder='name'
    onChange={(e) => setName(e.target.value)}
    />

    <input
    type="number"
    value={amount}
    placeholder='amount'
    onChange={(e) => setAmount(e.target.value)}
    />
    <input
    type="number"
    value={model}
    placeholder='model'
    onChange={(e) => setModel(e.target.value)}
    />

    <input
    type="text"
    value={color}
    placeholder='color'
    onChange={(e) => setColor(e.target.value)}
    />
    <input
    type="text"
    value={email}
    placeholder='email'
    onChange={(e) => setEmail(e.target.value)}
    />
    
    <div className="d-block w-25 mt-3">
    <button  type="submit">
      Submit
    </button>
  </div>

    </div>
    </form>
      
    </div>
    <Footer/>
    </>
  )
}

export default CarAdd
