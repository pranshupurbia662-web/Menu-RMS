import React from 'react';

import Navbar from './Component/Navbar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Main_Course from './pages/Main_course';
import Starter from './pages/Starter';
import Desserts from './pages/Desserts';
import Bread from './pages/Bread'



const App = () => {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/drinks" element={<Drinks />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/maincourse" element={<Main_Course />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/desserts" element={<Desserts />} />
        
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;