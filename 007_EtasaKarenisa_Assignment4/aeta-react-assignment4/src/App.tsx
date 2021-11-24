import React from 'react';
import './App.css';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
      <Navbar></Navbar>
      <div className="Body">
        <Articles></Articles>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
