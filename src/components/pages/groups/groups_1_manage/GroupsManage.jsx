import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import MyIcon from '../../../icons/bar/MyIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import './GroupsManage.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';
import GroupsManageInn from './GroupsManageInn';
import LockIcon from '../../../icons/groups/LockIcon';
import GroupUserIcon from '../../../icons/groups/GroupUserIcon';
import GPlusIcon from '../../../icons/groups/GPlusIcon';
import CommentIcon from '../../../icons/bar/CommentIcon';
import MediaIcon from '../../../icons/bar/MediaIcon';
import GiftIcon from '../../../icons/groups/GiftIcon';
import NewsIcon from '../../../icons/bar/NewsIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import GAddBtn from '../../../icons/groups/GAddBtn';
import GroupsManageDen from './GroupsManageDen';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import {
  ButtonBlueGroups,
  ButtonBlueGroupsLine,
  ButtonGreen,
  ButtonGreenLine,
} from '../../../commonElements/buttons/Buttons';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';

const GroupsManage = (props) => {
  const gColor = '#608AA1';
  const items = [{}, {}, {}, {}];
  return (
    <div className="g__inner">
      <div className="g_manage g__page">
        <div className="g__container">
          <div className="g_manage__header">
            <NavLink
              exact
              to="/groups/manage"
              className="f_pets__header-left f_list__header-left"
              activeClassName="f_list__header-left-active"
            >
              <MyIcon />
              <p>
                все группы <span>54</span>
              </p>
              {props.location.pathname === '/groups/manage' ? (
                <b style={{ backgroundColor: gColor }}></b>
              ) : null}
            </NavLink>
            <div className="f_list__header-middle">
              <NavLink
                to="/groups/manage/incoming"
                className="f_list__header-middle-inn"
                activeClassName="f_list__header-left-active"
              >
                <span>2</span>
                <p>
                  Входящие
                  {props.location.pathname === '/groups/manage/incoming' ? (
                    <b style={{ backgroundColor: gColor }}></b>
                  ) : null}
                </p>
              </NavLink>
              <div className="f_list__header-middle-req">Заявки</div>
              <NavLink
                to="/groups/manage/denied"
                className="f_list__header-middle-out"
                activeClassName="f_list__header-left-active"
              >
                <p>
                  Отклоненные
                  {props.location.pathname === '/groups/manage/denied' ? (
                    <b style={{ backgroundColor: gColor }}></b>
                  ) : null}
                </p>
                <span>2</span>
              </NavLink>
            </div>
            <div className="f_list__header-right">
              <div className="g_manage__btn-add g__btn-blue">
                Создать группу
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
              button={ButtonBlueGroups}
              buttonText="Создать"
              UpperText="У вас пока нет групп."
            />
          ) : (
            <Switch>
              <Route
                path="/groups/manage/incoming"
                render={() => <GroupsManageInn />}
              />
              <Route
                path="/groups/manage/denied"
                render={() => <GroupsManageDen />}
              />
              <Route
                path="/groups/manage"
                render={() => (
                  <>
                    <div className="g__items-x">
                      {items.map((i) => {
                        return <GroupsManageItem />;
                      })}
                    </div>
                    <div className="f_list__inn-bottom g_manage__bottom">
                      <div className="f_list__inn-bottom-all">Всех</div>
                      <ButtonGreen text="Рекомендовать" />
                    </div>
                  </>
                )}
              />
            </Switch>
          )}
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
          <div className="g__item-group-item">
            <CommentIcon />
            <div className="g__item-group-item-plus">
              <GPlusIcon />
            </div>
          </div>
          <div className="g__item-group-item">
            <MediaIcon />
            <div className="g__item-group-item-plus">
              <GPlusIcon />
            </div>
          </div>
          <div className="g__item-group-item">
            <GiftIcon />
            <div className="g__item-group-item-plus">
              <GPlusIcon />
            </div>
          </div>
          <div className="g__item-group-item">
            <NewsIcon />
            <div className="g__item-group-item-plus">
              <GPlusIcon />
            </div>
          </div>
        </div>
        <div className="g__item-group-btns">
          <ButtonBlueGroupsLine mr={1} text="Управлять" />
          <ButtonGreenLine text="Рекомендовать" />
        </div>
      </div>
    </div>
  );
};

export default GroupsManage;
