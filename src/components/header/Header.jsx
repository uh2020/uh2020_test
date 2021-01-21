import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsIcon from '../icons/header/FriendsIcon';
import GroupsIcon from '../icons/header/GroupsIcon';
import LibraryIcon from '../icons/header/LibraryIcon';
import MarketIcon from '../icons/header/MarketIcon';
import MediaIcon from '../icons/header/MediaIcon';
import MessageIcon from '../icons/header/MessageIcon';
import PetsIcons from '../icons/header/PetsIcons';
import PLacesIcon from '../icons/header/PlacesIcon';
import SearchIcon from '../icons/header/SearchIcon';
import './header.scss';
const Header = (props) => {
  const [Active, setActive] = React.useState(1);
  const HomeColor = '#7c7474';
  const FriendsColor = '#669774';
  const MessageColor = '#5574b0';
  const GroupsColor = '#608aa1';
  const MediaColor = '#e5925b';
  const PlacesColor = '#d89342';
  const MarketColor = '#e5635b';
  const LibraryColor = '#b28d75';
  const SearchColor = '#fff';

  const transparent =
    props.location.includes('/id/main') ||
    props.location === '/profile' ||
    props.location.includes('/profile/edit');
  return (
    <div className="header__inner" style={{ position: 'fixed' }}>
      <header
        className="header"
        style={transparent ? null : { background: '#3f4548' }}
      >
        <div className="header__container">
          <div className="header__logo-inner">
            <h1 className="header__title">Uhunt</h1>
            <NavLink
              to="/profile"
              className="header__logo"
              style={
                props.location.includes('/profile')
                  ? { opacity: 0, pointerEvents: 'none' }
                  : {
                      backgroundImage: `url(${'https://vsrap.ru/wp-content/uploads/2019/08/drake2.jpg'})`,
                    }
              }
            ></NavLink>
          </div>
          <nav className="header__items">
            <HeaderItem
              to="/friends"
              Count={2}
              Active={Active}
              setActive={setActive}
              Icon={FriendsIcon}
              text="Друзья"
            />
            <HeaderItem
              to="/pets"
              Count={1}
              Active={Active}
              setActive={setActive}
              Icon={PetsIcons}
              text="Животные"
            />
            <HeaderItem
              to="/messenger"
              Count={3}
              Active={Active}
              setActive={setActive}
              Icon={MessageIcon}
              text="Сообщения"
            />
            <HeaderItem
              to="/groups"
              Count={4}
              Active={Active}
              setActive={setActive}
              Icon={GroupsIcon}
              text="Группы"
            />
            <HeaderItem
              to="/media"
              Count={5}
              Active={Active}
              setActive={setActive}
              Icon={MediaIcon}
              text="Медиа"
            />
            <HeaderItem
              to="/booking"
              Count={6}
              Active={Active}
              setActive={setActive}
              Icon={PLacesIcon}
              text="Места"
            />
            <HeaderItem
              to="/market"
              Count={7}
              Active={Active}
              setActive={setActive}
              Icon={MarketIcon}
              text="Маркет"
            />
            <HeaderItem
              to="/library"
              Count={8}
              Active={Active}
              setActive={setActive}
              Icon={LibraryIcon}
              text="Библиотека"
            />
            {/* <HeaderItem
              to="/search"
              Count={9}
              Active={Active}
              setActive={setActive}
              Icon={SearchIcon}
            /> */}
            <NavLink
              className={'header__item' + ' ' + 'header__item-' + '9'}
              activeClassName={'header__active'}
              to="/search"
            >
              <div
                className="header__item-ln"
                onClick={() => {
                  setActive(9);
                }}
              ></div>
              <div className="header__item-img">
                {/* <img src="img/header/library.svg" alt="" /> */}
                <SearchIcon color={Active === 9 ? '#3F4548' : 0} />
              </div>
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

const HeaderItem = (props) => {
  return (
    <NavLink
      className={'header__item' + ' ' + 'header__item-' + props.Count}
      activeClassName={'header__active'}
      to={props.to}
      onClick={() => {
        props.setActive(+props.Count);
      }}
    >
      {/* <div
        className="header__item-ln"
        onClick={() => {
          props.setActive(+props.Count);
        }}
      ></div> */}
      <div className="header__item-img">
        <props.Icon />
      </div>
      {props.text ? (
        <div className="header__item-title">
          <span>{props.text}</span>
        </div>
      ) : null}
    </NavLink>
  );
};

export default Header;
