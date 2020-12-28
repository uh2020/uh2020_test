import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './GroupsManage.scss';
import XRedIcon from '../../../icons/friends/XRedIcon';

const GroupsManageDen = (props) => {
  const items = [{}, {}, {}];
  return (
    <>
      <div className="g__items-x">
        {items.map((i) => (
          <GroupsManageDenItem />
        ))}
      </div>
      <div className="f_list__inn-bottom g_manage__bottom">
        <div className="f_list__inn-bottom-all">Всех</div>
        <div className="f_list__inn-bottom-add g__btn-blue">Восстановить</div>
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
        <div className="g__btn-blue-line  g__item-x-btn">Восстановить</div>
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

export default GroupsManageDen;
