import React from 'react';
import New from '../../../icons/bar/NewIcon';
import RecommendationIcon from '../../../icons/bar/RecommendationIcon';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import '../friends_6_New/FriendsNew.scss';
import {
  ButtonCasual,
  ButtonGreenPlus,
} from '../../../commonElements/buttons/Buttons';

const FriendsRecom = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <FriendsTopMenuSF Icon={RecommendationIcon} text="РЕКОМЕНДАЦИИ" />
          <div className="f_new__items">
            {items.map((i) => {
              return <FriendsRecomItem />;
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

const FriendsRecomItem = () => {
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
        <ButtonGreenPlus text="Добавить в друзья" />
      </div>
    </div>
  );
};

export default FriendsRecom;
