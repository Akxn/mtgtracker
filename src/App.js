import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import * as React from "react";
// import { useState } from 'react';

function App() {

  // const [result, setResult] = useState('');

  return (
    <body className="flex flex-col min-h-screen">
    <Navbar />
      <div className="div">
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
      </div>
      <Footer />
    </body>
  );
}


export default App;
