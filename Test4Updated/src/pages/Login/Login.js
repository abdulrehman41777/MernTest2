import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate }  from 'react-router-dom';
import API_BASE_URL from '../../BaseUrl/config';



const Login = () => {

  const navigate = useNavigate();
const [userInput, setUserInput] = useState({
  email: "",
  password: "",
});


const handleInputs = (e) => {
  setUserInput({ ...userInput, [e.target.name]: e.target.value });
  console.log(userInput);
};




    const LoginUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${API_BASE_URL}/auth/login`, userInput )
        .then(res => {
          if (res.status === 200) {
            console.log(res.data);
            localStorage.setItem('email', res.data.email);
            navigate('/')
        }
      })
        alert(`Successfully logged in`);
      }catch(error){
        console.log(error);
      }

    }

    // useEffect(() => {
  
    // },[]);

  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col'>
      <h1>Login</h1>

      <input 
      name="email" 
      placeholder='Email'
      value={userInput.email}
      onChange={handleInputs}
       type="email"  />

      <input 
      name="password"
      placeholder='password'
       value={userInput.password}
       onChange={handleInputs}
        type="password" />

        <button 
        onClick={LoginUser}
        >Login</button>
    </div>
    </div>
    </div>
  )
}

export default Login
