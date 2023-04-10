import React, { useState } from 'react';
import API_BASE_URL from '../../BaseUrl/config';
import axios from 'axios';



const UpdateCarModal = ({ setShow , carsIdData }) => {

  console.log(carsIdData , "my data");

  const [carsInput, setCarsInput] = useState({

    name: carsIdData.name,
    amount: carsIdData.amount,
    model: carsIdData.model,
    color: carsIdData.color,
    email: carsIdData.email,

  });

  const handleInputs = (e) => {
    setCarsInput({ ...carsInput, [e.target.name]: e.target.value });
  };
 

  
// update function and api
const handleUpdate  = async (e) => {
  e.preventDefault();
  // console.log(carsIdData);
  try{
  await axios.patch(`${API_BASE_URL}/cars/update-car/${carsIdData._id}`, carsInput )
  }catch(error){
    console.log(error); 
  }
};
  

  return (
    <>
    <div className="modal-wrapper">
    <span className="close-modal" onClick={()=> setShow(false)}>X</span>
      <div className="form_container">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={carsInput.name}
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="amount"
            placeholder="amount"
            value={carsInput.amount}
            onChange={handleInputs}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="model"
            placeholder="model"
            value={carsInput.model}
            onChange={handleInputs}
          />
        </div>
     
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="color"
            placeholder="color"
            value={carsInput.color}
            onChange={handleInputs}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="email"
            value={carsInput.email}
            onChange={handleInputs}
          />
        </div>
          <button type="submit" 
          className="btn btn-primary"
          onClick={handleUpdate}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default UpdateCarModal;
