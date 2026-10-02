import React from 'react'
import {createBrowserRouter } from "react-router";
import Login from '../pages/Login';
import Home from '../pages/Home';
import Layout from '../components/layout/Layout';
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
   ],

},




]) ;

export default router