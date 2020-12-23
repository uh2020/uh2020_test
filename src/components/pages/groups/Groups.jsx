import React from 'react';
import './Groups.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarGroups from '../../sideBars/SideBarGroups';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

const Groups = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarGroups location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route path="/groups/manage" render={() => <h1>Управление</h1>} />
            <Route
              path="/groups/create"
              render={() => <h1>Создать группу</h1>}
            />
            <Route path="/groups/message" render={() => <h1>Сообщения</h1>} />
            <Route path="/groups/my" render={() => <h1>Мои группы</h1>} />
            <Route path="/groups/popular" render={() => <h1>Популярные</h1>} />
            <Route path="/groups/new" render={() => <h1>Новое</h1>} />
            <Route
              path="/groups/activity"
              render={() => <h1>Мои активности</h1>}
            />
            <Route
              path="/groups/viewed"
              render={() => <h1>Просмотренные</h1>}
            />
            <Route
              path="/groups/subscriptions"
              render={() => <h1>Подписки</h1>}
            />{' '}
            <Route path="/groups/recom" render={() => <h1>Рекомндации</h1>} />
            <Route path="/groups/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDGroups = WithAuthRedirect(Groups);
const WrapperdGroups = withRouter(redDGroups);

export default WrapperdGroups;
