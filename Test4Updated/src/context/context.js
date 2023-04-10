import { createContext, useState } from "react";



export const myContext = createContext();


const ContextProvider = ({children}) => {
  
    const [isSidebar, setIsSidebar] = useState(false);

   return  (
    <myContext.Provider value={{
        isSidebar,
        setIsSidebar
    }} >
    {children}
    </myContext.Provider>
   )


}



export default ContextProvider;