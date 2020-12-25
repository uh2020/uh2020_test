import React from 'react';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';
import './FriendsSubscribers.scss';
import FriendsHeaderMenuIS from '../friendsCommon/FriendsHeaderMenuIS';
import UsersIcon from '../../../icons/bar/UsersIconIcon';
import FriendsSubscribersInn from './FriendsSubscribersInn';
import FriendsSubscribersDeny from './FriendsSubscribersDeny';
import { NavLink, Route, Switch } from 'react-router-dom';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';
import UserFollow from '../../../icons/bar/UserFollowIcon';

const FriendsSubscribers = (props) => {
  const items = [{}, {}, {}];
  return (
    <div>
      <FriendsHeaderMenuIS />
      <div className="f_list">
        <div class="f_pets__header">
          <NavLink
            to="/friends/subscribers"
            class="f_list__header-left  f_pets__header-left"
          >
            <UserFollow />
            <p>
              Все подписчики <span>62</span>
            </p>
            {props.location.pathname === '/friends/subscribers' ? (
              <b></b>
            ) : null}
          </NavLink>
          <div className="f_list__header-middle">
            <NavLink
              to="/friends/subscribers/incoming"
              className="f_list__header-middle-inn"
            >
              <span>2</span>
              <p>
                Входящие
                {props.location.pathname === '/friends/subscribers/incoming' ? (
                  <b></b>
                ) : null}
              </p>
            </NavLink>
            <div className="f_list__header-middle-req">Заявки</div>
            <NavLink
              to="/friends/subscribers/denied"
              className="f_list__header-middle-out"
            >
              <p>
                Отклоненные
                {props.location.pathname === '/friends/subscribers/denied' ? (
                  <b></b>
                ) : null}
              </p>
              <span>2</span>
            </NavLink>
          </div>
          <div
            className={
              'f_list__header-btn' +
              ' ' +
              (props.location.pathname === '/friends/subscribers/denied'
                ? 'f_list__header-btn-op'
                : '')
            }
          >
            Написать всем
          </div>
        </div>
        <Switch>
          {items.length === 0 ? <FriendsNone /> : null}
          <Route
            path="/friends/subscribers/incoming"
            render={() => <FriendsSubscribersInn />}
          />
          <Route
            path="/friends/subscribers/denied"
            render={() => <FriendsSubscribersDeny />}
          />
          <Route
            path="/friends/subscribers"
            render={() => (
              <div className="f_list__items-inner">
                <div className="f_list__items f_list__items-sroke">
                  {items.map((i) => {
                    return <FriendItem />;
                  })}
                </div>
                <div className="f_list__inn-bottom">
                  <div className="f_list__inn-bottom-all">Всех</div>
                  <div className="f_list__inn-bottom-add f_list__inn-btn">
                    <AddIcon color="white" plus="#669774" />
                    Добавить в друзья
                  </div>
                  <div className="f_list__inn-bottom-subs f_list__inn-btn">
                    Подписаться
                  </div>
                  <div class="f_list__out-bottom-subs f_list__inn-btn">
                    Написать
                  </div>
                  <div className="f_list__inn-del">
                    <XRedIcon />
                  </div>
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

const FriendItem = () => {
  return (
    <div className="f_BL__item">
      <div className="f_BL__item-left">
        <div
          className="f_BL__item-logo"
          style={{
            backgroundImage: `url("https://www.jetss.com/wp-content/uploads/2018/11/post-malone-ashlen-diaz-breakup.jpg")`,
          }}
        ></div>
        <div className="f_BL__texts">
          <h1 className="f_BL__item-title">Пабло Диего Хозе</h1>
          <p className="f_BL__item-text">
            <span>Россия,</span>
            <span>Москва</span>
          </p>
        </div>
      </div>

      <div className="f_list__inn-btns">
        <div className="f_list__inn-btn f_list__inn-plus">
          <AddIcon />
          Добавить в друзья
        </div>
        <div className="f_list__inn-btn f_list__out-plus">Подписаться</div>
        <div className="f_list__inn-btn f_list__out-subs">Написать</div>
        <div className=" f_list__inn-del f_list__inn-del-op">
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};
const FriendsNone = () => {
  return (
    <div className="f_list__none">
      <h1 className="f_list__none-title">У вас пока нет подписчиков.</h1>
      <span className="f_list__none-btn">Искать</span>
    </div>
  );
};

export default FriendsSubscribers;
