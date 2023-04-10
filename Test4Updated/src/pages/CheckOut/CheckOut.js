import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../BaseUrl/config';

const CheckOut = () => {

  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  // form Fields 
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState("tok_visa");
  const [card_number, setCard_number] = useState("");
  const [card_exp_month, setCard_exp_month] = useState("");
  const [card_exp_year, setCard_exp_year] = useState("");
  const [card_cvc, setCard_cvc] = useState("");
 



  const handleCheckout = async () => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/checkout/${id}`, {
      email,
      id,
      amount: singleProduct.price,
      card_number, 
      card_exp_month,
      card_exp_year,
      card_cvc,
    });
    alert("Payment Success");
    console.log(data, "Response Of Checkout");
  } catch (error) {
    console.error(error);
  }
};


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


  return (
    <>
    <div>

      <h1>Alpha here</h1>
      <form>
        <img 
        style={{ width:"20%", height:"20%" }} 
        src={`${API_BASE_URL}/${singleProduct.image}`} />
        <h3>
          Title : {singleProduct.title}
        </h3>
        <h3>
          Pirce : {singleProduct.price}
        </h3>
        <h3>
          Ratings : {singleProduct.ratings}
        </h3>

        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

     
        {/* <input placeholder='Token' value={token} onChange={(e) => setToken(e.target.value)} /> 
  */}

        <input placeholder='card_number' value={card_number} onChange={(e) => setCard_number(e.target.value)} />  

        <input placeholder='card_exp_month' value={card_exp_month} onChange={(e) => setCard_exp_month(e.target.value)} />

        <input placeholder='card_exp_year' value={card_exp_year} onChange={(e) => setCard_exp_year(e.target.value)} />

        <input placeholder='card_cvc' value={card_cvc} onChange={(e) => setCard_cvc(e.target.value)} />



      </form>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
    </>
  )
}

export default CheckOut
