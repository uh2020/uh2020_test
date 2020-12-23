import React from 'react';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarSearch from '../../sideBars/SideBarSearch';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Search = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarSearch location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route path="/search/all" render={() => <h1>Все</h1>} />
            <Route path="/search/news" render={() => <h1>Новости</h1>} />
            <Route path="/search/people" render={() => <h1>Люди</h1>} />
            <Route path="/search/groups" render={() => <h1>Группы</h1>} />
            <Route path="/search/media" render={() => <h1>Медиа </h1>} />
            <Route path="/search/services" render={() => <h1>Услуги</h1>} />
            <Route path="/search/products" render={() => <h1>Товары</h1>} />
            <Route
              path="/search/library"
              render={() => <h1>Библиотека</h1>}
            />{' '}
            <Route
              path="/search/messages"
              render={() => <h1>Личные сообщения</h1>}
            />
            <Route path="/search/chats" render={() => <h1>Чаты</h1>} />
            <Route path="/search/forums" render={() => <h1>Форумы</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redSearch = WithAuthRedirect(Search);
const WrapperdSearch = withRouter(redSearch);

export default WrapperdSearch;
