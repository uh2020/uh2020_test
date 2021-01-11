import React from 'react';
import {
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import NoteBookIcon from '../../../icons/bar/NoteBookIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import { FriendNotificationItem } from '../friend_9_notification/FriendNotification';

const FriendPosts = () => {
  const items = [{}];
  return (
    <div className="friends-page">
      <section className="main-container f-all-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <div className="f-info__header__item active">
              <div className="f-info__svg">
                <NoteBookIcon />
              </div>
              <p className="f-info__title">Публикации</p>
              <span className="f-info__count">434</span>
            </div>
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
        {items.length === 0 ? <FriendPostsNone /> : <FriendPostsInit />}
      </section>
    </div>
  );
};

const FriendPostsNone = () => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">Объявления скрыты</p>
      <span>
        <ButtonGreen text="Добавить в друзья" />
      </span>
    </div>
  );
};

const FriendPostsInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="g_Off__items">
        {items.map((i) => (
          <FriendNotificationItem />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendPosts;
