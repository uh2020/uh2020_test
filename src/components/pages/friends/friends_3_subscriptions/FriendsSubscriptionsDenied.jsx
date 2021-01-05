import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListOut = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items ">
        {items.map((i) => {
          return <FriendsListOutItem />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </div>
  );
};

const FriendsListOutItem = () => {
  return (
    <article className="friend-item">
      <div className="tab__main-item__block-img">
        <a
          style={{
            backgroundImage: `url(${'https://7sisters.ru/wp-content/uploads/2017/08/2515091748.jpg'})`,
          }}
          className="tab__main-item__img"
        ></a>
      </div>
      <div className="tab__main-item__block-info">
        <h4 className="tab__main-item__block-info__name">
          <a className="tab__main-item__block-info__name-link">Фамилия Имя</a>
        </h4>
        <div className="tab__main-item__block-info__country">
          <span>Страна</span>, <span>Город</span>
        </div>
      </div>
    </article>
  );
};

export default FriendsListOut;
