import React from 'react';
import styles from './CartTotal.module.scss';

import { Link } from 'react-router-dom';

const CartTotal = () => {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.cartTotalContent}>
        <div className={styles.cartTotalLeftBlock}>
          <div className={styles.cartTotalLeftText}>Всего пицц: 3 шт.</div>
          <Link className={styles.cartTotalLeftInput} to='/'>Вернуться назад</Link>
        </div>
        <div className={styles.cartTotalRightBlock}>
          <div className={styles.cartTotalRightText}>Cумма заказа: 900 ₽</div>
          <div className={styles.cartTotalRightInput}>Оплатить сейчас</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CartTotal);