import React from 'react';
import PetsIcon from '../icons/bar/PetsIcon';
import UsersIconIcon from '../icons/bar/UsersIconIcon';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import MyIcon from '../icons/bar/MyIcon';
import MessageIcon from '../icons/bar/MessageIcon';
import GroupsIcon from '../icons/bar/GroupsIcon';
import MediaIcon from '../icons/bar/MediaIcon';
import NoteBookIcon from '../icons/bar/NoteBookIcon';
import BusinessIcon from '../icons/bar/BusinessIcon';
import PricetagIcon from '../icons/bar/PricetagIcon';
import NewsIcon from '../icons/bar/NewsIcon';
import SettingsIcon from '../icons/bar/SettingsIcon';
const SideBarProfile = (props) => {
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
          Uhunt passport
        </div>
        <SideBarItem
          exact={true}
          location={props.location.pathname}
          title={'Моя страница'}
          new={''}
          all={''}
          Icon={MyIcon}
          to="/profile"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Сообщения'}
          new={''}
          all={''}
          Icon={MessageIcon}
          to="/profile/messages"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новости'}
          new={''}
          all={''}
          Icon={NewsIcon}
          to="/profile/news"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Настройки'}
          new={''}
          all={''}
          Icon={SettingsIcon}
          to="/profile/settings"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Друзья'}
          new={'4'}
          all={'45'}
          Icon={UsersIconIcon}
          to="/profile/friends"
        />

        <SideBarItem
          location={props.location.pathname}
          title={'Животные'}
          new={'4'}
          all={'45'}
          Icon={PetsIcon}
          to="/profile/pets"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Группы'}
          new={'4'}
          all={'45'}
          Icon={GroupsIcon}
          to="/profile/groups"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Медиа'}
          new={'4'}
          all={'45'}
          Icon={MediaIcon}
          to="/profile/media"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Публикации'}
          new={''}
          all={'0'}
          Icon={NoteBookIcon}
          to="/profile/posts"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Объявления'}
          new={''}
          all={''}
          Icon={PricetagIcon}
          to="/profile/products"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Бизнес'}
          new={''}
          all={''}
          Icon={BusinessIcon}
          to="/profile/business"
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
  const ProfileColor = '#7C7474';
  const active = props.location.includes(props.to) ? props.to : 0;
  return (
    <>
      <NavLink
        // exact={props.exact ? true : false}
        exact
        to={props.to}
        activeClassName={'bar__active'}
        className="bar__ln"
      >
        <div
          className={active === props.to ? '  bar__ln-active' : 'bar__ln-dis'}
          style={{
            backgroundColor: ProfileColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={active === props.to ? ProfileColor : 0} />
          </div>
          <div className="bar__ln-title">{props.title}</div>
        </div>
        <div className="bar__ln-info">
          {/* <span className="bar__ln-info-new">{props.new}</span> */}
          <span className="bar__ln-info-ls">
            {/* {props.new ? '/' : null} */}
            {props.all}
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default SideBarProfile;
