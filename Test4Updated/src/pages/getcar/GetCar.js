import axios from 'axios'
import React, { useState } from 'react'
import API_BASE_URL from "../../BaseUrl/config";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';

const GetCar = () => {

const [cars , setCars] = useState([]);

    const getCar = () => {
      try {
        axios.get(`${API_BASE_URL}/cars/all-cars`).then((response) => {
          setCars(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

useEffect( ()   => {
    getCar();
},[]) 

// console.log(cars, "here");

  return (
    <>
    <Header/>

    <div>
      <h1>Alpha</h1>
      {cars.map((data) => 
        <div style={{border:"solid 2px red", backgroundColor:"ButtonFace", borderRadius:"20px", marginTop:"20px"}} key={data._id}>
        <h1>{data.name}</h1>
        <h1>{data.amount}</h1>
        <h1>{data.model}</h1>
        <h1>{data.color}</h1>
        <h1>{data.email}</h1>
        </div>
    )}

    </div>
    <Footer />
    </>
  )
}

export default GetCar
