import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import AlbumFriendMediaIcon from '../../../icons/friend/AlbumFriendMediaIcon';
import PlayFriendIcon from '../../../icons/friend/PlayFriendMediaIcon';
import { FriendMediaPhoto } from './FriendMedia';

const FriendMediaPhotos = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="fr__media-inner">
        {items.map((i) => {
          return <FriendMediaPhoto />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendMediaPhotos;
