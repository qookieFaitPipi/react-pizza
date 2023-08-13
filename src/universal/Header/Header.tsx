import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

// images
import logo from './../../Assets/images/logo.svg';
import cart from './../../Assets/images/icons/cart.svg';
import user from './../../Assets/images/icons/user.png';

// redux
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const {totalPice, countProducts} = useSelector((state: any) => state.cartSlice);
  const {userLogin} = useSelector((state: any) => state.userSlice);

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
          <Link className={styles.headerCartBlock} to='/cart'>
            <span className={styles.headerTotalPrice}>{totalPice} ₽ |</span>
            <img className={styles.headerIconCard} src={cart} width='14px' height='14px' alt='cart'/>
            <div className={styles.headerIconCount}>{countProducts}</div>
          </Link>
          <Link className={styles.headerUserBlock} to={userLogin ? '/user' : '/entry'}>
            <img className={styles.headerUserIcon} src={user} alt="user" />
            <div className={styles.heaaderUserNick}>{userLogin}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);