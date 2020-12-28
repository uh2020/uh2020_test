import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import MyIcon from '../../../icons/bar/MyIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import './GroupsManage.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

import GAddBtn from '../../../icons/groups/GAddBtn';

const GroupsManageInn = (props) => {
  const items = [{}, {}, {}];
  return (
    <>
      <div className="g__items-x">
        {items.map(() => {
          return <GroupsManageInnItem />;
        })}
      </div>
      <div className="f_list__inn-bottom g_manage__bottom">
        <div className="f_list__inn-bottom-all">Всех</div>
        <div className="f_list__inn-bottom-add g_manage__bottom-btn g__btn-blue">
          <AddIcon color="white" plus="#608AA1" />
          Добавить
        </div>
      </div>
    </>
  );
};

const GroupsManageInnItem = () => {
  return (
    <div className="g__item-x">
      <div className="g__item-x-left">
        <div
          className="g__item-x-img"
          style={{
            backgroundImage: `url(${'https://i.pinimg.com/736x/2f/03/f8/2f03f8cae2989c91c13b19b91ad94f8a.jpg'})`,
          }}
        ></div>
        <div className="g__item-x-left-inner">
          <div className="g__item-x-texts">
            <h4>Имя Фамилия</h4>
            <p>
              <span>Россия,</span>
              <span>Москва</span>
            </p>
          </div>

          <div className="g__item-x-info">Название группы</div>
        </div>
      </div>
      <div className="g__item-x-right">
        <div className="g__btn-blue-line  g__item-x-btn">
          <GAddBtn />
          Добавить
        </div>
        <div className="f_list__out-del">
          <b>
            <span>Отменить заявку</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};

export default GroupsManageInn;
