import React from 'react';
import {
  ButtonBrownPlus,
  ButtonGreenPlus,
  ButtonBrownPlusFilled,
  ButtonGreenPlusFilled,
  XDeleteItem,
} from '../../../commonElements/buttons/Buttons';
import AddIcon from '../../../icons/friends/AddIcon';
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

        <ButtonBrownPlusFilled text="Принять" mr="1" />
        <ButtonGreenPlusFilled text="Добавить в друзья" mr="1" />
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
          <h1 className="f_BL__item-title">
            Пабло Диего Хозе Франциско де Пау...
          </h1>
          <p className="f_BL__item-text">
            <span>Россия,</span>
            <span>Москва</span>
          </p>
        </div>
      </div>

      <div className="f_list__inn-btns">
        <ButtonBrownPlus text="Принять" mr="1" />
        <ButtonGreenPlus text="Добавить в друзья" mr="1" />
        <XDeleteItem text="Удалить" op="1" />
      </div>
    </div>
  );
};

export default FriendsListInn;
