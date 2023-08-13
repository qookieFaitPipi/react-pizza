import React, {useState} from 'react';
import styles from './RegisterPage.module.scss';
import axios from 'axios';

// react-router-dom
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [userLogin, setUserLogin] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userRePassword, setUserRePassword] = useState<string>('');

  const navigate = useNavigate();

  const userRegister = () => {
    if(userPassword !== userRePassword) {
      return;
    } else if(userLogin === '' || userPassword === '') {
      return;
    }
    try {
      axios.post('http://0.0.0.0:5000/register', {login: userLogin, password: userPassword}).then((response) => {
        if(response.data.status) {
          setUserLogin('');
          setUserPassword('');
          setUserRePassword('');
          navigate('/entry');
        } else {
          alert("Пользователь с таким именем уже зарегистрирован");
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section className={styles.registerPage}>
      <div className={styles.registerContent}>
        <div className={styles.registerTitleBlock}>
          <div className={styles.registerTitle}>Register</div>
          <div className={styles.registerDart} onClick={() => navigate('/')}>&times;</div>
        </div>
        <div className={styles.registerBodyBlock}>
          <div className={styles.registerFormBlock}>
            <input className={styles.registerFormInput} value={userLogin} onChange={(e) => setUserLogin(e.target.value)} type="text" placeholder="Your login" />
          </div>
          <div className={styles.registerFormBlock}>
            <input className={styles.registerFormInput} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="text" placeholder="Your password" />
          </div>
          <div className={styles.registerFormBlock}>
            <input className={styles.registerFormInput} value={userRePassword} onChange={(e) => setUserRePassword(e.target.value)} type="text" placeholder="Your password" />
          </div>
        </div>
        <div className={styles.registerBottomBlock}>
          <Link className={styles.registerBackLink} to="/entry">Already registered?</Link>
          <div className={styles.registerContinueInput} onClick={userRegister}>Continue</div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(RegisterPage);