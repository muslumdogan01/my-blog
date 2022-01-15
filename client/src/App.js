import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Detail from "./Pages/Detail";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
 
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Category/:id" element={<Category />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Routes>
     
    </div>
  );
}

export default App;
