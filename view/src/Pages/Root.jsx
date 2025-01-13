import React from 'react'
import {Outlet} from 'react-router'
import NavbarSection from '../Components/Navbar'
import Footer from '../Components/Footer'

function Root() {
  return (
    <>
    <NavbarSection/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root