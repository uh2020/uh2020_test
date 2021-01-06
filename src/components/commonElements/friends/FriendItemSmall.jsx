import React from 'react';
import { ButtonGreenPlus } from '../buttons/Buttons';

const FriendItemSmall = (props) => {
  return (
    <>
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
          {props.button ? (
            <props.button text={props.buttonText ? props.buttonText : ' '} />
          ) : (
            <ButtonGreenPlus text="Добавить в друзья" />
          )}
        </div>
      </div>
    </>
  );
};

export default FriendItemSmall;
