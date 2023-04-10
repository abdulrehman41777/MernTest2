import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const DeleteUser = () => {

    const [users , setUsers]= useState([]);

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


        const DeleteUser = (id) => {
            try {
                axios.delete(`${API_BASE_URL}/user/delete-user/${id}`)
                .then((res) => {
                    console.log(res.data);
                    alert('deleted');
                    gettingUsers();
                })
                .catch((err) => {
                    console.log(err);
                })
            } catch(error){
                console.log(error);
            }

        }

        useEffect(() => {
            gettingUsers();
        },[])
  return (
      <>
    <Header/>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col'>
    <h1>Deleting User</h1>

    <table>
    <tr>
    <td>_id</td>
    <td>name</td>
    <td>Email</td>
    <td>number</td>
    <td>address</td>
    <td>password</td>
    <td>Select</td>
    </tr>
{users.map((data) => (
    <tr>
    <td>{data._id}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.number}</td>
    <td>{data.address}</td>
    <td>{data.password}</td>
    <td> <button onClick={() => DeleteUser(data._id)}>Delete</button></td>
    </tr>

  ))}
  </table>
  </div>
    </div>
    
    </div>
    <Footer />
    </>
  )
}

export default DeleteUser
