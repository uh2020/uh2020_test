import React from 'react';
import './auth.scss';
import bg from '../../assets/bg_login.png';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData } from '../../redux/auth_reducer';
import EyeIcon from '../icons/bar/EyeIconIcon';
import { NavLink, Redirect } from 'react-router-dom';
import LoginWith from './LoginWith';
import EyeFormIcon from '../icons/bar/EyeFormIcon';
import EyeslashIcon from '../icons/bar/EyeslashIcon';

const Auth = () => {
  const dispatch = useDispatch();
  const regDone = useSelector((state) => state.auth.regDone);
  const authSub = (values) => {
    dispatch(setAuthData(values));
    console.log(values);
  };
  return (
    <div className="auth" style={{ backgroundImage: `url(${bg})` }}>
      {regDone ? <Redirect to="/friends" /> : <></>}
      <div className="auth-form">
        <div className="auth-form__container">
          <p className="auth-form__title">Вход</p>
          <AuthReduxForm onSubmit={authSub} />
          <div className="auth-form__social">
            <p className="auth-form__social-title">или c помощью</p>
            <LoginWith />
            {/* <NavLink to="/reg" className="auth-form__social-text">
              Создать страницу
            </NavLink> */}
            {/* <div className="auth-form__social-text">Создать страницу</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthForm = (props) => {
  const [pass, setPass] = React.useState('password');
  const checkPass = (val, state) => {
    const g = val === 'password' ? state('text') : state('password');
  };
  return (
    <form onSubmit={props.handleSubmit} className="auth-form__form">
      <Field
        component="input"
        required
        placeholder="Ваш телефон или Email"
        type="phone"
        name="telmail"
      />
      <div className="auth-pass__inner">
        <Field
          name="pass"
          required
          component="input"
          minLength="6"
          maxlength="20"
          placeholder="Пароль"
          type={pass}
        />
        <div
          className="auth-pass__eye"
          onClick={() => {
            checkPass(pass, setPass);
          }}
        >
          {pass === 'password' ? <EyeFormIcon /> : <EyeslashIcon />}
        </div>
      </div>
      <p>Забыли пароль?</p>
      <div className="auth__error"></div>
      <button>Войти</button>
      <NavLink to="/reg" className="auth-form__ln">
        Создать страницу
      </NavLink>
    </form>
  );
};
const AuthReduxForm = reduxForm({
  form: 'Auth',
})(AuthForm);

export default Auth;
