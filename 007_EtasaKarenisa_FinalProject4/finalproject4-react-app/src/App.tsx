import React from 'react'

import './App.css'
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App