import React, { useState } from 'react';
import styles from './Categories.module.scss';

// images
import arrowTop from './../../../Assets/images/icons/arrow-top.svg';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popupActive, setPopupActive] = useState(false);

  return (
    <div className={styles.categories}>
      <div className={styles.categoriesContent}>
        <div className={styles.categoriesNav}>
          <div 
            onClick={() => setActiveIndex(0)} 
            className={activeIndex === 0 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Все
          </div>
          <div 
            onClick={() => setActiveIndex(1)} 
            className={activeIndex === 1 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Мясные
          </div>
          <div 
            onClick={() => setActiveIndex(2)} 
            className={activeIndex === 2 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Вегетарианские
          </div>
          <div 
            onClick={() => setActiveIndex(3)} 
            className={activeIndex === 3 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Гриль
          </div>
          <div 
            onClick={() => setActiveIndex(4)} 
            className={activeIndex === 4 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Острые
          </div>
          <div 
            onClick={() => setActiveIndex(5)} 
            className={activeIndex === 5 ? styles.categoriesNavItemActive : styles.categoriesNavItem}>
            Закрытые
          </div>
        </div>
        <div className={styles.categoriesSort}>
          <div className={styles.categoriesSortTop} onClick={() => setPopupActive(!popupActive)}>
            <img className={styles.arrowImage} src={arrowTop} alt="arrow-top" />
            <div className={styles.categoriesSortTopText}>Сортировка по</div>
          </div>
          <div className={popupActive ? styles.categoriesSortPopupActive : styles.none}>
            <div className={styles.categoriesSortPopupItem}>популярности</div>
            <div className={styles.categoriesSortPopupItem}>цене</div>
            <div className={styles.categoriesSortPopupItem}>алфавиту</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Categories);