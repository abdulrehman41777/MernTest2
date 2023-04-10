import CheckOut from "../pages/CheckOut/CheckOut";
import DeleteCar from "../pages/DeleteCar/DeleteCar";
import DeleteUser from "../pages/DeleteUser/DeleteUser";
import Getuser from "../pages/GetUser/Getuser";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PostingProducts from "../pages/PostingProducts/PostingProducts";
import Signup from "../pages/SignUp/Signup";
import Sorting from "../pages/Sorting/Sorting";
import UpdateUser from "../pages/Updateuser/UpdateUser";
import CarAdd from "../pages/caradd/CarAdd";
import GetProducts from "../pages/getProducts/GetProducts";
import GetCar from "../pages/getcar/GetCar";
import GetCarContext from "../pages/getcarBYcontext/GetCarContext";
import SingleProductPage from "../pages/singleproductpage/SingleProductPage";
import UpdateCar from "../pages/updateCar/UpdateCar";




const routes = [

    {
        path:'/',
        element: <Home/>
    },

    {
        path:'/login',
        element: <Login />
    },

    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/getuser',
        element:<Getuser />
    },
    {
        path:'/deleteuser',
        element:<DeleteUser />
    },
    {
        path:'/updateuser',
        element:<UpdateUser />
    },
    {
        path:'/posting-products',
        element:<PostingProducts />
    },
    {
        path:'/get-products',
        element:<GetProducts />
    },
    {
        path:'/get-products/:id',
        element:<SingleProductPage />
    },
    {
        path:'/checkout/:id',
        element:<CheckOut />
    },
    {
        path:'/sorting',
        element:<Sorting />
    },
    {
        path:'/addcar',
        element:<CarAdd />
    },
    {
        path:'/getcar',
        element:<GetCar />
    },
    {
        path:'/getcarcontext',
        element:<GetCarContext />
    },
    {
        path:'/update_car',
        element:<UpdateCar />
    },
    {
        path:'/delete_car',
        element:<DeleteCar />
    },
]

export { routes };