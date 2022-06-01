import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';


import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='app'>
    <Routes>
      <Route path='/checkout' element = {<><Header/><Checkout/></>}/>  
      <Route path='/login' element = {<Login/>}/>  
       <Route path='/' element = {<><Header/><Home/></>}/> 
    </Routes></div>
  </Router> 
    
  );
}

export default App;
