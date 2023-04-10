import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';
import UpdateUserModal from '../../components/Updateuser/UpdateUserModal';

const UpdateUser = () => {
const [users , setUsers]= useState([]);
const [userid , setUserId]= useState();

// for modal
const [show , setShow] =useState(false);


// console.log(users);

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

    const handleButton = (data) => {
        setShow(true);
        setUserId(data); 
    };


    useEffect(() => {
        gettingUsers();
    },[]);



  return (
    <>
   
    <Header />

    <div className='container-fluid'>
    <div className='row'>
    <h1>Getting user data</h1>
    <div className='col-12' style={{border: "solid 2px red"}}>
    <table>
   <tr>
   <td>id</td>
   <td>name</td>
   <td>email</td>
   <td>number</td>
   <td>password</td>
   <td>Address</td>
   <td>Select</td>
   </tr>
   {users.map((data) => (
    <tr>
   <td>{data._id}</td>
   <td>{data.name}</td>
   <td>{data.email}</td>
   <td>{data.number}</td>
   <td>{data.password}</td>
   <td>{data.address}</td>
   <td><button 
   onClick={() => handleButton(data)}
   >Update</button></td>
   </tr>
   ))}
  </table>
{show ? 
 <UpdateUserModal setShow={setShow} 
 userIdData={userid} /> :
 ""}
  </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default UpdateUser