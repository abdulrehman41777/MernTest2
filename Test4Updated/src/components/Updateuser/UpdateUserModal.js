import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../BaseUrl/config';




const UpdateUserModal = ({ setShow, userIdData }) => {

  const [userInput, setUserInput] = useState({
    name: userIdData.name,
    email: userIdData.email,
    number: userIdData.number,
    address: userIdData.address,
    password: userIdData.password,
  });


  const handleInputs = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

// update function and api
const handleUpdate  = async (e) => {
  e.preventDefault();
  console.log(userIdData);
  try{
  await axios.patch(`${API_BASE_URL}/user/update-users/${userIdData._id}`, userInput )
  }catch(error){
    console.log(error); 
  }

}

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
                value={userInput.name}
                onChange={handleInputs}
              />
            </div>
            <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="email"
              value={userInput.email}
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="number"
            placeholder="number"
            value={userInput.number}
            onChange={handleInputs}
          />
        </div>
       
      <div className="mb-3">
      <input
        type="text"
        className="form-control"
        name="address"
        placeholder="address"
        value={userInput.address}
        onChange={handleInputs}
      />
    </div>
    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      name="password"
      placeholder="password"
      value={userInput.password}
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


export default UpdateUserModal;
