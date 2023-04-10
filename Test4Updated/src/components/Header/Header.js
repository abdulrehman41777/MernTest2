import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useEffect, useState } from 'react';


const Header = () => {
  const [getlocalstorage, SetLocalStorage] = useState();

  // console.log(getlocalstorage, "i am here");


  const Logout = () => {
    localStorage.clear();
    GetLocalStorage();
  }

  const GetLocalStorage = () => {
    SetLocalStorage(localStorage.getItem("email"));
    }


    useEffect(() => {
      GetLocalStorage();
  },[]);


  return (

    <div>
    <div className={styles.header}>
    <Link to="/" className={styles.logo}>CompanyLogo</Link>
    <div className={styles.header_right}>
    <Link to="/">Home</Link>
    <Link to="/posting-products">Post Products</Link>
    <Link to="/get-products">Get Products</Link>
    <Link to="/signup">SignUp</Link>
    <Link to="/sorting">Sorting</Link>
 
{getlocalstorage ?
  
  <Link to='/' onClick={Logout}>Logout</Link>
  :
  <Link to="/login">Login</Link>
}

    <Link>{getlocalstorage}</Link>
    </div>
  </div>

    
    </div>
  )
}

export default Header
