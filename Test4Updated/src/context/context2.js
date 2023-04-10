import axios from "axios";
import { createContext } from "react";
import API_BASE_URL from '../BaseUrl/config';

// this is for products 

export const CarContext = createContext();

const CarProvider = ({children}) => {
  
    // const [cars, setCars] = useState([]);

    const getCars = async() => {
        try{
           const res =  await axios.get(`${API_BASE_URL}/cars/all-cars`)
           return res.data
            // .then(response => 
            // setCars(response.data)
            //     )
        }catch(error){
            // console.log(error);
           return error
        }
    }

    // getCars();
    
   return  (
    <CarContext.Provider value={{
        // cars
        getCars
    }} >
    {children}
    </CarContext.Provider>
   )

}



export default CarProvider;