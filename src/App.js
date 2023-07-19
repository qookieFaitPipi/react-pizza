import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import CartPage from "./Pages/CartPage/CartPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

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
      <Route 
        path="*" 
        element={
        <NotFoundPage 

        />}
      />
    </Routes>
  );
}

export default App;
