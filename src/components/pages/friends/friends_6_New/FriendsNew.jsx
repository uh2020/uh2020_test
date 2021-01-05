import React from 'react';
import {
  ButtonCasual,
  ButtonGreenPlus,
} from '../../../commonElements/buttons/Buttons';
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
            <ButtonCasual text="Показать еще" />
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
        <ButtonGreenPlus text="Добавить в друзья" />
      </div>
    </div>
  );
};

export default FriendsNew;
