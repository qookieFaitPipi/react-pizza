import React, {useState} from 'react';
import styles from './EntryPage.module.scss';
import axios from 'axios';

// react-router-dom
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/userSlice';

const EntryPage: React.FC = () => {
  const [userLogin, setUserLogin] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userEntry = () => {
    if(userLogin === '' || userPassword === '') {
      return;
    }
    try {
      axios.post('http://0.0.0.0:5000/entry', {userLogin: userLogin, password: userPassword}).then((response) => {
        if(response.data.status) {
          navigate('/');
          dispatch(login({userId: response.data.userId, userLogin: userLogin}))
          setUserLogin('');
          setUserPassword('');
        } else {
          alert("Неудачный вход");
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section className={styles.entryPage}>
      <div className={styles.entryContent}>
        <div className={styles.entryTitleBlock}>
          <div className={styles.entryTitle}>Entry</div>
          <div className={styles.entryDart} onClick={() => navigate('/')}>&times;</div>
        </div>
        <div className={styles.entryBodyBlock}>
          <div className={styles.entryFormBlock}>
            <input className={styles.entryFormInput} value={userLogin} onChange={(e) => setUserLogin(e.target.value)} type="text" placeholder="Your login" />
          </div>
          <div className={styles.entryFormBlock}>
            <input className={styles.entryFormInput} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="text" placeholder="Your password" />
          </div>
        </div>
        <div className={styles.entryBottomBlock}>
          <Link className={styles.entryBackLink} to="/register">Create account</Link>
          <div className={styles.entryContinueInput} onClick={userEntry}>Continue</div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(EntryPage);