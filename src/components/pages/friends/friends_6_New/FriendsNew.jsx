import React from 'react';
import New from '../../../icons/bar/NewIcon';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import './FriendsNew.scss';

const FriendsNew = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <FriendsTopMenuSF Icon={New} text="новые пользователи" />

          <div className="f_new__items">
            {items.map((i) => {
              return <FriendNewItem />;
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

export const FriendNewItem = () => {
  return (
    <div className="f_new__item">
      <div
        className="f_new__item-img"
        style={{
          backgroundImage: `url("https://zbulvar.ru/wp-content/uploads/2018/10/ohotnik_ohota_fotobank9-e1538579459614.jpg")`,
        }}
      ></div>
      <div className="f_new__item-right">
        <div className="f_new__item-title">Имя Фамилия</div>
        <div className="f_new__item-text">
          <span>Россия, </span>
          <span>Москва</span>
        </div>
        <div className="f_new__item-btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#669774" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
              fill="white"
            />
          </svg>
          <span>Добавить в друзья</span>
        </div>
      </div>
    </div>
  );
};

export default FriendsNew;
