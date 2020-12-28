import React from 'react';
import './FriendsPets.scss';
import '../FriendsInitial.scss';
import XIcon from '../../../icons/friends/XIcon';
import FLikeIcon from '../../../icons/friends/FLikeIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import RewardIcon from '../../../icons/friends/RewardIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FriendsPetsIcon from '../../../icons/friends/FriendsPetsIcon';

const FriendsPets = () => {
  const items = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="f_pets">
        <div className="f_pets__container">
          <div className="f_pets__header">
            <div className="f_pets__header-left">
              <FriendsPetsIcon />
              <p>
                Питомцы друзей <span>87</span>
              </p>
            </div>
            <div className="f_pets__header-right">
              <div className="f_list__header-sort-item">
                <FilterIcon />
              </div>
              <div className="f_list__header-sort-item">
                <FSortIcon />
              </div>
            </div>
          </div>

          <div className="f_pets__main">
            {' '}
            {items.map((i) => {
              return <FriendsPetsItem />;
            })}{' '}
          </div>
        </div>
      </div>
    </>
  );
};

const FriendsPetsItem = () => {
  return (
    <div className="f_pets__item">
      <div className="f_pets__item-header">
        <p className="f_pets__item-title">
          Марсель, <span>7</span>
        </p>
        <div className="f_pets__item-reward">
          <div>
            <RewardIcon />
          </div>
          <p>
            <XIcon />
            <span>10</span>
          </p>
        </div>
      </div>

      <div
        className="f_pets__item-img"
        style={{
          backgroundImage: `url("https://avatars.mds.yandex.net/get-zen_doc/1064817/pub_5d468e47e3062c00ad408138_5d5beca597b5d400ae26c826/scale_1200")`,
        }}
      ></div>
      <div className="f_pets__item-about">
        <p>австрийская гончая</p>
        <div className="f_pets__item-about-right">
          <span>999+</span>
          <FLikeIcon />
        </div>
      </div>
      <div className="f_pets__item-bottom">
        <div
          className="f_pets__item-logo"
          style={{
            backgroundImage: `url("https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png")`,
          }}
        ></div>
        <div className="f_pets__item-btn">Подписаться</div>
      </div>
    </div>
  );
};

export default FriendsPets;
