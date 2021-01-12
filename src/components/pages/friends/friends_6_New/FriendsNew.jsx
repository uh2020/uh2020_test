import React from 'react';
import {
  ButtonCasual,
  ButtonGreenPlus,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
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

export default FriendsNew;
