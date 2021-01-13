import React from 'react';
import {
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import {
  BookingCardItem,
  LibraryArticleCardItem,
  LibraryStoryCardItem,
  MarketCardItem,
  PetsCardItem,
} from '../../../commonElements/friends/FriendNotItems';
import {
  NonePage,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';
import PricetagIcon from '../../../icons/bar/PricetagIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const FriendNotification = () => {
  const items = [{}];
  const hide = false;
  return (
    <div className="friends-page">
      <section className="main-container f-all-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <div className="f-info__header__item active">
              <div className="f-info__svg">
                <PricetagIcon />
              </div>
              <p className="f-info__title">Объявления</p>
              <span className="f-info__count">34</span>
            </div>
          </div>

          <div className="f-info__header-right">
            <div className="f_list__header-sort">
              <div className="f_new">
                <div className="main__top-select fr__select">
                  <select>
                    <option>Все объявления</option>
                  </select>
                  <div className="main__search-down f_new__down">
                    <DownIcon />
                  </div>
                </div>
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
            UpperText="Объявления скрыты"
            UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
          />
        ) : (
          <>
            {!items.length ? (
              <NonePage UpperText="У Сергея пока нет  публикаций" />
            ) : (
              <FriendNotificationInit />
            )}
          </>
        )}
      </section>
    </div>
  );
};

const FriendNotificationInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="g_Off__items">
        {/* {items.map((i) => (
          <PetsCardItem />
        ))} */}
        <PetsCardItem />
        <MarketCardItem />
        <BookingCardItem />
        <LibraryArticleCardItem />
        <LibraryStoryCardItem />
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendNotification;
