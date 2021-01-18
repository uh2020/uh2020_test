import React from 'react';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import AppraisalIcon from '../../../icons/bar/AppraisalIcon';
import MessageIcon from '../../../icons/bar/MessageIcon';
import ShareIcon from '../../../icons/groups/ShareIcon';
import {
  FriendMediaAlbum,
  FriendMediaPhoto,
  FriendMediaVideo,
} from './FriendMedia';
import FriendMediaAlbums from './FriendMediaAlbums';
import FriendMediaPhotos from './FriendMediaPhotos';
import FriendMediaVideos from './FriendMediaVideos';

const FriendMediaAlbumPage = () => {
  const items = [
    { type: 'v' },
    { type: 'p' },
    { type: 'v' },
    { type: 'p' },
    { type: 'p' },
    { type: 'v' },
    { type: 'p' },
    { type: 'v' },
    { type: 'p' },
    { type: 'p' },
    { type: 'v' },
    { type: 'p' },
  ];
  return (
    <div className="fr__album">
      <div className="fr__album-head">
        <p className="fr__album-text">
          По своей сути рыбатекст является альтернативой традиционному lorem
          ipsum, который вызывает у некторых людей недоумение при попытках
          прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
          языке наполнит любой макет непонятным смыслом и придаст неповторимый
          колорит советских времен.
        </p>
        <div className="fr__album-headBott">
          <div className="fr__album-count">
            <span>20</span>
            <p>Файлов</p>
          </div>
          <div className="fr__album-items">
            <div className="fr__album-item">
              <AppraisalIcon width="24" height="24" />
              <span>125665</span>
            </div>
            <div className="fr__album-item">
              <MessageIcon size="24" />
              <span>12</span>
            </div>
            <div className="fr__album-item">
              <ShareIcon color="#7C7474" />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fr__media-inner">
        {items.map((i) => {
          switch (i.type) {
            case 'v': {
              return <FriendMediaVideo />;
            }
            case 'p': {
              return <FriendMediaPhoto />;
            }
            default:
              return <FriendMediaPhoto />;
          }
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </div>
  );
};

export default FriendMediaAlbumPage;
