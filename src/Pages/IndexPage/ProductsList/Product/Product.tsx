import React, {useState } from 'react';
import styles from './Product.module.scss';

// react-router-dom
import { useNavigate } from "react-router-dom";

// redux
import { useAppDispatch } from '../../../../redux/store';
import { addToCart } from '../../../../redux/slices/cartSlice';
import { pickProduct } from '../../../../redux/slices/productSlice';

// types
import { ProductItemType } from '../../../../@types/types';

const Product: React.FC<ProductItemType> = (props) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [type, setType] = useState<number>(0);
  const [size, setSize] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addProduct = () => {
    if(isAdded) {
      return
    }
    setIsAdded(!isAdded);
    const newItem = {
      id: props.id,
      key: props.id,
      title: props.title,
      price: props.price,
      imageURL: props.imageURL,
      params: {
        type: type,
        size: size
      }
    }
    dispatch(addToCart({
      totalPice: props.price,
      cart: newItem
    }))
  }

  const selectProduct = () => {
    navigate('/product/' + props.id);
    dispatch(pickProduct(props));
  }

  return (
    <div className={styles.product}>
      <div className={styles.productContent}>
        <div className={styles.productImageBlock} onClick={selectProduct}>
          <img className={styles.productImage} src={props.imageURL} alt="pizza" />
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
            <div className={styles.productAdd} onClick={addProduct}>{isAdded ? 'В корзине' : '+ Добавить'}<div className={styles.productAddCount}>1</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Product);