import React from 'react';
import styles from './TopProfile.module.scss';

// redux
import { useSelector } from 'react-redux';

// images
import ava from './../../../../Assets/images/icons/user.png';

const TopProfile = () => {
  const {userLogin} = useSelector((state: any) => state.userSlice);

  return (
    <div className={styles.topProfile}>
      <div className={styles.topProfileContent}>
        <div className={styles.topProfileTitleBlock}>
          <div className={styles.topProfileTitle}>My dashboard</div>
          <div className={styles.topProfileSupTitle}>Welcome to your profile</div>
        </div>
        <div className={styles.topProfileControlBlock}>
          <img className={styles.topProfileControlImage} src={ava} />
          <div className={styles.topProfileControlLogin}>{userLogin}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopProfile);