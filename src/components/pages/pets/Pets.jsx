import React from 'react';
import './Pets.scss';
import '../../../scss/App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarPets from '../../sideBars/SideBarPets';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
const Pets = (props) => {
  return (
    <div>
      <div className="app__main">
        <SideBarPets location={props.location} />
        <div className="app__main-right">
          <Switch>
            <Route
              exact
              path="/pets/list"
              render={() => (
                <div>
                  <h1>Мои питомцы</h1>
                </div>
              )}
            />
            <Route
              path="/pets/subscriptions"
              render={() => <h1>Подписки</h1>}
            />
            <Route path="/pets/friend" render={() => <h1>Питомцы друзей</h1>} />
            <Route
              path="/pets/popular"
              render={() => <h1>Популярные питомцы</h1>}
            />
            <Route path="/pets/recom" render={() => <h1>Рекомендации</h1>} />
            <Route path="/pets/add" render={() => <h1>Добавить</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const redPets = WithAuthRedirect(Pets);

const WrappedPets = withRouter(redPets);

export default WrappedPets;
