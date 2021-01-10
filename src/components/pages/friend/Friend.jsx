import React from 'react';
import './friend.scss';
import './friendNat.scss';
import SideBarFriend from '../../sideBars/SideBarFriend';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { setFile } from '../../../redux/auth_reducer';
import { useDispatch } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { AmericanFlag } from '../../icons/flags/Flags';
import { Weather } from '../../icons/weather/Weather';
import FriendInfo from './friend_2_info/FriendInfo';
import FriendWrite from './friend_3_write/FriendWrite';
import FriendFriends from './friend_4_friends/FriendFriends';
import FriendGroups from './friend_5_groups/FriendGroups';
import FriendMain from './friend_1_main/FriendMain';
import FriendMedia from './friend_6_media/FriendMedia';
import FriendPets from './friend_7_pets/FriendPets';
const Friend = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.location.pathname === '/id' ? (
        <Redirect from="/id" to="/id/main" />
      ) : null}
      <div
        className="app__main"
        style={
          props.location.pathname.includes('/id/main')
            ? { paddingTop: '71px' }
            : null
        }
      >
        {props.location.pathname.includes('/id/main') ? (
          <div
            className="fr__fixed-img"
            style={{
              backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
            }}
          ></div>
        ) : null}
        <div className="fr__left-inner">
          {props.location.pathname.includes('/id/main') ? (
            <FriendOnline />
          ) : null}
          <FriendLogoBig />
          <SideBarFriend location={props.location} />
        </div>
        <div className="fr__right">
          {props.location.pathname.includes('/id/main') ? (
            <div className="fr__right-top">
              <FriendLocation />
            </div>
          ) : null}

          <div className="app__main-right fr__right-bottom">
            <Switch>
              {/* <Route
              path="/id/subscribers"
              render={() => <FriendsSubscribers location={props.location} />}
            /> */}
              <Route path="/id/main" render={() => <FriendMain />} />
              <Route path="/id/info" render={() => <FriendInfo />} />
              <Route path="/id/write" render={() => <FriendWrite />} />
              <Route path="/id/friends" render={() => <FriendFriends />} />
              <Route path="/id/groups" render={() => <FriendGroups />} />
              <Route path="/id/media" render={() => <FriendMedia />} />
              <Route
                path="/id/pets"
                render={() => <FriendPets location={props.location} />}
              />
              <Route path="/id/posts" render={() => <>posts</>} />
              <Route path="/id/notification" render={() => <>notification</>} />
              <Route path="/id/business" render={() => <>business</>} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
const FriendLogoBig = (props) => {
  return (
    <div className="fr__left-logo">
      <div
        className="fr__left-logo-img"
        style={{
          backgroundImage: `url("https://manrule.ru/images/article/orig/2020/08/rybalka-v-nizhnem-novgorode-i-nizhegorodskoj-oblasti-1.jpg")`,
        }}
      ></div>
      <div className="fr__left-logo-texts">
        <p>Сергей Иванов, 65</p>
        <span>
          <span>Польша,</span>
          <span>Варшава</span>
        </span>
      </div>
    </div>
  );
};
const FriendOnline = () => {
  return (
    <div className="fr__left-online-inner">
      <div className="fr__left-online">
        <span>был в сети </span>
        <span>22.06.2020</span>
      </div>
    </div>
  );
};
const FriendLocation = () => {
  return (
    <div className="fr__right-loc">
      <div className="fr__right-loc-flag">
        <AmericanFlag />
      </div>
      <div className="fr__right-loc-weather">
        <Weather />
      </div>
      <div className="fr__right-loc-num">
        <p>+17</p>
        <span>C</span>
      </div>
      <div className="fr__right-loc-bottom">
        <div className="fr__right-loc-date">10.07.2020</div>
        <div className="fr__right-loc-loc">
          <span>Варшава,</span>
          <span>Польша</span>
        </div>
      </div>
    </div>
  );
};
const redDriend = WithAuthRedirect(Friend);
const WrapperdFriend = withRouter(redDriend);

export default WrapperdFriend;
