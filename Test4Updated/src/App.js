import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from './routes/routes'
import ContextProvider from './context/context';
import CarProvider from './context/context2';


function App() {

  const element = useRoutes(routes);

  return (

    <>
    <ContextProvider>
    <CarProvider>
    {
      element
    }
    </CarProvider>
    </ContextProvider>
    </>
  );
}

export default App;
