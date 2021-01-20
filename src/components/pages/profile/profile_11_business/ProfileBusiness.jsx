import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import { LibraryStoryCardItem } from '../../../commonElements/friends/FriendNotItems';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';
import BusinessIcon from '../../../icons/bar/BusinessIcon';
import NoteBookIcon from '../../../icons/bar/NoteBookIcon';
import PricetagIcon from '../../../icons/bar/PricetagIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import ArchiveIcon from '../../../icons/profile/ArchiveIcon';
import EditSquareIcon from '../../../icons/profile/EditSquareIcon';

const ProfileBusiness = (props) => {
  const hide = false;
  return (
    <section className="main-container f-info">
      <div className="f-info__header">
        <div className="f-info__header-left">
          <NavLink
            exact
            to="/profile/business"
            activeClassName="active"
            className={'f-info__header__item'}
            style={
              props.location.pathname.includes('/profile/business/add')
                ? { marginRight: '20px' }
                : null
            }
          >
            <div className="f-info__svg">
              <BusinessIcon />
            </div>
            <p className="f-info__title">бизнес</p>
            <span className="f-info__count">33</span>
            <span
              className="f-info__line"
              style={{ backgroundColor: '#7c7474' }}
            ></span>
          </NavLink>
          {props.location.pathname.includes('/profile/business/add') ? (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/profile/business/add"
                activeClassName="active"
                className={'f-info__header__item fr__media-inn'}
                style={
                  props.location.pathname.includes('/profile/business/add')
                    ? { marginLeft: '0px' }
                    : null
                }
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Создание бизнеса
                </p>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: '#7c7474' }}
                ></span>
              </NavLink>
            </div>
          ) : null}
        </div>
        {!props.location.pathname.includes('/profile/business/add') ? (
          <div className="f-info__header-right">
            <div className="f_list__header-sort">
              <NavLink to="/profile/business/add">
                <ButtonBrown text="Создать бизнес" />
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
      {hide ? (
        <NonePageButtonOne
          button={ButtonBrown}
          buttonText="Создать бизнес"
          UpperText="У вас пока нет бизнес-страниц"
        />
      ) : (
        <Switch>
          <Route
            exact
            path="/profile/business"
            render={() => <ProfileBusinessMain />}
          />
          <Route
            exact
            path="/profile/business/add"
            render={() => <ProfileBusinessAdd />}
          />
        </Switch>
        // <> {editMode ? <ProfileMyEdit /> : <ProfileMyInfo />} </>
      )}
    </section>
  );
};

const ProfileBusinessMain = () => {
  const items = [{}, {}, {}, {}];
  return <div className="f_list__items">ProfileBusinessMain</div>;
};
const ProfileBusinessAdd = () => {
  const items = [{}, {}, {}, {}];
  return <div className="f_list__items">ProfileBusinessAdd</div>;
};

export default ProfileBusiness;
