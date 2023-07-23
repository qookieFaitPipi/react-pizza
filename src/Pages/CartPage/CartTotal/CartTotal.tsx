import React from 'react';
import styles from './CartTotal.module.scss';

import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

const CartTotal: React.FC = () => {
  const {totalPice, countProducts} = useSelector((state: any) => state.cartSlice);
  
  return (
    <div className={styles.cartTotal}>
      <div className={styles.cartTotalContent}>
        <div className={styles.cartTotalLeftBlock}>
          <div className={styles.cartTotalLeftText}>Всего пицц: {countProducts} шт.</div>
          <Link className={styles.cartTotalLeftInput} to='/'>Вернуться назад</Link>
        </div>
        <div className={styles.cartTotalRightBlock}>
          <div className={styles.cartTotalRightText}>Cумма заказа: {totalPice} ₽</div>
          <div className={styles.cartTotalRightInput}>Оплатить сейчас</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CartTotal);