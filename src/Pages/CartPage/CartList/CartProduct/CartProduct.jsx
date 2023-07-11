import React from 'react';
import styles from './CartProduct.module.scss';

// images
import logo from './../../../../Assets/images/logo.svg';

const CartProduct = () => {
  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProductContent}>    
        <div className={styles.cartProductImageBlock}>
          <img className={styles.cartProductImage} src={logo} alt="pic" />
        </div>
        <div className={styles.cartProductTitleBlock}>
          <div className={styles.cartProductTitle}>Title</div>
          <div className={styles.cartProductSupTitle}>тонкое тесто, 26 см.</div>
        </div>
        <div className={styles.cartProductCountBlock}>
          <div className={styles.cartProductSubtraction}>-</div>
          <div className={styles.cartProductCount}>2</div>
          <div className={styles.cartProductAddition}>+</div>
        </div>
        <div className={styles.cartProductPriceBlock}>
          <div className={styles.cartProductPrice}>200 ₽</div>
        </div>
        <div className={styles.cartProductDeleteBlock}>
          <div className={styles.cartProductDelete}>&times;</div>
        </div>
      </div> 
    </div>
  )
}

export default React.memo(CartProduct);