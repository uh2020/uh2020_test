import React from 'react';
import New from '../../../icons/bar/NewIcon';
import RecommendationIcon from '../../../icons/bar/RecommendationIcon';
import FriendsTopMenuSF from '../friendsCommon/FriendsTopMenuSF';
import '../friends_6_New/FriendsNew.scss';
import {
  ButtonCasual,
  ButtonGreenPlus,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';

const FriendsRecom = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <FriendsTopMenuSF Icon={RecommendationIcon} text="РЕКОМЕНДАЦИИ" />
          <div className="f_new__items">
            {items.map((i) => {
              return (
                <FriendItemSmall
                  button={ButtonGreenPlus}
                  buttonText="Добавить в друзья"
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

export default FriendsRecom;
