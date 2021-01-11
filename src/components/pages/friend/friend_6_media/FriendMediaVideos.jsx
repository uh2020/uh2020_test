import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import { FriendMediaVideo } from './FriendMedia';

const FriendMediaVideos = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="fr__media-inner">
        {items.map((i) => {
          return <FriendMediaVideo />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendMediaVideos;
