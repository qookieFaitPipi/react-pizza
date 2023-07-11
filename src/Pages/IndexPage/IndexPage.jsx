import React from 'react';

// components
import Header from './Header/Header';
import Categories from './Categories/Categories';
import ProductsList from './ProductsList/ProductsList';

const IndexPage = () => {
  return (
    <section>
      <Header />
      <Categories />
      <ProductsList />
    </section>
  )
}

export default React.memo(IndexPage);
