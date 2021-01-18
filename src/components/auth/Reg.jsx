import React from 'react';
import './auth.scss';
import { Field, reduxForm, stopSubmit } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { setRegData } from '../../redux/auth_reducer';
import EyeslashIcon from '../icons/bar/EyeslashIcon';
import { NavLink, Redirect } from 'react-router-dom';
import LoginWith from './LoginWith';
import EyeFormIcon from '../icons/bar/EyeFormIcon';
const Reg = () => {
  const [Link, setLink] = React.useState(0);
  const regDone = useSelector((state) => state.auth.regDone);
  const dispatch = useDispatch();
  const regError = useSelector((state) => state.auth.error);
  React.useEffect(() => {}, [regError]);
  const regSub = (values) => {
    if (values.repass !== values.pass) {
      setLink('Incorrect password repeat');
    } else if (!values.age) {
      setLink('Are you over 18?');
    } else if (values.tel || values.mail) {
      dispatch(setRegData(values));
    } else {
      setLink('Fill out email or phone');
    }
  };
  return (
    <div
      className="auth"
      style={{
        backgroundImage: `url(${'https://img1.goodfon.com/original/2048x1367/5/b0/korolevstvo-danii-farerskie-5741.jpg'})`,
      }}
    >
      {regDone ? <Redirect to="/friends" /> : <></>}
      <div className="auth-form">
        <div className="auth-form__container">
          <p className="auth-form__title">Регистрация</p>
          <RegReduxForm regError={regError} Link={Link} onSubmit={regSub} />
          <div className="auth-form__social">
            <p className="auth-form__social-title">или c помощью</p>
            <LoginWith />
          </div>
        </div>
      </div>
    </div>
  );
};

let RegForm = (props) => {
  const [pass, setPass] = React.useState('password');
  const [repass, setRepass] = React.useState('password');

  const checkPass = (val, state) => {
    const g = val === 'password' ? state('text') : state('password');
  };

  return (
    <form onSubmit={props.handleSubmit} className="auth-form__form">
      <div className="auth-form__phone">
        <Field name="contry" value="+7" component="select">
          <option value="RU"> +7</option>
          <option value="BY">+375</option>
          <option value="UKR">+380</option>
        </Field>
        <Field
          component="input"
          placeholder="Телефон"
          type="tel"
          name="tel"
          minLength="6"
          maxlength="10"
        />
      </div>
      <Field component="input" placeholder="Email" type="mail" name="mail" />
      <div className="auth-pass__inner">
        <Field
          name="pass"
          required
          component="input"
          minLength="6"
          placeholder="* Придумайте пароль"
          type={pass}
          maxlength="20"
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

      <div className="auth-pass__inner">
        <Field
          component="input"
          name="repass"
          required
          minLength="6"
          placeholder="* Подтвердите пароль"
          type={repass}
          maxlength="20"
        />
        <div
          className="auth-pass__eye"
          onClick={() => {
            checkPass(repass, setRepass);
          }}
        >
          {repass === 'password' ? <EyeFormIcon /> : <EyeslashIcon />}
        </div>
      </div>
      <div className="auth-pass__checkBox">
        <Field component="input" type="checkbox" name="age" />
        <span>
          Нажимая кнопку продолжить, я подтверждаю что мне есть 18 лет и что я
          ознакомлен с <NavLink to="/">политикой конфиденциальности</NavLink>
        </span>
      </div>
      <div className="auth__error">
        {props.regError ? props.regError : null}
      </div>
      <div className="auth__error">{props.Link ? props.Link : null}</div>

      <button>Продолжить</button>
      <NavLink to="/auth" className="auth-form__ln">
        Войти
      </NavLink>
    </form>
  );
};
const RegReduxForm = reduxForm({
  form: 'reg',
})(RegForm);

export default Reg;
