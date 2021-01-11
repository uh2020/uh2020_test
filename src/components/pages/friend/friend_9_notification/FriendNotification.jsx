import React from 'react';
import {
  ButtonBrownLine,
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import FavoritIcon from '../../../icons/bar/FavoritIcon';
import PricetagIcon from '../../../icons/bar/PricetagIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const FriendNotification = () => {
  const items = [{}];
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
        {items.length === 0 ? (
          <FriendNotificationNone />
        ) : (
          <FriendNotificationInit />
        )}
      </section>
    </div>
  );
};

const FriendNotificationNone = () => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">Объявления скрыты</p>
      <span>
        <ButtonGreen text="Добавить в друзья" />
      </span>
    </div>
  );
};

const FriendNotificationInit = () => {
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

export const FriendNotificationItem = () => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          <FavoritIcon />
        </div>
      </div>
      <h4 className="fr__post-item-title">
        Пропал кобель курцхаар в районе озера Байкал
      </h4>
      <div className="fr__post-item-name">Имя автора</div>
      <div className="fr__post-item-text">
        Санта-Крус-де-Тенерифе, Канарск...
      </div>
      <div className="fr__post-item-bottom">
        <div className="fr__post-item-date">24.09.2020</div>
        <ButtonBrownLine text="Подробнее" />
      </div>
    </div>
  );
};

export default FriendNotification;
