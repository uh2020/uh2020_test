import React from 'react';
import './GroupsManage.scss';
import {
  ButtonBlueGroupsPlus,
  ButtonBlueGroupsPlusFilled,
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
      </div>
      <div className="f_list__inn-bottom g_manage__bottom">
        <div className="f_list__inn-bottom-all">Всех</div>
        {/* <div className="f_list__inn-bottom-add g_manage__bottom-btn g__btn-blue">
          <AddIcon color="white" plus="#608AA1" />
          Добавить
        </div> */}
        <div className="g_manage__bottom-btn">
          <ButtonBlueGroupsPlusFilled text="Добавить" />
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
        {/* <div className="g__btn-blue-line  g__item-x-btn">
          <GAddBtn />
          Добавить
        </div> */}
        <ButtonBlueGroupsPlus text="Добавить" mr={true} />
        <XDeleteItem text="Добавить" op="1" />
      </div>
    </div>
  );
};

export default GroupsManageInn;
