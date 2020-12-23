import React from 'react';

import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../icons/bar/SearchIcon';
import NewsIcon from '../icons/bar/NewsIcon';
import UsersIcon from '../icons/bar/UsersIconIcon';
import GroupsIcon from '../icons/bar/GroupsIcon';
import MediaIcon from '../icons/bar/MediaIcon';
import BookingIcon from '../icons/bar/BookingIcon';
import ShoppingbagIcon from '../icons/bar/ShoppingbagIcon';
import NoteBookIcon from '../icons/bar/NoteBookIcon';
import CommentIcon from '../icons/bar/CommentIcon';
import ChatsIcon from '../icons/bar/ChatsIcon';
import ForumsIcon from '../icons/bar/ForumsIcon';
import SideBarLinks from './SideBarLinks';
const SideBarSearch = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#7C7474',
          }}
        >
          Uhunt search
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Все'}
          new={''}
          all={'56'}
          Icon={SearchIcon}
          to="/search/all"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новости'}
          new={''}
          all={'22'}
          Icon={NewsIcon}
          to="/search/news"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Люди'}
          new={''}
          all={''}
          Icon={UsersIcon}
          to="/search/people"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Группы'}
          new={''}
          all={''}
          Icon={GroupsIcon}
          to="/search/groups"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Медиа'}
          new={''}
          all={''}
          Icon={MediaIcon}
          to="/search/media"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Услуги'}
          new={''}
          all={''}
          Icon={BookingIcon}
          to="/search/services"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Товары'}
          new={''}
          all={''}
          Icon={ShoppingbagIcon}
          to="/search/products"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Библиотека'}
          new={''}
          all={''}
          Icon={NoteBookIcon}
          to="/search/library"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Личные сообщения'}
          new={''}
          all={''}
          Icon={CommentIcon}
          to="/search/messages"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Чаты'}
          new={''}
          all={''}
          Icon={ChatsIcon}
          to="/search/chats"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Форумы'}
          new={''}
          all={''}
          Icon={ForumsIcon}
          to="/search/forums"
        />
      </div>
      <SideBarLinks />
    </div>
  );
};

const SideBarItem = (props) => {
  const searchColor = '#7C7474';
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
            backgroundColor: searchColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={props.location === props.to ? searchColor : 0} />
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

export default SideBarSearch;
