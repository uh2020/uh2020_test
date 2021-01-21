import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import SettingsIcon from '../../../icons/bar/SettingsIcon';
import ProfileSettingsPersonal from './ProfileSettingsPersonal';

const ProfileSettings = (props) => {
  return (
    <section className="main-container f-info">
      {/* <div className="f-info__header">
    <div className="f-info__header-left">
      <div className="f-info__svg">
        <InfoIcon />
      </div>
      <p className="f-info__title">Информация</p>
    </div>
  </div> */}
      <div className="pr__header f-info__header ">
        <div className="f-info__header-left">
          <div className="fr__media-ln-inn">
            <div className="f-info__header-left">
              <div className="f-info__svg">
                <SettingsIcon />
              </div>
              <NavLink
                exact
                to="/profile/settings"
                activeClassName="active"
                className="f-info__header__item"
              >
                <p className="f-info__title">личные данные</p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
              <NavLink
                exact
                to="/profile/settings/privacy"
                activeClassName="active"
                className="f-info__header__item"
              >
                <p className="f-info__title">приватность</p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
              <NavLink
                exact
                to="/profile/settings/safety"
                activeClassName="active"
                className="f-info__header__item"
              >
                <p className="f-info__title">безопасность</p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
              <NavLink
                exact
                to="/profile/settings/notifications"
                activeClassName="active"
                className="f-info__header__item"
              >
                <p className="f-info__title">Уведомления</p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
              <NavLink
                exact
                to="/profile/settings/payment_services"
                activeClassName="active"
                className="f-info__header__item"
              >
                <p className="f-info__title">Платежные сервисы</p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/profile/settings"
          render={() => <ProfileSettingsPersonal />}
        />
        <Route path="/profile/settings/privacy" render={() => <> privacy</>} />
        <Route path="/profile/settings/safety" render={() => <> safety</>} />
        <Route
          path="/profile/settings/notifications"
          render={() => <> notifications</>}
        />
        <Route
          path="/profile/settings/payment_services"
          render={() => <> payment_services</>}
        />
      </Switch>
      {/* // <> {editMode ? <> me</> : <ProfileMyInfo />} </> */}
    </section>
  );
};

export default ProfileSettings;
