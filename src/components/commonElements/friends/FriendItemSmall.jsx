import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonGreenPlus } from '../buttons/Buttons';

const FriendItemSmall = (props) => {
  return (
    <>
      <div className="f_new__item">
        <NavLink
          to="/id"
          className="f_new__item-img"
          style={{
            backgroundImage: `url("https://vsrap.ru/wp-content/uploads/2019/08/drake2.jpg")`,
          }}
        ></NavLink>
        <div className="f_new__item-right">
          <NavLink to="/id" className="f_new__item-title">
            Имя Фамилия
          </NavLink>
          <div className="f_new__item-text">
            <span>Россия, </span>
            <span>Москва</span>
          </div>
          {props.button ? (
            <props.button text={props.buttonText ? props.buttonText : ' '} />
          ) : // <ButtonGreenPlus text="Добавить в друзья" />
          null}
        </div>
      </div>
    </>
  );
};

export default FriendItemSmall;
