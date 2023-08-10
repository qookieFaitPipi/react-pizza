import React, {useState } from 'react';
import axios from "axios";
import styles from './Categories.module.scss';

// images
import arrowTop from './../../../Assets/images/icons/arrow-top.svg';

// redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSortType, setCategoryType } from '../../../redux/slices/filterSlice';
import { setProductsState } from '../../../redux/slices/productSlice';

// types
import { ProductItemType } from '../../../@types/types';

const Categories: React.FC = () => {
  const [popupActive, setPopupActive] = useState(false);

  const {categoryType, sortType} = useSelector((state: any) => state.filterSlice);
  const {productList} = useSelector((state: any) => state.productSlice);

  const dispatch = useDispatch()

  const changeSortType = (sortType: number) => {
    if(sortType === 0 || sortType === 2) {
      let copy = Object.assign([], productList);
      copy.sort((a: ProductItemType, b: ProductItemType) => a.title > b.title ? 1 : -1);
      dispatch(setProductsState(copy));
    } else if(sortType === 1) {
      let copy = Object.assign([], productList);
      copy.sort((a: ProductItemType, b: ProductItemType) => a.price > b.price ? 1 : -1);
      dispatch(setProductsState(copy));
    }
    dispatch(setSortType(sortType))
  }

  const changeCategoryType = async(categoryType: number) => {
    try {
      const response = await axios.get('http://0.0.0.0:5000/get_products/product_category/' + categoryType);
      dispatch(setProductsState(response.data));
    } catch(err) {
      console.log(err);
    }

    dispatch(setCategoryType(categoryType))
  }

  return (
    <div className={styles.categories}>
      <div className={styles.categoriesContent}>
        <div className={styles.categoriesNav}>
          <div 
            onClick={() => changeCategoryType(0)} 
            className={categoryType === 0 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Все
          </div>
          <div 
            onClick={() => changeCategoryType(1)} 
            className={categoryType === 1 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Мясные
          </div>
          <div 
            onClick={() => changeCategoryType(2)} 
            className={categoryType === 2 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Вегетарианские
          </div>
          <div 
            onClick={() => changeCategoryType(3)} 
            className={categoryType === 3 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Гриль
          </div>
          <div 
            onClick={() => changeCategoryType(4)} 
            className={categoryType === 4 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Острые
          </div>
          <div 
            onClick={() => changeCategoryType(5)} 
            className={categoryType === 5 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Закрытые
          </div>
        </div>
        <div className={styles.categoriesSort}>
          <div className={styles.categoriesSortTop} onClick={() => setPopupActive(!popupActive)}>
            <img className={styles.arrowImage} src={arrowTop} alt="arrow-top" />
            <div className={styles.categoriesSortTopText}>Сортировка по {sortType === 0 ? 'популярности' : sortType === 1 ? 'цене' : sortType === 2 ? 'алфавиту' : 'nothing'}</div>
          </div>
          <div className={popupActive ? styles.categoriesSortPopupActive : styles.none}>
            <div 
              onClick={() => changeSortType(0)} 
              className={sortType === 0 ? styles.categoriesSortPopupItemActive : styles.categoriesSortPopupItem}>
              популярности
            </div>
            <div 
              onClick={() => changeSortType(1)} 
              className={sortType === 1 ? styles.categoriesSortPopupItemActive : styles.categoriesSortPopupItem}>
              цене
            </div>
            <div 
              onClick={() => changeSortType(2)} 
              className={sortType === 2 ? styles.categoriesSortPopupItemActive : styles.categoriesSortPopupItem}>
              алфавиту
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Categories);