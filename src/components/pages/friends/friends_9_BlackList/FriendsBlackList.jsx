import React from 'react';
import {
  ButtonBrown,
  ButtonBrownLine,
  ButtonCasual,
  ButtonDisabled,
} from '../../../commonElements/buttons/Buttons';
import BlockUserIcon from '../../../icons/bar/BlockUserIcon';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import '../friends_6_New/FriendsNew.scss';
import './friendsBlackList.scss';

const FriendsBlackList = () => {
  const items = [{}, {}, {}, {}];
  return (
    <>
      <div className="f_BL f_new">
        <div className=" f-container f_new__container">
          <FriendsTopMenuSF Icon={BlockUserIcon} text="черный список" />
          <div className="f_BL__items">
            {items.map((i) => {
              return <FriendsBlackListItem />;
            })}
            <FriendsBlackListItemAdd />
          </div>
          <div className="f_BL__bottom">
            <div className="f_BL__bottom-btns">
              <div className="f_BL__bottom-btn-all">Всеx</div>
              <ButtonBrown text="Разблокировать" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FriendsBlackListItem = () => {
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
            Пабло Диего Хозе Франциско де Паул
          </h1>
          <p className="f_BL__item-text">
            <span>Россия,</span>
            <span>Москва</span>
          </p>
        </div>
      </div>
      <ButtonBrownLine text="Разблокировать" />
    </div>
  );
};
const FriendsBlackListItemAdd = () => {
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
            Пабло Диего Хозе Франциско де Паул
          </h1>
          <p className="f_BL__item-text">
            <span>Россия,</span>
            <span>Москва</span>
          </p>
        </div>
        <ButtonDisabled ml={20} text="Был удален из черного списка" />
      </div>
      <ButtonCasual text="Заблокировать" color="#7C7474" />
    </div>
  );
};

export default FriendsBlackList;
