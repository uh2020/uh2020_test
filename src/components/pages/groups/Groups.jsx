import React from 'react';
import './Groups.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import SideBarGroups from '../../sideBars/SideBarGroups';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import GroupsManage from './groups_1_manage/GroupsManage';
import AddBarIcon from '../../icons/groups/AddBarIcon';
import GroupsMy from './groups_4_my/GroupsMy';
import GroupsOfficial from './groups_5_official/GroupsOfficial';
import GroupsPopular from './groups_6_popular/GroupsPopular';
import GroupsNew from './groups_7_new/GroupsNew';
import GroupsViewed from './groups_9_viewed/GroupsViewed';
import GroupsRecommendations from './groups_10_recommendations/GroupsRecommendations';
import GroupsMessage from './groups_3_message/GroupsMessage';
import GroupsActivity from './groups_8_activity/GroupsActivity';

const Groups = (props) => {
  return (
    <div>
      {props.location.pathname === '/groups' ? (
        <Redirect from="/groups" to="/groups/manage" />
      ) : null}
      <div className="app__main">
        <div className="g__left">
          <SideBarGroups location={props.location} />
          <GroupsBottomBar />
          <div className="bar__about">
            <div className="bar__about-lns">
              <a href="#" className="bar__about-ln">
                О проекте
              </a>
              <a href="#" className="bar__about-ln">
                Сотрудничество
              </a>
              <br />
              <a href="#" className="bar__about-ln">
                Правовая информация
              </a>
              <a href="#" className="bar__about-ln">
                Защита данных
              </a>
              <a href="#" className="bar__about-ln">
                Написать в техподдержку
              </a>
            </div>
          </div>
        </div>

        <div className="app__main-right">
          <Switch>
            <Route
              path="/groups/manage"
              render={() => <GroupsManage location={props.location} />}
            />
            <Route
              path="/groups/create"
              render={() => <h1>Создать группу</h1>}
            />
            <Route path="/groups/message" render={() => <GroupsMessage />} />
            <Route
              path="/groups/my"
              render={() => <GroupsMy location={props.location} />}
            />
            <Route
              path="/groups/official"
              render={() => <GroupsOfficial location={props.location} />}
            />
            <Route path="/groups/popular" render={() => <GroupsPopular />} />
            <Route path="/groups/new" render={() => <GroupsNew />} />
            <Route path="/groups/activity" render={() => <GroupsActivity />} />
            <Route path="/groups/viewed" render={() => <GroupsViewed />} />
            <Route
              path="/groups/recommendations"
              render={() => <GroupsRecommendations />}
            />
            <Route path="/groups/search" render={() => <h1>Поиск</h1>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const GroupsBottomBar = () => {
  const items = [{}, {}, {}, {}];
  return (
    <div className="g__barB-inner">
      <div className="g__barB-title">интересные группы</div>
      <div className="g__barB-items">
        {items.map((i) => {
          return <GroupsBottomBarItem />;
        })}
      </div>
    </div>
  );
};
const GroupsBottomBarItem = () => {
  return (
    <div className="g__barB-item">
      <div className="g__barB-left">
        <div
          className="g__barB-img"
          style={{
            backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
          }}
        ></div>
        <div className="g__barB-texts">
          <p>Название группы</p>
          <span>
            <span>6784</span> участников
          </span>
        </div>
      </div>
      <div className="g__barB-plus ">
        <b>
          <span>Вступить</span>
        </b>
        <AddBarIcon />
      </div>
    </div>
  );
};

const redDGroups = WithAuthRedirect(Groups);
const WrapperdGroups = withRouter(redDGroups);

export default WrapperdGroups;
