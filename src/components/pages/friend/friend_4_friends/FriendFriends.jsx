import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonBrownLine,
  ButtonCasual,
  ButtonGreen,
  ButtonGreenLine,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
import UserFollow from '../../../icons/bar/UserFollowIcon';
import UserFollowL from '../../../icons/bar/UserFollowLIcon';
import UsersIcon from '../../../icons/bar/UsersIconIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import FriendsHeaderMenu from '../../friends/friendsCommon/FriendsHeaderMenu';

const FriendFriends = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="friends-page">
      <FriendsHeaderMenu />
      <section className="main-container f-all-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <NavLink
              exact
              to="/id/friends"
              activeClassName="f-info__header__item active"
              className="f-info__header__item"
            >
              <div className="f-info__svg">
                <UsersIcon />
              </div>
              <p className="f-info__title">Друзья</p>
              <span className="f-info__count">0</span>
              <span className="f-info__line"></span>
            </NavLink>
            <NavLink
              activeClassName="f-info__header__item active"
              to="/id/friends/subscriptions"
              className="f-info__header__item"
            >
              <div className="f-info__svg">
                <UserFollow />
              </div>
              <p className="f-info__title">Подписки</p>
              <span className="f-info__count">0</span>
              <span className="f-info__line"></span>
            </NavLink>
            <NavLink
              activeClassName="f-info__header__item active"
              to="/id/friends/subscribers"
              className="f-info__header__item"
            >
              <div className="f-info__svg">
                <UserFollowL />
              </div>
              <p className="f-info__title">Подписчики</p>
              <span className="f-info__count">0</span>
              <span className="f-info__line"></span>
            </NavLink>
          </div>
          <div className="f-info__header-right">
            <div className="f_list__header-sort">
              <div className="f_list__header-sort-item">
                <FilterIcon />
              </div>
              <div className="f_list__header-sort-item">
                <FSortIcon />
              </div>
            </div>
          </div>
        </div>
        {items.length === 0 ? (
          <FriendFriendsNone />
        ) : (
          <Switch>
            <Route
              exact
              path="/id/friends"
              render={() => <FriendFriendsInit />}
            />
            <Route
              path="/id/friends/subscriptions"
              render={() => <FriendFriendsSubscriptions />}
            />
            <Route
              path="/id/friends/subscribers"
              render={() => <FriendFriendsSubscribers />}
            />
          </Switch>
        )}
      </section>
    </div>
  );
};

const FriendFriendsNone = () => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">У Сергея пока нет друзей.</p>
      <span>
        <ButtonGreen text="Рекомендовать друзей" />
      </span>
    </div>
  );
};
const FriendFriendsInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="f_list__items">
        {items.map((i) => (
          <FriendItemSmall
            button={ButtonGreenLine}
            buttonText="Добавить в друзья"
          />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};
const FriendFriendsSubscriptions = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="f_list__items">
        {items.map((i) => (
          <FriendItemSmall button={ButtonBrownLine} buttonText="Подписаться" />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};
const FriendFriendsSubscribers = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="f_list__items">
        {items.map((i) => (
          <FriendItemSmall button={ButtonBrownLine} buttonText="Подписаться" />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendFriends;
