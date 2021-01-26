import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonBrown,
  ButtonBrownLine,
  ButtonCasual,
} from '../../../commonElements/buttons/Buttons';
import EyeFormIcon from '../../../icons/bar/EyeFormIcon';
import EyeslashIcon from '../../../icons/bar/EyeslashIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import IPhoneIcon from '../../../icons/profile/IPhoneIcon';
import MacIcon from '../../../icons/profile/MacIcon';

const ProfileSettingsSafety = (props) => {
  return (
    <div className="pr__privacy">
      <div className="pr__privacy-block pr__privacy-block-fr">
        <div className="pr__privacy-block-header pr__safety-header">
          <NavLink to="/profile/settings/safety">
            <p
              style={
                props.location.pathname.includes(
                  '/profile/settings/safety/change'
                )
                  ? { marginRight: '20px', color: '#7C7474' }
                  : null
              }
            >
              Данные
            </p>
          </NavLink>
          {props.location.pathname.includes(
            '/profile/settings/safety/change'
          ) ? (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/profile/settings/safety/change"
                activeClassName="active"
                className={'f-info__header__item fr__media-inn'}
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Изменение Данных
                </p>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: '#7c7474' }}
                ></span>
              </NavLink>
            </div>
          ) : null}
        </div>
        <Switch>
          <Route
            exact
            path="/profile/settings/safety"
            render={() => <ProfileSettingsSafetyData />}
          />
          <Route
            exact
            path="/profile/settings/safety/change"
            render={() => <ProfileSettingsSafetyDataChange />}
          />
        </Switch>
      </div>
      <Switch>
        <Route
          exact
          path="/profile/settings/safety"
          render={() => <ProfileSettingsSafetyActivity />}
        />
      </Switch>
    </div>
  );
};
const ProfileSettingsSafetyDataChange = () => {
  const [pass, setPass] = React.useState('password');
  const checkPass = (val, state) => {
    val === 'password' ? state('text') : state('password');
  };
  return (
    <div className="pr__safety-change">
      <div className="pr__safety-change-item">
        <p>Никнейм</p>
        <input type="text" value="NIKOLAY12" />
        <ButtonBrown text="Изменить" />
      </div>
      <div className="pr__safety-change-item pr__safety-change-item-sm">
        <p>Номер телефона</p>
        <span>+7 *** *** ** 56</span>
      </div>

      <div className="pr__safety-change-item pr__safety-change-item-bg">
        <p>Новый номер телефона</p>
        <div className="pr__safety-change-item-mid">
          <input type="text" value="+7 964 800 89 78" />
          <div className="pr__safety-change-item-mid-bottom">
            <ButtonBrownLine text="Получить код" />
            <div className="pr__safety-change-item-mid-inputs">
              <input type="text" value="989 097" />
              <ButtonCasual text="Отправить код повторно" />
            </div>
            <ButtonBrown text="Изменить" />
          </div>
        </div>
      </div>
      <div className="pr__safety-change-item pr__safety-change-item-sm">
        <p>Email</p>
        <span>iva@mail.ru</span>
      </div>

      <div className="pr__safety-change-item pr__safety-change-item-bg">
        <p>Новый номер телефона</p>
        <div className="pr__safety-change-item-mid">
          <input type="text" value="+7 964 800 89 78" />
          <div className="pr__safety-change-item-mid-bottom">
            <ButtonBrownLine text="Получить код" />
            <div className="pr__safety-change-item-mid-inputs">
              <input type="text" value="989 097" />
              <ButtonCasual text="Отправить код повторно" />
            </div>

            <ButtonBrown text="Изменить" />
          </div>
        </div>
      </div>

      <div className="pr__safety-change-item pr__safety-change-item-sm">
        <p>Старый пароль</p>
        <div className="auth-pass__inner pr__safety-change-item-eye">
          <input type={pass} />
          <div
            className="auth-pass__eye"
            onClick={() => {
              checkPass(pass, setPass);
            }}
          >
            {pass === 'password' ? <EyeFormIcon /> : <EyeslashIcon />}
          </div>
        </div>
      </div>
      <div className="pr__safety-change-item pr__safety-change-item-sm">
        <p>Новый пароль</p>
        <input type="password" />
      </div>
      <div className="pr__safety-change-item ">
        <p>Повторите пароль</p>
        <input type="password" />
        <ButtonBrown text="Изменить" />
      </div>
    </div>
  );
};
const ProfileSettingsSafetyData = () => {
  return (
    <div className="pr__safety-data">
      <div className="pr__safety-data-left">
        <div className="pr__safety-data-left-item">
          <p>Никнейм</p>
          <span>NIKOLAY12</span>
        </div>
        <div className="pr__safety-data-left-item">
          <p>Номер телефона</p>
          <span>+7 *** *** ** 56</span>
        </div>
        <div className="pr__safety-data-left-item">
          <p>Email</p>
          <span>iva***@gmail.com</span>
        </div>
        <div className="pr__safety-data-left-item">
          <p>Пароль</p>
          <span>обновлён 5 месяцев назад</span>
        </div>
        <div className="pr__safety-data-left-item">
          <NavLink to="/profile/settings/safety/change">
            <ButtonBrown text="Изменить" />
          </NavLink>
        </div>
      </div>
      <div className="pr__safety-data-right">
        <h1 className="pr__safety-data-right-title">
          <GVerifiedIcon />
          Верификация
        </h1>
        <p className="pr__safety-data-right-text">
          Верификация — это процесс подтверждения того, что личная страница
          действительно принадлежит известной персоне. Если проверка пройдена,
          страница получает особую отметку — галочку справа от имени, а также
          выводится раньше других в результатах поиска.
        </p>
        <div className="pr__safety-data-right-btn">
          <ButtonBrownLine text="Подать заявку" />
        </div>
      </div>
    </div>
  );
};
const ProfileSettingsSafetyActivity = () => {
  return (
    <div className="pr__privacy-block">
      <div className="pr__privacy-block-header ">
        <p>активность</p>
      </div>
      <div className="pr__safety-activity">
        <div className="pr__safety-activity-item f_list__out-del">
          <p>Последняя активность</p>
          <span>сегодня в 15:14 (Россия, Браузер Chrome)</span>
          {/* hover */}
          <b>
            <span>IP последнего посещения: 176.122.203.211</span>
          </b>
          {/* hover */}
        </div>
        <div className="pr__safety-activity-item-text">
          <span>Последняя активность</span>
          <p>
            История активности показывает информацию о том, с каких устройств и
            в какое время Вы входили на сайт. Если Вы подозреваете, что кто-то
            получил доступ к Вашему профилю, Вы можете в любой момент прекратить
            эту активность.
          </p>
        </div>
        <div className="pr__safety-activity-device f_list__out-del">
          <div className="pr__safety-activity-device-left">
            <div className="pr__safety-activity-device-logo">
              <MacIcon />
            </div>
            <div className="pr__safety-activity-device-texts">
              <p>Mac OS Москва, Россия</p>
              <span>сегодня в 15:34 Браузер Chrome</span>
            </div>
          </div>
          <div className="pr__safety-activity-device-flag">online</div>
          {/* hover */}
          <b>
            <span>IP последнего посещения: 176.122.203.211</span>
          </b>
          {/* hover */}
        </div>
        <div className="pr__safety-activity-device f_list__out-del">
          <div className="pr__safety-activity-device-left">
            <div className="pr__safety-activity-device-logo">
              <IPhoneIcon />
            </div>
            <div className="pr__safety-activity-device-texts">
              <p>iPhone Москва, Россия</p>
              <span>вчера в 10:36 Приложение Uhunt</span>
            </div>
          </div>
          <div className="pr__safety-activity-device-flag">online</div>
          {/* hover */}
          <b>
            <span>IP последнего посещения: 176.122.203.211</span>
          </b>
          {/* hover */}
        </div>
        <div className="pr__safety-activity-btn">
          <ButtonBrownLine text="Закрыть все сеансы" />
        </div>
        <div className="pr__safety-activity-bottom">
          <input type="checkbox" />
          <p>Сообщать о подозрительных входах в ваш профиль</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsSafety;
