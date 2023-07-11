import React from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product';

const ProductsList = () => {
  const onSearch = (event) => {
    //props.setSearchValue(event.target.value);
  }
  return (
    <div className={styles.productsList}>
      <div className={styles.productsListContent}>
        <div className={styles.productsListTopBlock}>
          <div className={styles.productsListTitle}>Все пиццы</div>
          <input className={styles.logoSearchInput} onChange={onSearch} placeholder='Поиск...' type="text" />
        </div>
        <div className={styles.productsListMainBlock}>
          <Product />
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProductsList);