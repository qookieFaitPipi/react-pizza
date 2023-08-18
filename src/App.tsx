import React from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import CartPage from "./Pages/CartPage/CartPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import UserPage from "./Pages/UserPage/UserPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

import EntryPage from "./Pages/EntryPage/EntryPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/user/:id" element={<UserPage />} />

      <Route path="/entry" element={<EntryPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
