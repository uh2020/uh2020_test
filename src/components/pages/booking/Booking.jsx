import React from 'react';
import './Booking.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarBooking from '../../sideBars/SideBarBooking';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Booking = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarBooking location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route path="/booking/my" render={() => <h1>Мои предложения</h1>} />
            <Route path="/booking/add" render={() => <h1>Добавить</h1>} />
            <Route
              path="/booking/activity"
              render={() => <h1>Активность</h1>}
            />
            <Route path="/booking/messages" render={() => <h1>Сообщения</h1>} />
            <Route path="/booking/new" render={() => <h1>Новое </h1>} />
            <Route path="/booking/popular" render={() => <h1>Популярное</h1>} />
            <Route path="/booking/favorite" render={() => <h1>Избранное</h1>} />
            <Route
              path="/booking/booked"
              render={() => <h1>Мои бронирования</h1>}
            />{' '}
            <Route
              path="/booking/viewed"
              render={() => <h1>Просмотренные</h1>}
            />
            <Route
              path="/booking/subscriptions"
              render={() => <h1>Рекомендации</h1>}
            />
            <Route path="/booking/recom" render={() => <h1>Рекомендации</h1>} />
            <Route path="/booking/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
const redDBooking = WithAuthRedirect(Booking);
const WrapperdBooking = withRouter(redDBooking);

export default WrapperdBooking;
