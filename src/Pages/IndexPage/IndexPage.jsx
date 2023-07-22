import React, { useEffect, useState } from 'react';
import axios from "axios";

// components
import Header from '../../universal/Header/Header';
import Categories from './Categories/Categories';
import ProductsList from './ProductsList/ProductsList';

const IndexPage = () => {
  const [productList, setProductList] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  useEffect(() => {
    axios.get('http://0.0.0.0:5000/get_products').then((response) => {
      setProductList(response.data)
      setLoadingState(true)
    });
  }, [])

  return (
    <section>
      <Header />
      <Categories 
        productList={productList}
        setProductList={setProductList}
      />
      <ProductsList 
        setLoadingState={setLoadingState}
        productList={productList}
        loadingState={loadingState}
      />
    </section>
  )
}

export default React.memo(IndexPage);
