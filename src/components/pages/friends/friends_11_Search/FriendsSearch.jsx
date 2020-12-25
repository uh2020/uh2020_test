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

const FriendsSearch = () => {
  const friendsSearch = useSelector((state) => state.friends.friendsSearch);
  var trueArray = Array.prototype.slice.call(friendsSearch, 0);
  console.log(trueArray);
  debugger;
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
          <div className="f_pets__header-right">
            <div>
              <FSortIcon />
            </div>
          </div>
        </div>
        <div className="f_new__items">
          {friendsSearch.length
            ? friendsSearch.map((i) => {
                return (
                  <FriendSearchItem
                    country={i.country}
                    id={i.id}
                    name={i.name}
                    surname={i.surname}
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
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.04038 16.9596L9.85 18.7692V19.776C5.50566 19.2123 2.15 15.498 2.15 11C2.15 10.1111 2.28101 9.25302 2.52468 8.44392L5.04038 10.9596C5.29422 11.2135 5.70578 11.2135 5.95962 10.9596L6.95962 9.95962C7.08152 9.83772 7.15 9.67239 7.15 9.5V9.15H8.5C9.41127 9.15 10.15 8.41127 10.15 7.5V6.5C10.15 6.3067 10.3067 6.15 10.5 6.15H11.5C12.9636 6.15 14.15 4.96355 14.15 3.5V2.72697C17.4826 3.99662 19.85 7.22203 19.85 11C19.85 12.7909 19.3182 14.4572 18.4039 15.85H16.5C16.3067 15.85 16.15 15.6933 16.15 15.5C16.15 14.5887 15.4113 13.85 14.5 13.85C14.3067 13.85 14.15 13.6933 14.15 13.5V12.5C14.15 11.5887 13.4113 10.85 12.5 10.85H7.5C7.14102 10.85 6.85 11.141 6.85 11.5V12.5C6.85 12.6724 6.91848 12.8377 7.04038 12.9596L7.85 13.7692V16.5C7.85 16.6724 7.91848 16.8377 8.04038 16.9596ZM11.15 19.8488V18.5C11.15 18.3276 11.0815 18.1623 10.9596 18.0404L9.15 16.2308V13.5C9.15 13.3276 9.08152 13.1623 8.95962 13.0404L8.15 12.2308V12.15H12.5C12.6933 12.15 12.85 12.3067 12.85 12.5V13.5C12.85 14.4113 13.5887 15.15 14.5 15.15C14.6933 15.15 14.85 15.3067 14.85 15.5C14.85 16.4113 15.5887 17.15 16.5 17.15H17.364C15.7869 18.7816 13.5885 19.8082 11.15 19.8488ZM10.5 21.15C10.534 21.15 10.5676 21.1474 10.6004 21.1423C10.733 21.1474 10.8662 21.15 11 21.15C16.6057 21.15 21.15 16.6057 21.15 11C21.15 5.39431 16.6057 0.85 11 0.85C5.39431 0.85 0.85 5.39431 0.85 11C0.85 16.3818 5.03846 20.7852 10.3336 21.1285C10.3869 21.1425 10.4427 21.15 10.5 21.15ZM5.85 9.23076L5.5 9.58076L3.04218 7.12294C4.47961 4.17814 7.5031 2.15 11 2.15C11.6346 2.15 12.2535 2.21677 12.85 2.34363V3.5C12.85 4.24558 12.2456 4.85 11.5 4.85H10.5C9.58873 4.85 8.85 5.58873 8.85 6.5V7.5C8.85 7.6933 8.6933 7.85 8.5 7.85H6.5C6.14102 7.85 5.85 8.14102 5.85 8.5V9.23076Z"
              fill="#7C7474"
              stroke="#7C7474"
              stroke-width="0.3"
            />
          </svg>

          <select name="country" id="countryId" size="1">
            <option value="all">Все страны</option>
          </select>
        </div>
        <div className="main__search-city">
          <select name="city" id="cityID" size="1">
            <option value="all">Все города</option>
          </select>
        </div>
        <div class="f-search__header-item">
          <FilterIcon />
        </div>
      </div>
    </>
  );
};

const FriendSearchItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="f_new__item">
      <div
        className="f_new__item-img"
        style={{
          backgroundImage: `url("https://zbulvar.ru/wp-content/uploads/2018/10/ohotnik_ohota_fotobank9-e1538579459614.jpg")`,
        }}
      ></div>
      <div className="f_new__item-right">
        <div className="f_new__item-title">
          {props.name} {props.surname}
        </div>
        <div className="f_new__item-text">
          <span>{props.country} </span>
          <span>Москва</span>
        </div>
        <div
          className="f_new__item-btn"
          onClick={() => {
            dispatch(setAddFriend(props.id));
          }}
        >
          <span>Добавить в друзья</span>
        </div>
      </div>
    </div>
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
      <Search width="18" height="18" />
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
