import React, {useState } from 'react';
import styles from './Product.module.scss';

const Product = (props) => {
  const [type, setType] = useState(0);
  const [size, setSize] = useState(0);

  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <div className={styles.productImageBlock}>
          <img className={styles.productImage} src={props.imageUrl} alt="pizza" />
        </div>
        <div className={styles.productTitleBlock}>
          <div className={styles.productTitle}>{props.title}</div>
        </div>
        <div className={styles.productParamsBlock}>
          <div className={styles.productTypeBlock}>  
            <div onClick={() => setType(0)} className={type === 0 ?  styles.productTypeItemActive : styles.productTypeItem}>тонкое</div>
            <div onClick={() => setType(1)} className={type === 1 ?  styles.productTypeItemActive : styles.productTypeItem}>традиционное</div>
          </div>
          <div className={styles.productSizeBlock}>
            <div onClick={() => setSize(0)} className={size === 0 ?  styles.productTypeItemActive : styles.productTypeItem}>26 см.</div>
            <div onClick={() => setSize(1)} className={size === 1 ?  styles.productTypeItemActive : styles.productTypeItem}>30 см.</div>
            <div onClick={() => setSize(2)} className={size === 2 ?  styles.productTypeItemActive : styles.productTypeItem}>40 см.</div>
          </div>
        </div>
        <div className={styles.productBottomBlock}>
          <div className={styles.productPriceBlock}>
            <div className={styles.productPrice}>от {props.price} ₽</div>
          </div>
          <div className={styles.productAddBlock}>
            <div className={styles.productAdd}>+ Добавить <div className={styles.productAddCount}>2</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Product);