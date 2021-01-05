import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import XRedIcon from '../../../icons/friends/XRedIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import LockIcon from '../../../icons/groups/LockIcon';
import GroupUserIcon from '../../../icons/groups/GroupUserIcon';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import {
  ButtonBlueMessengerLine,
  ButtonDisabled,
  XDeleteItem,
  ButtonBlueMessenger,
} from '../../../commonElements/buttons/Buttons';

const GroupsManageDen = (props) => {
  const items = [{}, {}, {}];
  return (
    <>
      <div className="g__items-x">
        {items.map((i) => (
          <GroupsManageDenItem />
        ))}
        <GroupsMyItemInnDel />
      </div>
      <div className="f_list__inn-bottom g_manage__bottom">
        <div className="f_list__inn-bottom-all">Всем</div>
        <ButtonBlueMessenger text="Написать" mr="1" />
        <div className="f_list__out-del">
          <b>
            <span>Отменить заявку</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </>
  );
};
const GroupsManageDenItem = () => {
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
      <div className="g__item-x-right">
        <div className="g__item-group-my-den">Отклонено</div>
        <ButtonBlueMessengerLine text="Написать" mr="1" />
        <XDeleteItem op="1" text="Отменить заявку" />
      </div>
    </div>
  );
};
const GroupsMyItemInnDel = () => {
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
              <span className="g__item-group-lock">
                <GVerifiedIcon />
              </span>
              <LockIcon />
            </span>
            <span className="g__item-group-count">
              <GroupUserIcon />
              <span>5678</span>
            </span>
          </div>
        </div>
      </div>
      <div className="g__item-x-right">
        <ButtonDisabled text="Группа удалена из списка" />
      </div>
    </div>
  );
};

export default GroupsManageDen;
