import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import API_BASE_URL from '../../BaseUrl/config';

const DeleteCar = () => {

    const [cars , setCars] = useState([]);

    //  console.log(cars);

    const GettingCars = async () => {
        try {
            await axios.get(`${API_BASE_URL}/cars/all-cars/`)
            .then((response) => {
                setCars(response.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const DeleteSingleCar = async (id) => {
        // console.log(id);
        try {
            axios.delete(`${API_BASE_URL}/cars/delete-car/${id}`)
            alert("car has been deleted successfully");
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        GettingCars();
    },[]);

  return (

    <>
    <Header />
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-lg-12'>
    <h1> Deleting car</h1>

    <table>
    
    <tr>
    <td>_id</td>
    <td>name</td>
    <td>amount</td>
    <td>model</td>
    <td>color</td>
    <td>email</td>
    </tr>

    {cars &&  cars.length > 0 ? cars.map((car) =>
        <tr>
    <td>{car._id}</td>
    <td>{car.name}</td>
    <td>{car.amount}</td>
    <td>{car.model}</td>
    <td>{car.color}</td>
    <td>{car.email}</td>
    <td><button onClick={() => DeleteSingleCar(car._id)
    }>Delete
    </button></td> 
    </tr>
      
  ) : 

  <div> 
  <h3> No data found</h3>
  </div>
}
    </table>
    </div>
    </div>
     

    </div>
    <Footer />
    </>
  )
}

export default DeleteCar
