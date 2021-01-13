import React from 'react';
import {
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import { PetsCardItem } from '../../../commonElements/friends/FriendNotItems';
import {
  NonePage,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';
import NoteBookIcon from '../../../icons/bar/NoteBookIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const FriendPosts = () => {
  const items = [{}];
  const hide = false;
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
        {hide ? (
          <NonePageButtonTwo
            button={ButtonGreen}
            buttonText="Добавить в друзья"
            UpperText="Публикации скрыты"
            UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
          />
        ) : (
          <>
            {!items.length ? (
              <NonePage UpperText="У Сергея пока нет питомцев" />
            ) : (
              <FriendPostsInit />
            )}
          </>
        )}
      </section>
    </div>
  );
};

const FriendPostsInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="g_Off__items">
        {items.map((i) => (
          <PetsCardItem />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendPosts;
