import React from 'react';
import TrendingIcon from '../../../icons/bar/TrendingIcon';
import '../friends_6_New/FriendsNew.scss';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';

const FriendsPopular = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <FriendsTopMenuSF Icon={TrendingIcon} text="популярные люди" />

          <div className="f_new__items">
            {items.map((i) => {
              return <FriendsPopularItem />;
            })}
          </div>
          <div className="f_list__more">
            <span>Показать еще</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FriendsPopularItem = () => {
  return (
    <div className="f_new__item">
      <div
        className="f_new__item-img"
        style={{
          backgroundImage: `url("https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png")`,
        }}
      ></div>
      <div className="f_new__item-right">
        <div className="f_new__item-title">Имя Фамилия</div>
        <div className="f_new__item-text">
          <span>Россия, </span>
          <span>Москва</span>
        </div>
        <div className="f_list__inn-btn f_list__out-plus">
          <span>Подписаться</span>
        </div>
      </div>
    </div>
  );
};

export default FriendsPopular;
