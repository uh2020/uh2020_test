import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import { LibraryStoryCardItem } from '../../../commonElements/friends/FriendNotItems';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';
import NoteBookIcon from '../../../icons/bar/NoteBookIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const ProfilePosts = (props) => {
  const hide = false;
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
      <div className="f-info__header">
        <div className="f-info__header-left">
          <NavLink
            exact
            to="/profile/posts"
            activeClassName="active"
            className="f-info__header__item"
          >
            <div className="f-info__svg">
              <NoteBookIcon />
            </div>
            <p className="f-info__title">Публикации</p>
            <span className="f-info__count">0</span>
          </NavLink>
          {/* {!props.location.pathname.includes('/profile/edit') ? null : (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/profile/posts"
                activeClassName="active"
                className="f-info__header__item"
                style={
                  props.location.pathname.includes('/profile/edit')
                    ? null
                    : { marginLeft: '20px' }
                }
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Редактирование
                </p>
                <span
                  style={{ backgroundColor: '#7c7474' }}
                  className="f-info__line"
                ></span>
              </NavLink>
            </div>
          )} */}
        </div>
        <div className="f-info__header-right">
          <div className="f_list__header-sort">
            <ButtonBrown mr="1" text="Добавить" />
            <div className="f_list__header-sort-item">
              <FSortIcon />
            </div>
          </div>
        </div>
      </div>
      {hide ? (
        <NonePageButtonOne
          button={ButtonBrown}
          buttonText="Добавить "
          UpperText="У вас пока нет публикаций в библиотеке"
        />
      ) : (
        <Switch>
          <Route
            exact
            path="/profile/posts"
            render={() => <ProfilePostsMain />}
          />
          {/* <Route path="/profile/edit" render={() => <ProfileMyEdit />} /> */}
        </Switch>
        // <> {editMode ? <ProfileMyEdit /> : <ProfileMyInfo />} </>
      )}
    </section>
  );
};

const ProfilePostsMain = () => {
  const items = [{}, {}, {}, {}];
  return (
    <div className="f_list__items">
      {items.map((i) => {
        return <LibraryStoryCardItem />;
      })}
    </div>
  );
};

export default ProfilePosts;
