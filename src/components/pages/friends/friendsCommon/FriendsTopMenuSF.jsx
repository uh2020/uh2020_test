import React from 'react';
import New from '../../../icons/bar/NewIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import EarthIcon from '../../../icons/friends/EarthIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import '../friends_6_New/FriendsNew.scss';
const FriendsTopMenuSF = (props) => {
  return (
    <>
      <div className="main__top f_new__header">
        <div className="main__top-input f_new__title-inner">
          <div className="main__top-input-search">
            {props.Icon ? <props.Icon /> : <New />}
          </div>
          <div className="f_new__header-title">
            {props.text ? props.text : 'новые пользователи'}
            <span>{props.count ? props.count : '55'}</span>
          </div>
        </div>
        <div className="main__top-select">
          <EarthIcon />
          <select>
            <option>Все страны</option>
          </select>
          <div className="main__search-down f_new__down">
            <DownIcon />
          </div>
        </div>
        <div className="main__top-select">
          <select>
            <option>Все города</option>
          </select>
          <div className="main__search-down f_new__down">
            <DownIcon />
          </div>
        </div>
        <div className="f_new__header-item">
          <FilterIcon />
        </div>
        <div className="f_new__header-item">
          <FSortIcon />
        </div>
      </div>
    </>
  );
};

export default FriendsTopMenuSF;
