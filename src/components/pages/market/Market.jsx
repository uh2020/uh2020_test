import React from 'react';
import './Market.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarMarket from '../../sideBars/SideBarMarket';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Market = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarMarket location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route path="/market/my" render={() => <h1>Мои предложения</h1>} />
            <Route path="/market/add" render={() => <h1>Добавить</h1>} />
            <Route path="/market/activity" render={() => <h1>Активность</h1>} />
            <Route path="/market/messages" render={() => <h1>Сообщения</h1>} />
            <Route path="/market/new" render={() => <h1>Новое </h1>} />
            <Route path="/market/popular" render={() => <h1>Популярное</h1>} />
            <Route path="/market/favorite" render={() => <h1>Избранное</h1>} />
            <Route
              path="/market/booked"
              render={() => <h1>Мои бронирования</h1>}
            />{' '}
            <Route
              path="/market/viewed"
              render={() => <h1>Просмотренные</h1>}
            />
            <Route
              path="/market/subscriptions"
              render={() => <h1>Рекомендации</h1>}
            />
            <Route path="/market/recom" render={() => <h1>Рекомендации</h1>} />
            <Route path="/market/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const redDMarket = WithAuthRedirect(Market);

const WrapperdMarket = withRouter(redDMarket);
export default WrapperdMarket;
