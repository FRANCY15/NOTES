import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import SelectPpal from './components/Notes/SelectPpal';
import Register from './components/Login/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
  <Route path='/Register' element={<Register/>}/>
    <Route path='/SelectPpal' element={<SelectPpal/>}/>
    <Route path='/' element={<Login/>}/>
  </Routes>
</BrowserRouter>
);
