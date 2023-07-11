import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <Routes>
      <Route 
        index path="/" 
        element={
        <IndexPage 

        />}
      />
      <Route 
        path="/cart" 
        element={
        <CartPage 

        />}
      />
    </Routes>
  );
}

export default App;
