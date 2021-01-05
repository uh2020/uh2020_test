import React from 'react';
import {
  ButtonBrown,
  ButtonDisabled,
  ButtonGreenPlus,
  ButtonGreenPlusFilled,
  XDeleteItem,
  ButtonBrownDisabled,
} from '../../../commonElements/buttons/Buttons';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListInn = () => {
  const items = [{}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items f_list__items-sroke">
        {items.map((i) => {
          return <FriendsListInnItem />;
        })}
      </div>
      <div className="f_list__inn-bottom">
        <div className="f_list__inn-bottom-all">Всех</div>
        <ButtonGreenPlusFilled text="Добавить" mr={true} />
        <ButtonBrown text="В подписчики" mr="1" />
        <XDeleteItem text="Удалить" />
      </div>
    </div>
  );
};

const FriendsListInnItem = () => {
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
        <ButtonGreenPlus text="Добавить" mr={true} />
        <ButtonBrownDisabled text="В подписчики" mr="1" />
        <XDeleteItem text="Удалить" op="1" />
      </div>
    </div>
  );
};

export default FriendsListInn;
