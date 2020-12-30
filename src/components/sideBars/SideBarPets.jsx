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
import PlusIcon from '../icons/bar/PlusIcon';
import ListUserIcon from '../icons/bar/ListUserIcon';
import EyeIconIcon from '../icons/bar/EyeIconIcon';
const SideBarPets = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr"
          style={{
            backgroundColor: '#7c7474',
          }}
        >
          Menu Pets
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Мои питомцы'}
          new={''}
          all={'4'}
          Icon={PetsIcon}
          to="/pets/list"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Подписки'}
          new={''}
          all={''}
          Icon={UserPlusIcon}
          to="/pets/subscriptions"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Питомцы друзей'}
          new={''}
          all={''}
          Icon={UsersIconIcon}
          to="/pets/friend"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные питомцы'}
          new={''}
          all={''}
          Icon={EyeIconIcon}
          to="/pets/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомендации'}
          new={''}
          all={''}
          Icon={ListUserIcon}
          to="/pets/recom"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Добавить'}
          new={''}
          all={''}
          Icon={PlusIcon}
          to="/pets/add"
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
  const petsColor = '#7c7474';
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
            backgroundColor: petsColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={props.location === props.to ? petsColor : 0} />
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

export default SideBarPets;
