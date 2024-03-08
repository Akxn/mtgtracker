import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import * as React from "react";

function App() {
  return (
    <>
    <Navbar />
      <div className="div">
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
      <Footer />
      </div>
    </>
  );
}


export default App;
