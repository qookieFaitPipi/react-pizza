import React from 'react';
import styles from './CartProduct.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../../redux/slices/cartSlice';

type ParamsType = {
  type: string;
  size: number;
}

type CartProductProps = {
  id: number;
  title: string;
  price: number;
  imageURL: string;
  category: number;
  params: ParamsType
}

const CartProduct: React.FC<CartProductProps> = (props) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    const item = {
      id: props.id,
      key: props.id,
      title: props.title,
      price: props.price,
      imageURL: props.imageURL,
      params: {
        type: props.params.type,
        size: props.params.size
      }
    }
    dispatch(deleteFromCart({
      cart: item,
      totalPice: props.price,
    }))
  }

  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartProductContent}>    
        <div className={styles.cartProductImageBlock}>
          <img className={styles.cartProductImage} src={props.imageURL} alt="pic" />
        </div>
        <div className={styles.cartProductTitleBlock}>
          <div className={styles.cartProductTitle}>{props.title}</div>
          <div className={styles.cartProductSupTitle}>{props.params.type === '0' ? 'тонкое' : 'традиционное'} тесто, {props.params.size === 0 ? '26' : props.params.size === 1 ? '30' : props.params.size === 2 ? '40' : 'none'} см.</div>
        </div>
        <div className={styles.cartProductCountBlock}>
          <div className={styles.cartProductSubtraction}>-</div>
          <div className={styles.cartProductCount}>1</div>
          <div className={styles.cartProductAddition}>+</div>
        </div>
        <div className={styles.cartProductPriceBlock}>
          <div className={styles.cartProductPrice}>{props.price} ₽</div>
        </div>
        <div className={styles.cartProductDeleteBlock}>
          <div className={styles.cartProductDelete} onClick={deleteProduct}>&times;</div>
        </div>
      </div> 
    </div>
  )
}

export default React.memo(CartProduct);