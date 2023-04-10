import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SignUp = () => {

 const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        number: "",
        address: "",
        password: "",
      });
  

      const handleInputs = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
        console.log(userInput);
      };


      const postNewUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${API_BASE_URL}/auth/register`, userInput )
        }catch(error){
            console.log(error)
        }
      }


  return (
    <>
    <Header />
    <div className='container-fluid'>
    <h1> SignUp Users</h1>
    <div className='row'>
    <div className='col-12' style={{border: "solid 2px red"}}>

   <label className="form-label">Name</label>
    <input  
    type="text"
    name="name"
    value={userInput.name}
    onChange={handleInputs}
    className="form-control"/>


    <label className="form-label">Email</label>
    <input  
    type="text"
    name="email"
    value={userInput.email}
    onChange={handleInputs}
    className="form-control"/>


    <label className="form-label">Number</label>
    <input  
    type="text"
    name="number"
    value={userInput.number}
    onChange={handleInputs}
    className="form-control"/>

    <label className="form-label">Address</label>
    <input  
    type="text"
    name="address"
    value={userInput.address}
    onChange={handleInputs}
    className="form-control"/>

    <label className="form-label">Password</label>
    <input  
    type="text"
    name="password"
    value={userInput.password}
    onChange={handleInputs}
    className="form-control"/>

    <button onClick={postNewUser}>SignUp</button>
  </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp
