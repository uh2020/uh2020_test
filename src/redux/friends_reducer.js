import { auth, friendsApi } from '../api/api';

const SET_FRIENDS_SEARCH = 'FRIENDS/SET_FRIENDS_SEARCH';

let initialState = {
  friendsSearch: {},
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_EXAMPLE: {
    //   return { ...state, example: action.example}
    //   // return { ...state, example: [...state.example, action.example]}
    // }

    case SET_FRIENDS_SEARCH: {
      return { ...state, friendsSearch: action.friendsSearch };
    }
    default:
      return state;
  }
};
export const setFriendsSearch = (friendsSearch) => {
  return {
    type: SET_FRIENDS_SEARCH,
    friendsSearch,
  };
};
export const getFriendsSearch = (data) => async (dispath) => {
  const pop = [
    { id: '50', name: 'Алуер', surname: 'Добров', country: 'RU' },
    { id: '79', name: 'Алуер 2', surname: 'Добров 2', country: 'RU' },
  ];
  dispath(setFriendsSearch(pop));
  console.log(pop);
  let response = await friendsApi.friendsSearch(data);
  console.log(response);
  if (response.data.people) {
    // dispath(setFriendsSearch(response.data.pop));
    dispath(setFriendsSearch(response.data.pop));
    console.log(response.data.pop);
  } else {
  }
};
export const setAddFriend = (id) => async (dispath) => {
  let response = await friendsApi.addFriend(id);
  console.log(response);
};
export default friendsReducer;
