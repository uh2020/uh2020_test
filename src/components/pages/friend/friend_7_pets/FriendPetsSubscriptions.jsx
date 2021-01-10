import React from 'react';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import { AmericanFlag } from '../../../icons/flags/Flags';
import FLikeIcon from '../../../icons/friends/FLikeIcon';
import RewardIcon from '../../../icons/friends/RewardIcon';
import XIcon from '../../../icons/friends/XIcon';
import { FriendPetsItem } from './FriendPets';

const FriendPetsSubscriptions = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="f_pets__main">
      {items.map((i) => {
        return <FriendPetsItem />;
      })}
    </div>
  );
};

export default FriendPetsSubscriptions;
