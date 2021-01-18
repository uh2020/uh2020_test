import React from 'react';
import './Friends.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { setFile } from '../../../redux/auth_reducer';
import { useDispatch } from 'react-redux';
import FriendsList from './friends_1_List/FriendsList';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import FriendsInvite from './friends_10_Invite/FriendsInvite';
import FriendsPets from './friends_5_Pets/FriendsPets';
import FriendsNew from './friends_6_New/FriendsNew';
import FriendsRecom from './friends_8_Recom/FriendsRecom';
import FriendsPopular from './friends_7_Popular/FriendsPopular';
import FriendsSearch from './friends_11_Search/FriendsSearch';
import FriendsBlackList from './friends_9_BlackList/FriendsBlackList';
import FriendsSubscribers from './friends_2_subscribers/FriendsSubscribers';
import FriendsSubscriptions from './friends_3_subscriptions/FriendsSubscriptions';
const Friends = (props) => {
  const dispatch = useDispatch();
  const MainPhotoSelected = (e) => {
    if (e.target.files.length) {
      dispatch(setFile(e.target.files[0]));
    }
  };
  return (
    <div>
      {props.location.pathname === '/friends' ? (
        <Redirect from="/friends" to="/friends/list" />
      ) : null}
      <div className="app__main">
        <SideBarFriends location={props.location} />
        <div className="app__main-right friends-page">
          <Switch>
            <Route
              path="/friends/list"
              render={() => (
                <div>
                  {/* <h1 className="friends__title">Мои друзья</h1>
                  <input
                    onChange={MainPhotoSelected}
                    name="file"
                    type="file"
                    multiple
                  /> */}
                  <FriendsList location={props.location} />
                </div>
              )}
            />
            <Route
              path="/friends/subscribers"
              render={() => <FriendsSubscribers location={props.location} />}
            />
            <Route
              path="/friends/subscriptions"
              render={() => <FriendsSubscriptions location={props.location} />}
            />
            <Route path="/friends/messages" render={() => <h1>Сообщения</h1>} />
            <Route path="/friends/pets" render={() => <FriendsPets />} />
            <Route path="/friends/new" render={() => <FriendsNew />} />
            <Route path="/friends/popular" render={() => <FriendsPopular />} />
            <Route
              path="/friends/recommendations"
              render={() => <FriendsRecom />}
            />
            <Route
              path="/friends/blackList"
              render={() => <FriendsBlackList />}
            />
            <Route path="/friends/invite" render={() => <FriendsInvite />} />
            <Route path="/friends/search" render={() => <FriendsSearch />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDriends = WithAuthRedirect(Friends);
const WrapperdFriends = withRouter(redDriends);

export default WrapperdFriends;
