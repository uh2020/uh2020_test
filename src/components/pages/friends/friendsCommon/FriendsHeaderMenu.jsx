import React from 'react';
import Search from '../../../icons/bar/SearchIcon';
import EarthIcon from '../../../icons/friends/EarthIcon';
import DownIcon from '../../../icons/friends/DownIcon';
const FriendsHeaderMenu = (props) => {
  return (
    <>
      <div className="main__search-wrapper">
        <form
          onSubmit={props.handleSubmit}
          className="main__search-block f_search__r-form "
        >
          <Search width="23" height="23" />
          <input
            component="input"
            name="SearchPeople"
            className="main__search-input"
            type="text"
            placeholder="Поиск друзей"
          />
        </form>
        <div className="main__search-coutry">
          <EarthIcon />
          <select name="country">
            <option value="all">Все страны</option>
          </select>
          <div className="main__search-down">
            <DownIcon />
          </div>
        </div>
        <div className="main__search-city">
          <select name="city">
            <option value="all">Все города</option>
          </select>
          <div className="main__search-down">
            <DownIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsHeaderMenu;
