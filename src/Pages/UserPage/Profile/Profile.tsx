import React, { useState } from 'react';
import styles from './Profile.module.scss';

// components
import TopProfile from './TopProfile/TopProfile';

// images
import ava from './../../../Assets/images/logo.svg';

const Profile: React.FC = () => {
  const [userLogin, setUserLogin] = useState<string>('');
  const [userTel, setUserTel] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  return (
    <div className={styles.userInfo}>
      <TopProfile />
      <div className={styles.userInfoContent}>
        <div className={styles.userInfoColumn}>
          <div className={styles.userInfoItem}>
            <div className={styles.userInfoItemImageBlock}>
              <img className={styles.userInfoItemImage} src={ava} alt="avatar" />
            </div>
            <div className={styles.userInfoItemTextBlock}>
              <div className={styles.userInfoItemSupText}>My profile</div>
              <div className={styles.userInfoItemText}>@qookieFaitPipi</div>
            </div>
            <div className={styles.userInfoItemInputBlock}>
              <div className={styles.topBlock}>
                <input value={userLogin} onChange={(e) => setUserLogin(e.target.value)} type="text" placeholder='login' />
                <input value={userTel} onChange={(e) => setUserTel(e.target.value)} type="text" placeholder='tel' />
              </div>
              <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="text" placeholder='email' />
            </div>
            <div className={styles.userInfoItemSaveBlock}>
              <div className={styles.userInfoItemReverse}>вернуть назад</div>
              <div className={styles.userInfoItemSave}>Сохранить</div>
            </div>
          </div>
        </div>
        <div className={styles.userInfoColumn}></div>
      </div>
    </div>
  )
}

export default React.memo(Profile);