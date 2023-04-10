import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { myContext } from '../../context/context';
import './getuser.css';


const Getuser = () => {

const [users , setUsers]= useState([]);

// Our Context Api 
const {isSidebar, setIsSidebar} = useContext(myContext);

console.log(isSidebar);


    const gettingUsers = async () => {
        try{
            await axios.get(`${API_BASE_URL}/user/all-users`)
            .then((response) => {
                setUsers(response.data);
            })
        }catch(error){
            console.log(error, "Error getting users")
        }
    }

    useEffect(() => {
        gettingUsers();
    },[])
  return (
    <>
   
    <Header />

 
    <button onClick={()=> setIsSidebar(!isSidebar)}>Toggle</button>


    <div className='container-fluid'>
    <div className='row'>
    <h1 className={isSidebar ?  "red-color" : "blue-color" } >Getting user data</h1>
    <div className='col-12' style={{border: "solid 2px red"}}>
    <>
    <table>
   <tr>
   <td>id</td>
   <td>name</td>
   <td>email</td>
   <td>number</td>
   <td>password</td>
   <td>Address</td>
   </tr>

   {users.map((data) => (
    <tr>
   <td>{data._id}</td>
   <td>{data.name}</td>
   <td>{data.email}</td>
   <td>{data.number}</td>
   <td>{data.password}</td>
   <td>{data.address}</td>
   </tr>
   ))}

  </table>
  </>
  </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Getuser;
