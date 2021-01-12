import React from 'react';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';
import './FriendsSubscriptions.scss';
import FriendsHeaderMenuIS from '../friendsCommon/FriendsHeaderMenuIS';
import UsersIcon from '../../../icons/bar/UsersIconIcon';
import FriendsSubscriptionsInn from './FriendsSubscriptionsInn';
import FriendsSubscriptionsDenied from './FriendsSubscriptionsDenied';
import { NavLink, Route, Switch } from 'react-router-dom';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';
import UserFollowL from '../../../icons/bar/UserFollowLIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import {
  ButtonBlueMessengerLine,
  ButtonGreenPlus,
  ButtonBlueMessenger,
  ButtonGreenPlusFilled,
  XDeleteItem,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';
const FriendsSubscriptions = (props) => {
  const items = [{}, {}, {}];
  return (
    <div>
      {/* <FriendsHeaderMenuIS /> */}
      <FriendsHeaderMenu />
      <div className="f_list">
        <div className="f_pets__header">
          <NavLink
            exact
            to="/friends/subscriptions"
            className="f_list__header-left  f_pets__header-left"
            activeClassName="f_list__header-left-active"
          >
            <UserFollowL />
            <p>
              Все подписки <span>62</span>
            </p>
            {props.location.pathname === '/friends/subscriptions' ? (
              <b></b>
            ) : null}
          </NavLink>
          <div className="f_list__header-middle">
            <NavLink
              to="/friends/subscriptions/outcoming"
              className="f_list__header-middle-inn f_Subins__out "
              activeClassName="f_list__header-left-active"
            >
              <span>2</span>
              <p>
                Исходящие
                {props.location.pathname ===
                '/friends/subscriptions/outcoming' ? (
                  <b></b>
                ) : null}
              </p>
            </NavLink>
            <div className="f_list__header-middle-req">Заявки</div>
            <NavLink
              to="/friends/subscriptions/denied"
              className="f_list__header-middle-out"
              activeClassName="f_list__header-left-active"
            >
              <p>
                Отклоненные
                {props.location.pathname === '/friends/subscriptions/denied' ? (
                  <b></b>
                ) : null}
              </p>
              <span>2</span>
            </NavLink>
          </div>
          <div className="f_list__header-right">
            <div
              className={
                'f_list__header-btn' +
                ' ' +
                (props.location.pathname === '/friends/subscriptions/denied'
                  ? 'f_list__header-btn-op'
                  : '')
              }
            >
              Написать всем
            </div>
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
          <NonePageButtonOne
            button={ButtonGreen}
            buttonText="Искать"
            UpperText="У вас пока нет подписок."
          />
        ) : (
          <Switch>
            <Route
              path="/friends/subscriptions/outcoming"
              render={() => <FriendsSubscriptionsInn />}
            />
            <Route
              path="/friends/subscriptions/denied"
              render={() => <FriendsSubscriptionsDenied />}
            />
            <Route
              path="/friends/subscriptions"
              render={() => (
                <div className="f_list__items-inner">
                  <div className="f_list__items f_list__items-sroke">
                    {items.map((i) => {
                      return <FriendItem />;
                    })}
                  </div>
                  <div className="f_list__inn-bottom">
                    <div className="f_list__inn-bottom-all">Всех</div>
                    <ButtonGreenPlusFilled text="Добавить в друзья" mr="1" />
                    <ButtonBlueMessenger text="Написать" mr="1" />
                    <XDeleteItem text="Удалить" />
                  </div>
                </div>
              )}
            />
          </Switch>
        )}
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
        <ButtonGreenPlus text="Добавить в друзья" mr="1" />
        <ButtonBlueMessengerLine text="Написать" mr="1" />
        <XDeleteItem text="Удалить" op="1" />
      </div>
    </div>
  );
};
const FriendsNone = () => {
  return (
    <div className="f_list__none">
      <h1 className="f_list__none-title">У вас пока нет подписок.</h1>
      <span className="f_list__none-btn">Искать</span>
    </div>
  );
};

export default FriendsSubscriptions;
