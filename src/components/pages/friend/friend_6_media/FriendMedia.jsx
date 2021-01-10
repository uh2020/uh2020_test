import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ButtonOrangeMedia } from '../../../commonElements/buttons/Buttons';
import MediaIcon from '../../../icons/bar/MediaIcon';
import AlbumIcon from '../../../icons/friend/AlbumIcon';
import GCameraIcon from '../../../icons/groups/GCameraIcon';
import GVideoIcon from '../../../icons/groups/GVideoIcon';
import FriendMediaAlbums from './FriendMediaAlbums';
import FriendMediaPhotos from './FriendMediaPhotos';
import FriendMediaVideos from './FriendMediaVideos';

const FriendMedia = () => {
  const items = [{}];
  return (
    <section class="main-container f-all-info">
      <div class="f-info__header">
        <div className="f-info__header-left">
          <NavLink
            exact
            to="/id/media"
            activeClassName=" active"
            className={
              'f-info__header__item' + ' ' + (items.length === 0 ? 'disLn' : '')
            }
          >
            <div className="f-info__svg">
              <MediaIcon />
            </div>
            <p className="f-info__title">Все медиа</p>
            <span className="f-info__count">4578</span>
            <span className="f-info__line"></span>
          </NavLink>
          <NavLink
            exact
            to="/id/media/photos"
            activeClassName="active"
            className={
              'f-info__header__item' + ' ' + (items.length === 0 ? 'disLn' : '')
            }
          >
            <div className="f-info__svg">
              <GCameraIcon size="27" />
            </div>
            <p className="f-info__title">фото</p>
            <span className="f-info__count">4578</span>
            <span className="f-info__line"></span>
          </NavLink>
          <NavLink
            exact
            to="/id/media/videos"
            activeClassName="active"
            className={
              'f-info__header__item' + ' ' + (items.length === 0 ? 'disLn' : '')
            }
          >
            <div className="f-info__svg">
              <GVideoIcon size="24" />
            </div>
            <p className="f-info__title">Видео</p>
            <span className="f-info__count">578</span>
            <span className="f-info__line"></span>
          </NavLink>
          <NavLink
            exact
            to="/id/media/albums"
            activeClassName="active"
            className={
              'f-info__header__item' + ' ' + (items.length === 0 ? 'disLn' : '')
            }
          >
            <div className="f-info__svg">
              <AlbumIcon />
            </div>
            <p className="f-info__title">альбомы</p>
            <span className="f-info__count">23</span>
            <span className="f-info__line"></span>
          </NavLink>
        </div>
      </div>

      {items.length === 0 ? (
        <FriendMediaNone />
      ) : (
        <Switch>
          <Route exact path="/id/media" render={() => <FriendMediaMain />} />
          <Route path="/id/media/photos" render={() => <FriendMediaPhotos />} />
          <Route path="/id/media/videos" render={() => <FriendMediaVideos />} />
          <Route path="/id/media/albums" render={() => <FriendMediaAlbums />} />
        </Switch>
      )}
    </section>
  );
};
const FriendMediaMain = () => {
  return <>FriendMediaMain</>;
};

const FriendMediaNone = () => {
  return (
    <div class="f-all-info__main">
      <p class="f-all-info__main__title">У Сергея пока нет медиа</p>
      <ButtonOrangeMedia text="Отметить на своих медиа" />
    </div>
  );
};

export default FriendMedia;
