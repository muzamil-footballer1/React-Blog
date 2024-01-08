import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route index exact element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        {/* <Redirect to='/' /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;