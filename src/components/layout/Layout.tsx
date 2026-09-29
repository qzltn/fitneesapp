import React from 'react'
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div>
    <header>
        <h1>Fitness App</h1>
         </header>
<main>
    <Outlet />
</main>
</div>
   
  )
}

export default Layout