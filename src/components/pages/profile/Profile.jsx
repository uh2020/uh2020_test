import React from 'react';
import SideBarFriend from '../../sideBars/SideBarFriend';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { setFile } from '../../../redux/auth_reducer';
import { useDispatch } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { AmericanFlag } from '../../icons/flags/Flags';
import { Weather } from '../../icons/weather/Weather';
import FriendInfo from '../friend/friend_2_info/FriendInfo';
import SideBarProfile from '../../sideBars/SideBarProfile';
import ProfileMy from './profile_1_my/ProfileMy';
import ProfileNews from './profile_2_news/ProfileNews';
import './profile.scss';
import ProfileSettings from './profile_5_settings/ProfileSettings';
import ProfilePosts from './profile_9_posts/ProfilePosts';
import ProfileProducts from './profile_10_products//ProfileProducts';
import ProfileBusiness from './profile_11_business/ProfileBusiness';
import ProfileMyEdit from './profile_1_my/ProfileMyEdit';

const Profile = (props) => {
  const dispatch = useDispatch();
  debugger;
  const logo =
    props.location.pathname === '/profile' ||
    props.location.pathname === '/profile/edit';
  return (
    <div>
      {/* {props.location.pathname === '/profile' ? (
        <Redirect from="/profile" to="/profile" />
      ) : null} */}
      <div
        className="app__main"
        style={
          props.location.pathname === '/profile' ||
          props.location.pathname === '/profile/edit'
            ? { paddingTop: '72px' }
            : null
        }
      >
        {props.location.pathname === '/profile' ||
        props.location.pathname === '/profile/edit' ? (
          <div
            className="fr__fixed-img"
            style={{
              backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
            }}
          ></div>
        ) : null}
        <div className="fr__left-inner">
          {props.location.pathname === '/profile' ||
          props.location.pathname === '/profile/edit' ? (
            <>
              <Online />
              <LogoBig />
            </>
          ) : null}

          <SideBarProfile location={props.location} />
        </div>
        <div className="fr__right">
          {props.location.pathname === '/profile' ||
          props.location.pathname === '/profile/edit' ? (
            <div className="fr__right-top">
              <Location />
            </div>
          ) : null}

          <div className="app__main-right fr__right-bottom">
            <Switch>
              {/* <Route
              path="/profile/subscribers"
              render={() => <FriendsSubscribers location={props.location} />}
            /> */}
              <Route
                exact
                path="/profile"
                render={() => <ProfileMy location={props.location} />}
              />
              <Route
                exact
                path="/profile/edit"
                render={() => <ProfileMy location={props.location} />}
              />
              <Route
                exact
                path="/profile/messages"
                render={() => <>/profile/messages</>}
              />
              <Route path="/profile/news" render={() => <ProfileNews />} />
              <Route
                path="/profile/settings"
                render={() => <ProfileSettings />}
              />
              {/* <Route
                path="/profile/friends"
                render={() => <>/profile/friends</>}
              />
              <Route path="/profile/pets" render={() => <>/profile/pets</>} />
              <Route
                path="/profile/groups"
                render={() => <>/profile/groups</>}
              />
              <Route path="/profile/media" render={() => <>/profile/media</>} /> */}
              <Route
                path="/profile/posts"
                render={() => <ProfilePosts location={props.location} />}
              />
              <Route
                path="/profile/products"
                render={() => <ProfileProducts location={props.location} />}
              />
              <Route
                path="/profile/business"
                render={() => <ProfileBusiness location={props.location} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
const LogoBig = (props) => {
  return (
    <div className="fr__left-logo">
      <div
        className="fr__left-logo-img"
        style={{
          backgroundImage: `url("https://vsrap.ru/wp-content/uploads/2019/08/drake2.jpg")`,
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
const Online = () => {
  return (
    <div className="fr__left-online-inner">
      <div className="fr__left-online">
        <span>был в сети </span>
        <span>22.06.2020</span>
      </div>
    </div>
  );
};
const Location = () => {
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
const redProfile = WithAuthRedirect(Profile);
const WrapperdProfile = withRouter(redProfile);

export default WrapperdProfile;
