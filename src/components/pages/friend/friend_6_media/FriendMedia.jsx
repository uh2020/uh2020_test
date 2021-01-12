import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonCasual,
  ButtonGreen,
  ButtonOrangeMedia,
} from '../../../commonElements/buttons/Buttons';
import {
  NonePageButtonOne,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';
import MediaIcon from '../../../icons/bar/MediaIcon';
import AlbumFriendMediaIcon from '../../../icons/friend/AlbumFriendMediaIcon';
import AlbumIcon from '../../../icons/friend/AlbumIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import GCameraIcon from '../../../icons/groups/GCameraIcon';
import GVideoIcon from '../../../icons/groups/GVideoIcon';
import FriendMediaAlbums from './FriendMediaAlbums';
import FriendMediaPhotos from './FriendMediaPhotos';
import FriendMediaVideos from './FriendMediaVideos';

const FriendMedia = (props) => {
  const items = [{}];
  const hide = false;
  return (
    <section class="main-container f-all-info">
      <div class="f-info__header">
        <div className="f-info__header-left">
          {props.location.pathname.includes('/id/media/album/id') ? null : (
            <div className="fr__media-ln-inn">
              <NavLink
                exact
                to="/id/media"
                activeClassName=" active"
                className={
                  'f-info__header__item' +
                  ' ' +
                  (items.length === 0 ? 'disLn' : '')
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
                  'f-info__header__item' +
                  ' ' +
                  (items.length === 0 ? 'disLn' : '')
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
                  'f-info__header__item' +
                  ' ' +
                  (items.length === 0 ? 'disLn' : '')
                }
              >
                <div className="f-info__svg">
                  <GVideoIcon size="24" />
                </div>
                <p className="f-info__title">Видео</p>
                <span className="f-info__count">578</span>
                <span className="f-info__line"></span>
              </NavLink>
            </div>
          )}

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

          {props.location.pathname.includes('/id/media/album/id') ? (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/id/media/album/id"
                activeClassName="active"
                className={
                  'f-info__header__item fr__media-inn' +
                  ' ' +
                  (items.length === 0 ? 'disLn' : '')
                }
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Название альбома
                </p>
                <span className="f-info__line"></span>
              </NavLink>
            </div>
          ) : null}
        </div>
        <div className="f-info__header-right">
          <div className="f_list__header-sort">
            <div className="f_list__header-sort-item">
              <FilterIcon />
            </div>
            <div className="f_list__header-sort-item">
              <FSortIcon />
            </div>
          </div>
        </div>
      </div>
      {hide ? (
        <NonePageButtonTwo
          button={ButtonGreen}
          buttonText="Добавить в друзья"
          UpperText="Медиа скрыты"
          UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
        />
      ) : (
        <>
          {!items.length ? (
            <NonePageButtonOne
              button={ButtonOrangeMedia}
              buttonText="Отметить на своих медиа"
              UpperText="У Сергея пока нет медиа"
            />
          ) : (
            <Switch>
              <Route
                exact
                path="/id/media"
                render={() => <FriendMediaMain />}
              />
              <Route
                path="/id/media/photos"
                render={() => <FriendMediaPhotos />}
              />
              <Route
                path="/id/media/videos"
                render={() => <FriendMediaVideos />}
              />
              <Route
                path="/id/media/albums"
                render={() => <FriendMediaAlbums />}
              />
              <Route
                exact
                path="/id/media/album/id"
                render={() => <FriendMediaAlbumPage />}
              />
            </Switch>
          )}
        </>
      )}
    </section>
  );
};
const FriendMediaMain = () => {
  const items = [
    { type: 'v' },
    { type: 'p' },
    { type: 'v' },
    { type: 'p' },
    { type: 'p' },
    { type: 'v' },
    { type: 'a' },
    { type: 'v' },
    { type: 'a' },
    { type: 'p' },
    { type: 'v' },
    { type: 'a' },
  ];
  return (
    <>
      <div className="fr__media-inner">
        {items.map((i) => {
          switch (i.type) {
            case 'a': {
              return <FriendMediaAlbum />;
            }
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
    </>
  );
};

export const FriendMediaPhoto = () => {
  return (
    <div
      className="fr__media-el"
      style={{
        backgroundImage: `url("https://kudago.com/media/images/quiz/46/2c/462c0208aa9a82a23b29696fc917b8a1.jpg")`,
      }}
    ></div>
  );
};
export const FriendMediaVideo = () => {
  return (
    <div
      className="fr__media-el"
      style={{
        backgroundImage: `url("https://kudago.com/media/images/quiz/46/2c/462c0208aa9a82a23b29696fc917b8a1.jpg")`,
      }}
    >
      <div className="fr__media-el-play">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="25" cy="25" r="25" fill="#3F4548" />
          <path
            d="M34.3278 23.8542C35.2241 24.3732 35.2241 25.6268 34.3278 26.1458L21.0968 33.8075C20.174 34.3419 19 33.7003 19 32.6617V17.3383C19 16.2997 20.174 15.6581 21.0969 16.1925L34.3278 23.8542Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="fr__media-el-time">40:32</div>
    </div>
  );
};
export const FriendMediaAlbum = () => {
  return (
    <NavLink
      to="/id/media/album/id"
      className="fr__media-el"
      style={{
        backgroundImage: `url("https://kudago.com/media/images/quiz/46/2c/462c0208aa9a82a23b29696fc917b8a1.jpg")`,
      }}
    >
      <div className="fr__media-el-cont">
        <div className="fr__media-el-play">
          <AlbumFriendMediaIcon />
        </div>
        <div className="fr__media-el-bottom">
          <div className="fr__media-el-text">
            Фотографии со мной Фотографии со мной
          </div>
          <div className="fr__media-el-num">6</div>
        </div>
      </div>
    </NavLink>
  );
};
export const FriendMediaAlbumPage = () => {
  return <>FriendMediaAlbumPage</>;
};
export default FriendMedia;
