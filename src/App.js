import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import * as React from "react";

function App(props) {
  return (
    <>
      <div className="div">
      <Navbar />
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
      </div>
    </>
  );
}


export default App;
