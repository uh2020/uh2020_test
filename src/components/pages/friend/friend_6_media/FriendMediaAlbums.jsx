import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import { FriendMediaAlbum } from './FriendMedia';

const FriendMediaAlbums = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="fr__media-inner">
        {items.map((i) => {
          return <FriendMediaAlbum />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendMediaAlbums;
