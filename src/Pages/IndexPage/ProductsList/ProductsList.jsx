import React from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product';
import ProductSkeleton from './ProductSkeleton/ProductSkeleton';

const ProductsList = (props) => {
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
          {props.loadingState ?
            props.productList.map((obj) => {
              return <Product
                key={obj.id} 
                id={obj.id}
                title={obj.title}
                price={obj.price}
                imageURL={obj.imageURL}
                category={obj.category}
              />
            })
            :
            [...new Array(9)].map((_, index) => <ProductSkeleton key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProductsList);