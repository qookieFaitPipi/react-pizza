import React from 'react';
import styles from './ProductInfo.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

const ProductInfo = () => {
  const {title, imageURL, description, price} = useSelector((state) => state.selectSlice);

  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfoContent}>
        <div className={styles.productInfoImageBlock}>
          <img className={styles.productInfoImage} src={imageURL} alt="" />
        </div>
        <div className={styles.productInfoTextBlock}>
          <div className={styles.productInfoTitle}>{title}</div>
          <div className={styles.productInfoParams}>{description}</div>
          <div className={styles.productInfoPrice}>Стоимость: {price}</div>
        </div>
      </div>
      <div className={styles.productInfoBackBlock}>
        <Link className={styles.productInfoBack} to='/'>Вернуться назад</Link>
      </div> 
    </div>
  )
}

export default React.memo(ProductInfo);