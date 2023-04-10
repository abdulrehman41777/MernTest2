import React, { useContext, useState } from 'react';
import { CarContext } from '../../context/context2';
import { useEffect } from 'react';


const GetCarContext = () => {
    const [cars , SetCars] = useState([]); 

    const {getCars} = useContext(CarContext)

// console.log(cars);

    const callingData = async () => {
          
      const response = await getCars();
      SetCars(response);
    //   console.log(response, "abcd")
    }

    useEffect(() => {
        callingData();
    }, [])

  return (
    <>
    <div>
    <h1>Alpha </h1>

    {cars.map((data) =>
        <div style={{border:"solid 2px red", borderRadius:30, padding:20, marginTop:"5px" }}>  
        <h1>{data.name}</h1>
        <h1>{data.color}</h1>
        <h1>{data.email}</h1>
        <h1>{data.model}</h1>
        <h1>{data.amount}</h1>
        <h1>{data._id.substring(0 , 10)}</h1>
        </div>
        )}

    </div>
    </>
  )
}

export default GetCarContext;
