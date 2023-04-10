import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../../BaseUrl/config";
import { Button } from "react-bootstrap";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const getSingleProduct = () => {
    try {
      axios
        .get(`${API_BASE_URL}/product/single-product/${id}`)
        .then((response) => {
          setSingleProduct(response?.data);
          console.log(response.data, "response");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);


  const checkOut = () => {
    navigate(`/checkout/${id}`);
  };


  return (
    <div>

      <img style={{ height:"20%", width:"20%" }} src={`${API_BASE_URL}/${singleProduct.image}`} />

     {/* {singleProduct.gallery_image.map((image) => 
      <img src={`${API_BASE_URL}/${image}`} />
  )}
     */}


      <h1> {singleProduct.title} </h1>
      <h1> {singleProduct.email} </h1>
      <h1> {singleProduct.price} </h1>
      <h1> {singleProduct.ratings} </h1>

      <Button onClick={() => checkOut(singleProduct)}>Purchase</Button>
    </div>
  );
};

export default SingleProductPage;
