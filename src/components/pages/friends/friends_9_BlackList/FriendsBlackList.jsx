import React from 'react';
import BlockUserIcon from '../../../icons/bar/BlockUserIcon';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import '../friends_6_New/FriendsNew.scss';
import './friendsBlackList.scss';

const FriendsBlackList = () => {
  const items = [{}, {}, {}, {}];
  return (
    <>
      <div className="f_BL">
        <div className=" f-container f_BL__container">
          <FriendsTopMenuSF Icon={BlockUserIcon} text="черный список" />
          <div className="f_BL__items">
            {items.map((i) => {
              return <FriendsBlackListItem />;
            })}
          </div>
          <div className="f_BL__bottom">
            <div className="f_BL__bottom-btns">
              <div className="f_BL__bottom-btn-all">Всеx</div>
              <div className="f_BL__bottom-btn">Разблокировать</div>
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
      <div className="f_BL__item-btn">Разблокировать</div>
    </div>
  );
};

export default FriendsBlackList;
