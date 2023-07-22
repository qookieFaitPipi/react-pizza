import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

// images
import logo from './../../Assets/images/logo.svg';
import cart from './../../Assets/images/icons/cart.svg';

// redux
import { useSelector } from 'react-redux';

const Header = () => {
  const {totalPice, countProducts} = useSelector((state) => state.cartSlice);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeftBlock}>
          <img className={styles.headerLogo} src={logo} alt='logo' />
          <Link className={styles.headerTitleBlock} style={{textDecoration: 'none', color: '#000'}} to='/'>
            <div className={styles.headerTitle}>REACT PIZZA</div>
            <div className={styles.headerSupTitle}>Cамая вкусная пицца во вселенной</div>         
          </Link>
        </div>
        <div className={styles.headerRightBlock}>
          <Link className={styles.headerIconBlock} to='/cart'>
            <span className={styles.headerTotalPrice}>{totalPice} ₽ |</span>
            <img className={styles.headerIconCard} src={cart} width='14px' height='14px' alt='cart'/>
            <div className={styles.headerIconCount}>{countProducts}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);