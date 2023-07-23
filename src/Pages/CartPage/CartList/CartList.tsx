import React from 'react';
import styles from './CartList.module.scss';

// images
import cartImage from './../../../Assets/images/icons/cart.png';

// components
import CartProduct from './CartProduct/CartProduct';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {deleteAllCart} from '../../../redux/slices/cartSlice';

const CartList: React.FC = () => {
  const {cart} = useSelector((state: any) => state.cartSlice);
  const dispatch = useDispatch()

  return (
    <div className={styles.cartList}>
      <div className={styles.cartListContent}>
        <div className={styles.cartsListTopBlock}>
          <div className={styles.cartListTitleBlock}>
            <img width='29px' height='29px' src={cartImage} alt="" />
            <div className={styles.cartListTitle}>Все пиццы</div>
          </div>
          <div className={styles.cartListDeteleBlock}>
            <div className={styles.cartListDeleteText} onClick={() => dispatch(deleteAllCart(null))}>Очистить корзину</div>
          </div>
        </div>
        <div className={styles.cartListMainBlock}>
          {cart.map((obj: any) => {
            return <CartProduct
              key={obj.id} 
              id={obj.id}
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              category={obj.category}
              params={obj.params}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(CartList);