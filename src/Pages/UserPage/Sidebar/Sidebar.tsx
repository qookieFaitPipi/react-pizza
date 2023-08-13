import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// images
import logo from './../../../Assets/images/logo.svg';
import profile from './../../../Assets/images/icons/profile.png';
import payments from './../../../Assets/images/icons/payments.png';
import support from './../../../Assets/images/icons/support.png';

const Sidebar: React.FC = () => {
  const [sidebarState, setSidebarState] = useState<number>(0);

  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <Link className={styles.sidebarTopBlock} to='/'>
          <img className={styles.sidebarImage} src={logo} alt="logo" />
          <div className={styles.sidebarSupText}>Самая вкусная пицца во вселенной</div>
        </Link>
        <div className={styles.sidebarMiddleBlock}>
          <div className={styles.sidebarMiddleItem} onClick={() => setSidebarState(0)} style={sidebarState === 0 ? {backgroundColor: '#cccccc'} : {backgroundColor: '#fff'}}>
            <img className={styles.sidebarMiddleItemImage} src={profile} alt="profile" />
            <div className={styles.sidebarMiddleItemText} style={sidebarState === 0 ? {color: '#000'} : {color: '#a6a6a6'}}>Profile</div>
          </div>
          <div className={styles.sidebarMiddleItem} onClick={() => setSidebarState(1)} style={sidebarState === 1 ? {backgroundColor: '#cccccc'} : {backgroundColor: '#fff'}}>
          <img className={styles.sidebarMiddleItemImage} src={payments} alt="payments" />
            <div className={styles.sidebarMiddleItemText} style={sidebarState === 1 ? {color: '#000'} : {color: '#a6a6a6'}}>Payments</div>
          </div>
          <div className={styles.sidebarMiddleItem} onClick={() => setSidebarState(2)} style={sidebarState === 2 ? {backgroundColor: '#cccccc'} : {backgroundColor: '#fff'}}>
            <img className={styles.sidebarMiddleItemImage} src={support} alt="support" />
            <div className={styles.sidebarMiddleItemText} style={sidebarState === 2 ? {color: '#000'} : {color: '#a6a6a6'}}>Support</div>
          </div>
        </div>
        <div className={styles.sidebarBottomBlock} onClick={() => navigate('/')}>
          <div className={styles.sidebarBottomText}>Go back</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Sidebar);