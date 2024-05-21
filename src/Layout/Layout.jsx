import { Outlet } from 'react-router'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout