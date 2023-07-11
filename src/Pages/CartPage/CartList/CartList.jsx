import React from 'react';
import styles from './CartList.module.scss';

// images
import cart from './../../../Assets/images/icons/cart.png';

// components
import CartProduct from './CartProduct/CartProduct';

const CartList = () => {
  return (
    <div className={styles.cartList}>
      <div className={styles.cartListContent}>
        <div className={styles.cartsListTopBlock}>
          <div className={styles.cartListTitleBlock}>
            <img width='29px' height='29px' src={cart} alt="" />
            <div className={styles.cartListTitle}>Все пиццы</div>
          </div>
          <div className={styles.cartListDeteleBlock}>
            <div className={styles.cartListDeleteText}>Очистить корзину</div>
          </div>
        </div>
        <div className={styles.cartListMainBlock}>
          <CartProduct />
        </div>
      </div>
    </div>
  )
}

export default React.memo(CartList);