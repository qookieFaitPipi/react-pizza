import React, { useEffect, useState } from 'react';

// components
import Header from './Header/Header';
import Categories from './Categories/Categories';
import ProductsList from './ProductsList/ProductsList';

const IndexPage = () => {
  const [productList, setProductList] = useState([]);
  const [sortCategoryType, setSortCategoryType] = useState(0);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  useEffect(() => {
    fetch('http://0.0.0.0:5000/get_products')
    .then(response => response.json())
    .then(data => setProductList(data) & setLoadingState(true)).catch(()=>{
      alert("Ошибка. Проверьте подключение");
    })
  }, [])

  return (
    <section>
      <Header />
      <Categories 
        setProductList={setProductList}
        sortCategoryType={sortCategoryType}
        setSortCategoryType={setSortCategoryType}
      />
      <ProductsList 
        sortCategoryType={sortCategoryType}
        setLoadingState={setLoadingState}

        productList={productList}         
        loadingState={loadingState}
      />
    </section>
  )
}

export default React.memo(IndexPage);
