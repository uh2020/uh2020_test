import React from 'react';
import './Media.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarMedia from '../../sideBars/SideBarMedia';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Media = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarMedia location={props.location} />
        <div className="app__main-right">
          {' '}
          <Switch>
            <Route path="/media/my" render={() => <h1>Моя медиатека</h1>} />
            <Route path="/media/add" render={() => <h1>Добавить</h1>} />
            <Route path="/media/activity" render={() => <h1>Активность</h1>} />
            <Route path="/media/new" render={() => <h1>Новые</h1>} />
            <Route path="/media/popular" render={() => <h1>Популярные</h1>} />
            <Route path="/media/favorite" render={() => <h1>Избранное</h1>} />
            <Route path="/media/liked" render={() => <h1>Мои лайки</h1>} />
            <Route
              path="/media/viewed"
              render={() => <h1>Просмотренные</h1>}
            />{' '}
            <Route
              path="/media/subscriptions"
              render={() => <h1>Подписки</h1>}
            />
            <Route path="/media/recom" render={() => <h1>Рекомендации</h1>} />
            <Route path="/media/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const redDMedia = WithAuthRedirect(Media);

let WrapperdMedia = withRouter(redDMedia);

export default WrapperdMedia;
