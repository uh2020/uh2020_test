import React from 'react';
import './Library.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarLibrary from '../../sideBars/SideBarLibrary';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

const Library = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarLibrary location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route path="/library/my" render={() => <h1>Мои предложения</h1>} />
            <Route path="/library/add" render={() => <h1>Добавить</h1>} />
            <Route
              path="/library/comments"
              render={() => <h1>Комментарии</h1>}
            />
            <Route path="/library/messages" render={() => <h1>Сообщения</h1>} />
            <Route path="/library/new" render={() => <h1>Новое </h1>} />
            <Route path="/library/popular" render={() => <h1>Популярное</h1>} />
            <Route path="/library/favorite" render={() => <h1>Избранное</h1>} />
            <Route
              path="/library/aside"
              render={() => <h1>Отложенные</h1>}
            />{' '}
            <Route
              path="/library/viewed"
              render={() => <h1>Просмотренные</h1>}
            />
            <Route
              path="/library/subscriptions"
              render={() => <h1>Рекомендации</h1>}
            />
            <Route path="/library/recom" render={() => <h1>Рекомендации</h1>} />
            <Route path="/library/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDLibrary = WithAuthRedirect(Library);
const WrapperdLibrary = withRouter(redDLibrary);

export default WrapperdLibrary;
