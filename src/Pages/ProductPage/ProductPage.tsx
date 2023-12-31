import React from 'react';

// components
import Header from '../../Universal/Header/Header';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductPage: React.FC = () => {
  return (
    <section>
      <Header />
      <ProductInfo /> 
    </section>
  )
}

export default React.memo(ProductPage);