import React from 'react';
import New from '../../../icons/bar/NewIcon';
import RecommendationIcon from '../../../icons/bar/RecommendationIcon';
import TrendingIcon from '../../../icons/bar/TrendingIcon';
import EarthIcon from '../../../icons/friends/EarthIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import '../friendsNew_6/FriendsNew.scss';

const FriendsPopular = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <div className="f_new">
        <div className="f-container f_new__container">
          <div class="main__top f_new__header">
            <div class="main__top-input f_new__title-inner">
              <div class="main__top-input-search">
                <TrendingIcon />
              </div>
              <div className="f_new__header-title">популярные люди</div>
            </div>
            <div class="main__top-select">
              <EarthIcon />
              <select>
                <option>Все страны</option>
              </select>
            </div>
            <div class="main__top-select">
              <select>
                <option>Все города</option>
              </select>
            </div>
            <div className="f_new__header-item">
              <FilterIcon />
            </div>
            <div className="f_new__header-item">
              <FSortIcon />
            </div>
          </div>
          <div className="f_new__items">
            {items.map((i) => {
              return <FriendsPopularItem />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const FriendsPopularItem = () => {
  return (
    <div className="f_new__item">
      <div
        className="f_new__item-img"
        style={{
          backgroundImage: `url("https://www.pinclipart.com/picdir/middle/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png")`,
        }}
      ></div>
      <div className="f_new__item-right">
        <div className="f_new__item-title">Имя Фамилия</div>
        <div className="f_new__item-text">
          <span>Россия, </span>
          <span>Москва</span>
        </div>
        <div className="f_new__item-btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="7.5" fill="#669774" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
              fill="white"
            />
          </svg>
          <span>Добавить в друзья</span>
        </div>
      </div>
    </div>
  );
};

export default FriendsPopular;
