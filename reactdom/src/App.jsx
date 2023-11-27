import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Nav from './components/layout/Nav';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/Login';


const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/" exact element={<About />}></Route>
      <Route path="/" exact element={<Contact />}></Route>
      <Route path="/" exact element={<ProductDetail />}></Route>
      <Route path='/login' element={<Login />} />
    </Routes>
      

  </>
);

export default App;