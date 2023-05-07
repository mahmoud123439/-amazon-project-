import logo from './logo.svg';
import './App.css';
import Home from './Home';

import Navbar from './Navbar';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cart from './Cart';
function App() {


const [apiDataz,setApiDataz] = useState([]);
  

  // promise


 useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((resolve)=>{
    setApiDataz(resolve.data)
  }).catch((errz)=>{
      console.log(errz)
  })
 }, [])



  // apiData.map((items)=>{
  //     return (
        
  //     )
  // })

  return (
    <Router>
    <div className="">
      
        <Navbar />

      <Routes>
        <Route path="/" element={<Home AllApiProducts={apiDataz} />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
