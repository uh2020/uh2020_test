import React from 'react';
import './Friends.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { setFile } from '../../../redux/auth_reducer';
import { useDispatch } from 'react-redux';
import FriendsList from './friendsList_1/FriendsList';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import FriendsInvite from './friendsInvite/FriendsInvite';
import FriendsPets from './friendsPets_5/FriendsPets';
import FriendsNew from './friendsNew_6/FriendsNew';
import FriendsRecom from './friendsRecom_8/FriendsRecom';
import FriendsPopular from './friendsPopular_7/FriendsPopular';
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
              exact
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
                  <FriendsList />
                </div>
              )}
            />
            <Route
              path="/friends/subscribers"
              render={() => <h1>Мои подписчики</h1>}
            />
            <Route
              path="/friends/subscriptions"
              render={() => <h1>Мои подписки</h1>}
            />
            <Route path="/friends/messages" render={() => <h1>Сообщения</h1>} />
            <Route path="/friends/pets" render={() => <FriendsPets />} />
            <Route path="/friends/new" render={() => <FriendsNew />} />
            <Route path="/friends/popular" render={() => <FriendsPopular />} />
            <Route path="/friends/recomm" render={() => <FriendsRecom />} />
            <Route
              path="/friends/blackList"
              render={() => <h1>Черный список</h1>}
            />
            <Route path="/friends/invite" render={() => <FriendsInvite />} />
            <Route
              path="/friends/search"
              render={() => <h1>Искать друзей</h1>}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDriends = WithAuthRedirect(Friends);
const WrapperdFriends = withRouter(redDriends);

export default WrapperdFriends;
