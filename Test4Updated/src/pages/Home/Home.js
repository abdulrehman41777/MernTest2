import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Home = () => {

 
  return (
    <>
    <Header/>
    <div>
    <Link to="/getuser">Get Data</Link>
    <Link to="/deleteuser">Delete User</Link>
    <Link to="/updateuser">Update User</Link>
    <Link to="/addcar"> Addcar</Link>
    <Link to="/getcar"> Getcar</Link>
    <Link to="/getcarcontext">GetcarContext</Link>
    <Link to="/update_car">Update car</Link>
    <Link to="/delete_car">Delete car</Link>

    
    </div>
    <Footer />
    </>
  )
}

export default Home
