import React from 'react';
import './Messenger.scss';
import '../../../scss/App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarMessenger from '../../sideBars/SideBarMessenger';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Messenger = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarMessenger location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route
              path="/messenger/private"
              render={() => <h1>Личные сообщения</h1>}
            />
            <Route path="/messenger/groups" render={() => <h1>От групп</h1>} />
            <Route path="/messenger/business" render={() => <h1>Бизнес</h1>} />
            <Route path="/messenger/chats" render={() => <h1>Чаты</h1>} />
            <Route
              path="/messenger/forums"
              render={() => <h1>Форумы + создать</h1>}
            />
            <Route
              path="/messenger/comments"
              render={() => <h1>Комментарии/ответы</h1>}
            />
            <Route path="/messenger/new" render={() => <h1>Новые</h1>} />
            <Route
              path="/messenger/popular"
              render={() => <h1>Популярные</h1>}
            />
            <Route
              path="/messenger/favorites"
              render={() => <h1>Избранное(Подписки)</h1>}
            />
            <Route
              path="/messenger/recom"
              render={() => <h1>Рекомндации</h1>}
            />
            <Route path="/messenger/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDMessenger = WithAuthRedirect(Messenger);

const WrappedMessenger = withRouter(redDMessenger);

export default WrappedMessenger;
