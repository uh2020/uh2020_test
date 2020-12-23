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
import QuizIcon from '../icons/bar/QuizIcon';
import NewIcon from '../icons/bar/NewIcon';
import FavoritIcon from '../icons/bar/FavoritIcon';
import AppraisalIcon from '../icons/bar/AppraisalIcon';
import EyeIcon from '../icons/bar/EyeIconIcon';
import MessageIcon from '../icons/bar/MessageIcon';
import ShoppingbagIcon from '../icons/bar/ShoppingbagIcon';
const SideBarLibrary = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#B38D75',
          }}
        >
          Uhunt library
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Мои публикации'}
          new={''}
          all={'56'}
          Icon={MyIcon}
          to="/library/my"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Добавить'}
          new={''}
          all={'22'}
          Icon={AddIcon}
          to="/library/add"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Комментарии'}
          new={''}
          all={''}
          Icon={MessageIcon}
          to="/library/comments"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новые публикации'}
          new={''}
          all={''}
          Icon={NewIcon}
          to="/library/new"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные'}
          new={''}
          all={''}
          Icon={TrendingIcon}
          to="/library/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Избранное'}
          new={''}
          all={''}
          Icon={FavoritIcon}
          to="/library/favorite"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Отложенные'}
          new={''}
          all={''}
          Icon={ShoppingbagIcon}
          to="/library/aside"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Просмотренные'}
          new={''}
          all={''}
          Icon={EyeIcon}
          to="/library/viewed"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Подписки'}
          new={''}
          all={''}
          Icon={UserPlusIcon}
          to="/library/subscriptions"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомендации'}
          new={''}
          all={''}
          Icon={RecommendationIcon}
          to="/library/recom"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Поиск'}
          new={''}
          all={''}
          Icon={SearchIcon}
          to="/library/search"
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
  const libraryColor = '#B38D75';
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
            backgroundColor: libraryColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon
              color={props.location === props.to ? libraryColor : 0}
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

export default SideBarLibrary;
