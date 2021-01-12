import React from 'react';
import TrendingIcon from '../../../icons/bar/TrendingIcon';
import '../friends_6_New/FriendsNew.scss';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import {
  ButtonBrownLine,
  ButtonCasual,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';

const FriendsPopular = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <FriendsTopMenuSF Icon={TrendingIcon} text="популярные люди" />

          <div className="f_new__items">
            {items.map((i) => {
              return (
                <FriendItemSmall
                  button={ButtonBrownLine}
                  buttonText="Подписаться"
                />
              );
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

const FriendsPopularItem = () => {
  return (
    <div className="f_new__item">
      <div
        className="f_new__item-img"
        style={{
          backgroundImage: `url("https://i.pinimg.com/736x/2f/03/f8/2f03f8cae2989c91c13b19b91ad94f8a.jpg")`,
        }}
      ></div>
      <div className="f_new__item-right">
        <div className="f_new__item-title">Имя Фамилия</div>
        <div className="f_new__item-text">
          <span>Россия, </span>
          <span>Москва</span>
        </div>
        <ButtonBrownLine text="Подписаться" />
      </div>
    </div>
  );
};

export default FriendsPopular;
