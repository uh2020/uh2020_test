import React from 'react';
import './Groups.scss';
import '../../../scss/App.scss';
import SideBarFriends from '../../sideBars/SideBarFriends';
import { Route, Switch, withRouter } from 'react-router-dom';
import SideBarGroups from '../../sideBars/SideBarGroups';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import GroupsManage from './groups_1_manage/GroupsManage';
import AddBarIcon from '../../icons/groups/AddBarIcon';

const Groups = (props) => {
  return (
    <div>
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
            <Route path="/groups/message" render={() => <h1>Сообщения</h1>} />
            <Route path="/groups/my" render={() => <h1>Мои группы</h1>} />
            <Route
              path="/groups/official"
              render={() => <h1>Официальные</h1>}
            />
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
            <Route path="/groups/recom" render={() => <h1>Рекомндации</h1>} />
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
