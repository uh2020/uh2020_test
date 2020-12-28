import React from 'react';
import FilterIcon from '../../../icons/friends/FilterIcon';
import Search from '../../../icons/bar/SearchIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import EarthIcon from '../../../icons/friends/EarthIcon';
import DownIcon from '../../../icons/friends/DownIcon';

const FriendsHeaderMenuIS = (props) => {
  return (
    <>
      <div className="main__search-wrapper">
        <form
          onSubmit={props.handleSubmit}
          className="main__search-block f_search__r-form "
        >
          <Search width="18" height="18" />
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
        <div className="f-search__header-item">
          <FilterIcon />
        </div>
        <div className="f-search__header-item">
          <FSortIcon />
        </div>
      </div>
    </>
  );
};

// const FriendsSearchForm = (props) => {
//   const dispatch = useDispatch();
//   const sendData = (e) => {
//     if (e.currentTarget.value.length >= 3) {
//       dispatch(getFriendsSearch(e.currentTarget.value));
//     }
//   };
//   return (
//     <form
//       onSubmit={props.handleSubmit}
//       className="main__search-block f_search__r-form "
//     >
//       <Search width="18" height="18" />
//       <Field
//         onChange={sendData}
//         component="input"
//         name="SearchPeople"
//         className="main__search-input"
//         type="text"
//         placeholder="Поиск друзей"
//       />
//     </form>
//   );
// };

// const FriendsSearchReduxForm = reduxForm({
//   form: 'FriendsSearchForm',
// })(FriendsSearchForm);

export default FriendsHeaderMenuIS;
