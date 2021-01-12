import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListOut = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items ">
        {items.map((i) => {
          return <FriendItemSmall />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </div>
  );
};

export default FriendsListOut;
