import React from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default layout