import React from 'react';

// components
import Header from '../../universal/Header/Header';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductPage = () => {
  return (
    <section>
      <Header />
      <ProductInfo /> 
    </section>
  )
}

export default React.memo(ProductPage);