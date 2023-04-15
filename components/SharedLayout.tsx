import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './SharedComponent'



const SharedLayout = () => {
  return (
    <>
    <main>
      <div className='bottom-effect'></div>
     
        <Outlet />
      <Footer />
    </main>
    </>
  )
}

export default SharedLayout