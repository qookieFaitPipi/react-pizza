import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import axios from 'axios';

// components
import TopProfile from './TopProfile/TopProfile';

// images
import ava from './../../../Assets/images/logo.svg';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSettings } from '../../../redux/slices/userSlice';

const Profile: React.FC = () => {
  const [controlName, setControlName] = useState<string>('');
  const [controlTel, setControlTel] = useState<string>('');
  const [controlEmail, setControlEmail] = useState<string>('');

  const {userId, userName, userTel, userEmail} = useSelector((state: any) => state.userSlice);
  const dispatch = useDispatch()

  useEffect(() => {
    setControlName(userName);
    setControlTel(userTel);
    setControlEmail(userEmail);
  }, []);

  const saveSettingsHandler = () => {
    try {
      axios.post("http://0.0.0.0:5000/save_user_settings/" + userId, { userName: controlName, userTel: controlTel, userEmail: controlEmail }).then((res) => {
        dispatch(setSettings({
          userName: controlName,
          userTel: controlTel,
          userEmail: controlEmail
        }));
      })
    } catch(err) {
      console.log(err);
    }
  }

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
                <input value={controlName} onChange={(e) => setControlName(e.target.value)} type="text" placeholder='login' />
                <input value={controlTel} onChange={(e) => setControlTel(e.target.value)} type="text" placeholder='tel' />
              </div>
              <input value={controlEmail} onChange={(e) => setControlEmail(e.target.value)} type="text" placeholder='email' />
            </div>
            <div className={styles.userInfoItemSaveBlock}>
              <div className={styles.userInfoItemReverse}>вернуть назад</div>
              <div className={styles.userInfoItemSave} onClick={saveSettingsHandler}>Сохранить</div>
            </div>
          </div>
        </div>
        <div className={styles.userInfoColumn}></div>
      </div>
    </div>
  )
}

export default React.memo(Profile);