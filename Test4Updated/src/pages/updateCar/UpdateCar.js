import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';
import UpdateCarModal from '../../components/updatecar/UpdateCarModal';

const UpdateCar = () => {

    const [cars , setCars] = useState();
    const [carid , setCarId] = useState();

    // for modal
const [show , setShow] =useState(false);

    // console.log(cars, "i am here");

    const GetingCars = async () => {
        try{
            await axios.get(`${API_BASE_URL}/cars/all-cars`)
            .then((response) => {
                setCars(response.data);
            })}catch(err){
        console.log(err);
        }
    }

    const handleButton = (data) => {
        setShow(true);
        setCarId(data);
    }

    useEffect(() => {

        GetingCars();

    },[]);

  return (

    <>
    <Header />

    <div className='container-fluid'>
    <div className='row'>
    <div className='col-lg-12'>
     <h1>Alpha update car </h1> 

     <table>
     <tr>
     <td>_id</td>
     <td>name</td>
     <td>amount</td>
     <td>model</td>
     <td>color</td>
     <td>email</td>
     </tr>

     {cars && cars.length > 0 ? cars.map((data) => 
    <tr>
     <td>{data._id.substring(0,9)}</td>
     <td>{data.name}</td>
     <td>{data.amount}</td>
     <td>{data.model}</td>
     <td>{data.color}</td>
     <td>{data.email}</td>
     <td><button onClick={() => handleButton(data)}>Update This car</button></td>
     </tr>
     )
     : <div><h1>No Data to show</h1></div>
    }
     
     </table>

     {
        show ? 
        <UpdateCarModal 
        setShow={setShow}
        carsIdData={carid}
        /> 
        :
        ""
     }
    </div>
    </div>
    </div>

    <Footer />
    </>
  )
}

export default UpdateCar
