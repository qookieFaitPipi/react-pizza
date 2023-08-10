import React, { useState } from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product';
import ProductSkeleton from './ProductSkeleton/ProductSkeleton';

// redux
import { useSelector } from 'react-redux';

// types
import { ProductItemType } from '../../../@types/types';

type ProductsListProps = {
  loadingState: boolean
  setLoadingState: (idx: boolean) => void,
};

const ProductsList: React.FC<ProductsListProps> = (props: ProductsListProps) => {
  const {productList} = useSelector((state: any) => state.productSlice);
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className={styles.productsList}>
      <div className={styles.productsListContent}>
        <div className={styles.productsListTopBlock}>
          <div className={styles.productsListTitle}>Все пиццы</div>
          <input className={styles.logoSearchInput} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Поиск...' type="text" />
        </div>
        <div className={styles.productsListMainBlock}>
          {props.loadingState ?
            productList.filter((item: any) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj: ProductItemType) => {
              return <Product
                key={obj.id} 
                id={obj.id}
                title={obj.title}
                price={obj.price}
                imageURL={obj.imageURL}
                product_category={obj.product_category}
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