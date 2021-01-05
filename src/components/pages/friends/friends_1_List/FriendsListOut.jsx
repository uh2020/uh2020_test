import React from 'react';
import {
  ButtonBlueMessenger,
  ButtonBlueMessengerLine,
  ButtonBrown,
  ButtonBrownLine,
  XDeleteItem,
} from '../../../commonElements/buttons/Buttons';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListOut = () => {
  const items = [{}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items f_list__items-sroke">
        {items.map((i) => {
          return <FriendsListOutItem />;
        })}
      </div>
      <div className="f_list__out-bottom">
        <div className="f_list__out-bottom-all">Все</div>
        <ButtonBrown text="Подписаться" mr="1" />
        <ButtonBlueMessenger text="Написать" mr="1" />
        <XDeleteItem text="Отменить заявку" />
      </div>
    </div>
  );
};

const FriendsListOutItem = () => {
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
        <ButtonBrownLine text="Подписаться" mr="1" />
        <ButtonBlueMessengerLine text="Написать" mr="1" />
        <XDeleteItem text="Отменить заявку" op="1" />
      </div>
    </div>
  );
};

export default FriendsListOut;
