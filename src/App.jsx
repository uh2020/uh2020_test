import React from 'react';
import './scss/App.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import store from './redux/redux_store';
import Header from './components/header/Header';
import LogoStatic from './components/logoStatic/LogoStatic';
import SideBarFriends from './components/sideBars/SideBarFriends';
import Reg from './components/auth/Reg';
import Auth from './components/auth/Auth';
import Friends from './components/pages/friends/Friends';
import Pets from './components/pages/pets/Pets';
import Messenger from './components/pages/messenger/Messenger';
import Groups from './components/pages/groups/Groups';
import Media from './components/pages/media/Media';
import Booking from './components/pages/booking/Booking';
import Market from './components/pages/market/Market';
import Library from './components/pages/lirbrary/Library';
import Search from './components/pages/search/Search';
import Profile from './components/pages/profile/Profile';
import { auth, TestApi } from './api/api';
import { setAuthData } from './redux/auth_reducer';
import Friend from './components/pages/friend/Friend';
function App(props) {
  const [AuthHows, setAuth] = React.useState(false);
  const [Redirect, setRedirect] = React.useState(false);
  const regDone = useSelector((state) => state.auth.regDone);
  const checkAuth = () => {
    switch (props.location.pathname) {
      case '/auth':
        setAuth(true);
        break;
      case '/reg':
        setAuth(true);
        break;
      case '/friends':
        setAuth(false);
      case '/policy':
        setAuth(false);

        break;
    }
  };
  if (props.location.pathname === '/') {
    props.history.push('/friends');
  }
  // if (regDone) {
  //   // props.history.push('/friends');
  //   setRedirect(true);
  // } else {
  //   setRedirect(false);
  // }
  React.useEffect(() => {
    // checkAuth();
    console.log(props.location.pathname);
  }, [props.location.pathname]);
  React.useEffect(() => {
    // TestApi.testApi();
    // auth.sesId();
    // setAuthData();
  }, []);

  return (
    <div
      className="app__inner"
      // style={
      //   props.location.pathname.includes('/id/main')
      //     ? {
      //         transformStyle: 'preserve-3d',
      //       }
      //     : null
      // }
    >
      <div className="app__container">
        {AuthHows ? null : (
          <>
            <LogoStatic location={props.location.pathname} />
            <Header location={props.location.pathname} />
          </>
        )}

        <div
          style={
            props.location.pathname.includes('/id/main')
              ? null
              : { paddingTop: '87px' }
          }
        >
          <Switch>
            <Route path="/reg" render={() => <Reg />} />
            <Route path="/auth" render={() => <Auth />} />
            <Route path="/home" render={() => <Friends />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/id" render={() => <Friend />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/pets" render={() => <Pets />} />
            <Route path="/messenger" render={() => <Messenger />} />
            <Route path="/groups" render={() => <Groups />} />
            <Route path="/media" render={() => <Media />} />
            <Route path="/booking" render={() => <Booking />} />
            <Route path="/market" render={() => <Market />} />
            <Route path="/library" render={() => <Library />} />
            <Route path="/search" render={() => <Search />} />
            <Route exact path="*" render={() => <div>404 NOT FOUND </div>} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
let WrappedApp = withRouter(App);
const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
