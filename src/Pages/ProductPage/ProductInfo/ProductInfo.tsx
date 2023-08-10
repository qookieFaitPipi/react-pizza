import React from 'react';
import styles from './ProductInfo.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

const ProductInfo: React.FC = () => {
  const {pickProduct} = useSelector((state: any) => state.productSlice);

  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfoContent}>
        <div className={styles.productInfoImageBlock}>
          <img className={styles.productInfoImage} src={pickProduct.imageURL} alt="" />
        </div>
        <div className={styles.productInfoTextBlock}>
          <div className={styles.productInfoTitle}>{pickProduct.title}</div>
          <div className={styles.productInfoParams}>Не следует, однако забывать, что консультация с широким активом позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Равным образом консультация с широким активом способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.</div>
          <div className={styles.productInfoPrice}>Стоимость: {pickProduct.price}</div>
        </div>
      </div>
      <div className={styles.productInfoBackBlock}>
        <Link className={styles.productInfoBack} to='/'>Вернуться назад</Link>
      </div> 
    </div>
  )
}

export default React.memo(ProductInfo);