import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



const Sorting = () => {
    const arr = [45, 56, 43, 36, 94, 34 , 72, 50];
    // decending arrays
    arr.sort((a, b) => b - a).reverse();
   

    return (
      <>
<Header />
    <div>
    {
      arr.map(data => <span>{data}, </span>)
    }
    </div>

    <Footer />
    </>
  )
}

export default Sorting;







