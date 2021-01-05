import React from 'react';
import XRedIcon from '../../../icons/friends/XRedIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import LockIcon from '../../../icons/groups/LockIcon';
import GroupUserIcon from '../../../icons/groups/GroupUserIcon';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import {
  ButtonBlueMessengerLine,
  ButtonCasual,
  XDeleteItem,
} from '../../../commonElements/buttons/Buttons';

const GroupsManageInn = (props) => {
  const items = [{}, {}, {}];
  return (
    <>
      <div className="g__items-x">
        {items.map(() => {
          return <GroupsManageInnItem />;
        })}
        <GroupsMyItemInnDel />
      </div>
      <div className="f_list__inn-bottom g_manage__bottom">
        <div className="f_list__inn-bottom-all">Всем</div>
        <div className="f_list__inn-bottom-add g__btn-blue-mess">Написать</div>
        <XDeleteItem text="Отменить заявку" />
      </div>
    </>
  );
};

const GroupsManageInnItem = () => {
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
        <div className="g__item-group-my-req">Вы подали заявку</div>
        <ButtonBlueMessengerLine text="Написать" mr=" 1" />
        <XDeleteItem text="Отменить заявку" op={1} />
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
        <ButtonCasual text="Восстановить заявку" />
      </div>
    </div>
  );
};

export default GroupsManageInn;
