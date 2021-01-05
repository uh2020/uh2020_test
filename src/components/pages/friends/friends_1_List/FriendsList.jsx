import React from 'react';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';
import './FriendsList.scss';
import FriendsHeaderMenuIS from '../friendsCommon/FriendsHeaderMenuIS';
import UsersIcon from '../../../icons/bar/UsersIconIcon';
import FriendsListInn from './FriendsListInn';
import FriendsListOut from './FriendsListOut';
import { NavLink, Route, Switch } from 'react-router-dom';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import FriendsHeaderMenuSearch from '../friendsCommon/FriendsHeaderMenuSearch';
import {
  ButtonBlueMessengerLine,
  ButtonCasual,
} from '../../../commonElements/buttons/Buttons';

const FriendsList = (props) => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <FriendsHeaderMenu />

      <div className="f_list">
        <div className="f_pets__header">
          <NavLink
            exact
            to="/friends/list"
            className="f_pets__header-left f_list__header-left"
            activeClassName="f_list__header-left-active"
          >
            <UsersIcon />
            <p>
              все друзья <span>62</span>
            </p>
            {props.location.pathname === '/friends/list' ? <b></b> : null}
          </NavLink>
          <div className="f_list__header-middle">
            <NavLink
              to="/friends/list/incoming"
              className="f_list__header-middle-inn"
              activeClassName="f_list__header-left-active"
            >
              <span>2</span>
              <p>
                Входящие
                {props.location.pathname === '/friends/list/incoming' ? (
                  <b></b>
                ) : null}
              </p>
            </NavLink>
            <div className="f_list__header-middle-req">Заявки</div>
            <NavLink
              to="/friends/list/outcoming"
              className="f_list__header-middle-out"
              activeClassName="f_list__header-left-active"
            >
              <p>
                Исходящие
                {props.location.pathname === '/friends/list/outcoming' ? (
                  <b></b>
                ) : null}
              </p>
              <span>2</span>
            </NavLink>
          </div>
          <div className="f_list__header-right">
            {props.location.pathname === '/friends/list/incoming' ? (
              <div className="f_list__inn-bottom-add f_list__header-add f_list__inn-btn">
                Добавить в друзья
              </div>
            ) : (
              <div
                className={
                  'f_list__header-btn' +
                  ' ' +
                  (props.location.pathname === '/friends/list/outcoming'
                    ? 'f_list__header-btn-op'
                    : '')
                }
              >
                Написать всем
              </div>
            )}
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
        <Switch>
          {items.length === 0 ? <FriendsNone /> : null}
          <Route
            path="/friends/list/incoming"
            render={() => <FriendsListInn />}
          />
          <Route
            path="/friends/list/outcoming"
            render={() => <FriendsListOut />}
          />
          <Route
            path="/friends/list"
            render={() => (
              <div className="f_list__items-inner">
                <div className="f_list__items">
                  {items.map((i) => {
                    return <FriendItem name={'Пабло'} surname={'Диего'} />;
                  })}
                </div>
                <div className="f_list__more">
                  <span>Показать еще</span>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

const FriendItem = (props) => {
  return (
    <article className="friend-item">
      <div className="tab__main-item__block-img">
        <a
          style={{
            backgroundImage: `url(${'https://7sisters.ru/wp-content/uploads/2017/08/2515091748.jpg'})`,
          }}
          className="tab__main-item__img"
        ></a>
      </div>
      <div className="tab__main-item__block-info">
        <h4 className="tab__main-item__block-info__name">
          <a className="tab__main-item__block-info__name-link">
            {props.surname} {props.name}
          </a>
        </h4>
        <div className="tab__main-item__block-info__country">
          <span>Страна</span>, <span>Город</span>
        </div>
        <div className="f_list-item-btn">
          <ButtonBlueMessengerLine text="Написать" />
        </div>
      </div>
    </article>
  );
};
const FriendsNone = () => {
  return (
    <div className="f_list__none">
      <h1 className="f_list__none-title">У вас пока нет друзей.</h1>
      <span className="f_list__none-btn">Искать</span>
      <ButtonCasual />
    </div>
  );
};

export default FriendsList;
