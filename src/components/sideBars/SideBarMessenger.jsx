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
import GroupsIcon from '../icons/bar/GroupsIcon';
import BusinessIcon from '../icons/bar/BusinessIcon';
import ChatsIcon from '../icons/bar/ChatsIcon';
import ForumsIcon from '../icons/bar/ForumsIcon';
import AnswerIcon from '../icons/bar/AnswerIcon';
import FavoritIcon from '../icons/bar/FavoritIcon';
const SideBarMessenger = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#5574b0',
          }}
        >
          Uhunt messages
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Личные сообщения'}
          new={'4'}
          all={'45'}
          Icon={UsersIconIcon}
          to="/messenger/private"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'От групп'}
          new={'4'}
          all={'45'}
          Icon={GroupsIcon}
          to="/messenger/groups"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Бизнес'}
          new={'4'}
          all={'45'}
          Icon={BusinessIcon}
          to="/messenger/business"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Чаты'}
          new={'4'}
          all={'45'}
          Icon={ChatsIcon}
          to="/messenger/chats"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Форумы + создать'}
          new={'4'}
          all={'45'}
          Icon={ForumsIcon}
          to="/messenger/forums"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Комментарии/ответы'}
          new={'4'}
          all={'45'}
          Icon={AnswerIcon}
          to="/messenger/comments"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новые'}
          new={'4'}
          all={'45'}
          Icon={NewIcon}
          to="/messenger/new"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные'}
          new={''}
          all={''}
          Icon={TrendingIcon}
          to="/messenger/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Избранное(Подписки)'}
          new={''}
          all={''}
          Icon={FavoritIcon}
          to="/messenger/favorites"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомндации'}
          new={''}
          all={''}
          Icon={RecommendationIcon}
          to="/messenger/recom"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Поиск'}
          new={''}
          all={''}
          Icon={SearchIcon}
          to="/messenger/search"
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
  const messangerColor = '#5574B0';
  return (
    <>
      <NavLink
        to={props.to}
        activeClassName={'bar__active'}
        className="bar__ln"
      >
        <div
          className={
            props.location === props.to ? '  bar__ln-active' : 'bar__ln-dis'
          }
          style={{
            backgroundColor: messangerColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon
              color={props.location === props.to ? messangerColor : 0}
            />
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

export default SideBarMessenger;
