import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import FilterIcon from '../../../icons/friends/FilterIcon';
import './GroupsMy.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import GroupsMyInn from './GroupsMyInn';
import LockIcon from '../../../icons/groups/LockIcon';
import GroupUserIcon from '../../../icons/groups/GroupUserIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import GroupsMyDen from './GroupsMyDen';
import GroupsIcon from '../../../icons/bar/GroupsIcon';
import GCameraIcon from '../../../icons/groups/GCameraIcon';
import GVideoIcon from '../../../icons/groups/GVideoIcon';
import GDocumentIcon from '../../../icons/groups/GDocumentIcon';
import GroupsHeaderMenu from '../groupsCommon/GroupsHeaderMenu';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import {
  ButtonBlueMessengerLine,
  ButtonGreenLine,
  ButtonBlueMessenger,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';

const GroupsMy = (props) => {
  const gColor = '#608AA1';
  const items = [{}, {}, {}, {}];
  return (
    <div className="g__inner">
      <div className="friends-page">
        <GroupsHeaderMenu />
      </div>

      <div className="g_manage g__page">
        <div className="g__container">
          <div className="g_manage__header">
            <NavLink
              exact
              to="/groups/my"
              className="f_pets__header-left f_list__header-left"
              activeClassName="f_list__header-left-active"
            >
              <GroupsIcon />
              <p>
                все группы <span>54</span>
              </p>
              {props.location.pathname === '/groups/my' ? (
                <b style={{ backgroundColor: gColor }}></b>
              ) : null}
            </NavLink>
            <div className="f_list__header-middle">
              <NavLink
                to="/groups/my/incoming"
                className="f_list__header-middle-inn"
                activeClassName="f_list__header-left-active"
              >
                <span
                  style={{
                    backgroundColor: `#7C7474`,
                  }}
                >
                  2
                </span>
                <p>
                  Отправленные
                  {props.location.pathname === '/groups/my/incoming' ? (
                    <b style={{ backgroundColor: gColor }}></b>
                  ) : null}
                </p>
              </NavLink>
              <div className="f_list__header-middle-req">Заявки</div>
              <NavLink
                to="/groups/my/sent"
                className="f_list__header-middle-out"
                activeClassName="f_list__header-left-active"
              >
                <p>
                  Отклоненные
                  {props.location.pathname === '/groups/my/sent' ? (
                    <b style={{ backgroundColor: gColor }}></b>
                  ) : null}
                </p>
                <span>2</span>
              </NavLink>
            </div>
            <div className="f_list__header-right">
              {props.location.pathname === '/groups/my' ? (
                <div className="g_manage__btn-add g__btn-blue">
                  Создать группу
                </div>
              ) : null}
              {props.location.pathname === '/groups/my/incoming' ? (
                <div className="g_manage__btn-add g__btn-blue-mess">
                  Написать всем
                </div>
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
          <Switch>
            {items.length === 0 ? <GroupsNone /> : null}
            <Route path="/groups/my/incoming" render={() => <GroupsMyInn />} />
            <Route path="/groups/my/sent" render={() => <GroupsMyDen />} />
            <Route
              path="/groups/my"
              render={() => (
                <>
                  <div className="g__items-x">
                    {items.map((i) => {
                      return <GroupsManageItem />;
                    })}
                  </div>
                  <div className="f_list__inn-bottom g_manage__bottom">
                    <div className="f_list__inn-bottom-all">Всем</div>
                    <ButtonGreen mr="1" text="Рекомендовать" />
                    <ButtonBlueMessenger text="Написать" />
                  </div>
                </>
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const GroupsManageItem = () => {
  return (
    <div className="g__item-group">
      <div className="g__item-group-left">
        <div
          className="g__item-group-img"
          style={{
            backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
          }}
        ></div>
        <div className="g__item-group-texts">
          <h4>
            <OfficialIcon width="24" height="24" /> <span>Имя Фамилия</span>
          </h4>
          <div className="g__item-group-users">
            <span className="g__item-group-lock">
              <GVerifiedIcon />
            </span>
            <span className="g__item-group-lock">
              <LockIcon />
            </span>
            <span className="g__item-group-count">
              <GroupUserIcon />
              <span>5678</span>
            </span>
          </div>
        </div>
      </div>
      <div className="g__item-group-right">
        <div className="g__item-group-items">
          <div className="g__item-group-my">
            <div className="g__item-group-my-item">
              <GCameraIcon />
            </div>
            <div className="g__item-group-my-item">
              <GVideoIcon />
            </div>
            <div className="g__item-group-my-item">
              <GDocumentIcon />
            </div>
            <div className="g__item-group-my-item">
              <span>10029</span>
            </div>
          </div>
        </div>
        <div className="g__item-group-btns">
          <ButtonGreenLine mr="1" text="Рекомендовать" />
          <ButtonBlueMessengerLine text="Написать" />
        </div>
      </div>
    </div>
  );
};
const GroupsNone = () => {
  return (
    <div className="f_list__none">
      <h1 className="f_list__none-title">Вы пока не состоите в группах.</h1>
      <span className="g__btn-blue">Искать</span>
    </div>
  );
};

export default GroupsMy;
