import React, { useEffect, useState } from 'react';
import axios from "axios";

// components
import Header from '../../Universal/Header/Header';
import Categories from './Categories/Categories';
import ProductsList from './ProductsList/ProductsList';

// redux
import { useDispatch } from 'react-redux';
import { setProductsState } from '../../redux/slices/productSlice';

const IndexPage: React.FC = () => {
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    axios.get('http://0.0.0.0:5000/get_products').then((response) => {
      dispatch(setProductsState(response.data));
      setLoadingState(true);
    });
  }, [])

  return (
    <section>
      <Header />
      <Categories />
      <ProductsList 
        setLoadingState={setLoadingState}
        loadingState={loadingState}
      />
    </section>
  )
}

export default React.memo(IndexPage);
