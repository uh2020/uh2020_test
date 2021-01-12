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
  ButtonBlueMessenger,
  ButtonBlueMessengerLine,
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';

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
              <ButtonGreen text="Добавить всех" />
            ) : null}
            {props.location.pathname === '/friends/list' ? (
              <ButtonBlueMessenger text="Написать всем" />
            ) : null}

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
            UpperText="У вас пока нет групп."
          />
        ) : (
          <Switch>
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
                      return (
                        <FriendItemSmall
                          button={ButtonBlueMessengerLine}
                          buttonText="Написать"
                        />
                      );
                    })}
                  </div>
                  <div className="f_list__more">
                    <span>Показать еще</span>
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

export default FriendsList;
