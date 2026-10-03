
import {createBrowserRouter } from "react-router";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Layout from '../components/layout/Layout';
import Food from "../pages/Food";

import Profile from "../pages/Profile";
import Activity from "../pages/Activity";



const router = createBrowserRouter([
{
    path:"/",
    Component:Login,
},
  
{
   Component:Layout,
   children:[

    {
    path:"/home",
    Component:Home,

    },
       {
    path:"/food",
   Component:Food,

    },
     {
    path:"/activity",
   Component:Activity,

    },
    
     {
    path:"/profile",
  Component:Profile,

    },
    
   ],

},




]) ;

export default router