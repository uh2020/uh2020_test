import React from 'react';
import BlockUserIcon from '../icons/bar/BlockUserIcon';
import CommentIcon from '../icons/bar/CommentIcon';
import NewsIcon from '../icons/bar/NewIcon';
import PetsIcon from '../icons/bar/PetsIcon';
import RecommendationIcon from '../icons/bar/RecommendationIcon';
import SearchIcon from '../icons/bar/SearchIcon';
import TrendingIcon from '../icons/bar/TrendingIcon';
import UserFollowIcon from '../icons/bar/UserFollowIcon';
import UserFollowLIcon from '../icons/bar/UserFollowLIcon';
import UserPlusIcon from '../icons/bar/UserPlusIcon';
import UsersIconIcon from '../icons/bar/UsersIconIcon';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import MyIcon from '../icons/bar/MyIcon';
import AddIcon from '../icons/bar/AddIcon';
import MessageIcon from '../icons/bar/MessageIcon';
import UsersIcon from '../icons/bar/UsersIconIcon';
import QuizIcon from '../icons/bar/QuizIcon';
import EyeIcon from '../icons/bar/EyeIconIcon';
import GroupsIcon from '../icons/bar/GroupsIcon';
import OfficialIcon from '../icons/groups/OfficialIcon';
const SideBarGroups = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar bar__groups">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#608aa1',
          }}
        >
          Uhunt groups
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Управление'}
          new={''}
          all={'45'}
          Icon={MyIcon}
          to="/groups/manage"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Создать группу'}
          new={'4'}
          all={'45'}
          Icon={AddIcon}
          to="/groups/create"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Сообщения'}
          new={'4'}
          all={'45'}
          Icon={MessageIcon}
          to="/groups/message"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Мои группы'}
          new={'4'}
          all={'45'}
          Icon={GroupsIcon}
          to="/groups/my"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Официальные'}
          new={''}
          all={''}
          Icon={OfficialIcon}
          to="/groups/official"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные'}
          new={'4'}
          all={'45'}
          Icon={TrendingIcon}
          to="/groups/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новое'}
          new={'4'}
          all={'45'}
          Icon={NewsIcon}
          to="/groups/new"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Активность'}
          new={'4'}
          all={'45'}
          Icon={QuizIcon}
          to="/groups/activity"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Просмотренные'}
          new={''}
          all={''}
          Icon={EyeIcon}
          to="/groups/viewed"
        />
        {/* <SideBarItem
          location={props.location.pathname}
          title={'Подписки'}
          new={''}
          all={''}
          Icon={UserPlusIcon}
          to="/groups/subscriptions"
        /> */}
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомндации'}
          new={''}
          all={''}
          Icon={RecommendationIcon}
          to="/groups/recom"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Поиск'}
          new={''}
          all={''}
          Icon={SearchIcon}
          to="/groups/search"
        />
      </div>
    </div>
  );
};

const SideBarItem = (props) => {
  const groupsColor = '#608AA1';
  const active = props.location.includes(props.to) ? props.to : 0;
  return (
    <>
      <NavLink
        to={props.to}
        activeClassName={'bar__active'}
        className="bar__ln"
      >
        <div
          className={active === props.to ? '  bar__ln-active' : 'bar__ln-dis'}
          style={{
            backgroundColor: groupsColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={active === props.to ? groupsColor : 0} />
          </div>
          <div className="bar__ln-title">{props.title}</div>
        </div>
        <div className="bar__ln-info">
          <span className="bar__ln-info-new">{props.new}</span>
          <span className="bar__ln-info-ls">
            {props.new ? '/' : null}
            {props.all}
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default SideBarGroups;
