import React from 'react';
// import FriendsHeaderMenuSearch from '../friendsCommon/FriendsHeaderMenuSearch';
import './friendsSearch.scss';
import '../Friends.scss';
import '../friends_6_New/FriendsNew.scss';
import '../friends_5_Pets/FriendsPets.scss';
import '../FriendsInitial.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import SearchIcon from '../../../icons/bar/SearchIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../../icons/bar/SearchIcon';
import {
  getFriendsSearch,
  setAddFriend,
} from '../../../../redux/friends_reducer';
import EarthIcon from '../../../icons/friends/EarthIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
import { ButtonGreenPlus } from '../../../commonElements/buttons/Buttons';

const FriendsSearch = () => {
  const friendsSearch = useSelector((state) => state.friends.friendsSearch);
  var trueArray = Array.prototype.slice.call(friendsSearch, 0);
  console.log(trueArray);
  const items = [{}, {}, {}, {}];
  return (
    <div>
      <FriendsHeaderMenuSearch />
      <div className="f_search__container">
        <div className="f_pets__header f_search__header">
          <div className="f_pets__header-left f_search__header-left ">
            <SearchIcon width="22" height="22" />
            <p>
              результаты поиска <span>54</span>
            </p>
          </div>
        </div>
        <div className="f_new__items">
          {friendsSearch.length
            ? friendsSearch.map((i) => {
                return (
                  // <FriendSearchItem
                  //   country={i.country}
                  //   id={i.id}
                  //   name={i.name}
                  //   surname={i.surname}
                  // />
                  <FriendItemSmall
                    button={ButtonGreenPlus}
                    buttonText="Добавить в друзья"
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

const FriendsHeaderMenuSearch = () => {
  const dispatch = useDispatch();
  const FormSub = (values) => {
    if (values.SearchPeople.length >= 3) {
      console.log(values.SearchPeople);
    }
    dispatch(getFriendsSearch(values.SearchPeople));
  };
  return (
    <>
      <div className="main__search-wrapper">
        <FriendsSearchReduxForm onSubmit={FormSub} />
        <div className="main__search-coutry">
          <EarthIcon />

          <select name="country" id="countryId" size="1">
            <option value="all">Все страны</option>
          </select>
          <div className="main__search-down">
            <DownIcon />
          </div>
        </div>
        <div className="main__search-city">
          <select name="city" id="cityID" size="1">
            <option value="all">Все города</option>
          </select>
          <div className="main__search-down">
            <DownIcon />
          </div>
        </div>
        <div className="f-search__header-item">
          <FilterIcon />
        </div>
      </div>
    </>
  );
};

const FriendsSearchForm = (props) => {
  const dispatch = useDispatch();
  const sendData = (e) => {
    if (e.currentTarget.value.length >= 3) {
      dispatch(getFriendsSearch(e.currentTarget.value));
    }
  };
  return (
    <form
      onSubmit={props.handleSubmit}
      className="main__search-block f_search__r-form "
    >
      <Search width="22" height="22" />
      <Field
        onChange={sendData}
        component="input"
        name="SearchPeople"
        className="main__search-input"
        type="text"
        placeholder="Поиск друзей"
      />
    </form>
  );
};

const FriendsSearchReduxForm = reduxForm({
  form: 'FriendsSearchForm',
})(FriendsSearchForm);

export default FriendsSearch;
