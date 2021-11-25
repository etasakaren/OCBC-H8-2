import React from 'react';
import './App.css';
import Queues from './components/Queues';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
      <Navbar></Navbar>
      <div className="Body">
        <Queues></Queues>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
