import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import * as React from "react";

function App(props) {
  return (
    <>
      <div className="div">
      <Navbar />
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
      <Footer />
      </div>
    </>
  );
}


export default App;
