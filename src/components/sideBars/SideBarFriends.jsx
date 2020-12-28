import React from 'react';
import BlockUserIcon from '../icons/bar/BlockUserIcon';
import CommentIcon from '../icons/bar/CommentIcon';
import NewIcon from '../icons/bar/NewIcon';
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
import FriendsPetsIcon from '../icons/friends/FriendsPetsIcon';
const SideBarFriends = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#669774',
          }}
        >
          Your friends
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Мои друзья'}
          new={'4'}
          all={'45'}
          Icon={UsersIconIcon}
          to="/friends/list"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Мои подписчики'}
          new={'4'}
          all={'45'}
          Icon={UserFollowIcon}
          to="/friends/subscribers"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Мои подписки'}
          new={'4'}
          all={'45'}
          Icon={UserFollowLIcon}
          to="/friends/subscriptions"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Сообщения'}
          new={'4'}
          all={'45'}
          Icon={CommentIcon}
          to="/friends/messages"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Животные'}
          new={'4'}
          all={'45'}
          Icon={FriendsPetsIcon}
          to="/friends/pets"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новые пользователи'}
          new={'4'}
          all={'45'}
          Icon={NewIcon}
          to="/friends/new"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные люди'}
          new={'4'}
          all={'45'}
          Icon={TrendingIcon}
          to="/friends/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомендации'}
          new={''}
          all={''}
          Icon={RecommendationIcon}
          to="/friends/recomm"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Черный список'}
          new={''}
          all={''}
          Icon={BlockUserIcon}
          to="/friends/blackList"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Пригласить друзей'}
          new={''}
          all={''}
          Icon={UserPlusIcon}
          to="/friends/invite"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Искать друзей'}
          new={''}
          all={''}
          Icon={SearchIcon}
          to="/friends/search"
        />
      </div>
      <div className="bar__about">
        <div className="bar__about-lns">
          <a href="#" className="bar__about-ln">
            О проекте
          </a>
          <a href="#" className="bar__about-ln">
            Сотрудничество
          </a>{' '}
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
  );
};

const SideBarItem = (props) => {
  const FriendsColor = '#669774';
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
            backgroundColor: FriendsColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={active === props.to ? FriendsColor : 0} />
          </div>
          <div className="bar__ln-title">{props.title}</div>
        </div>
        <div className="bar__ln-info">
          <span className="bar__ln-info-new">{props.new}</span>
          <span className="bar__ln-info-ls">
            {props.all ? '/' : null}
            {props.all}
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default SideBarFriends;
