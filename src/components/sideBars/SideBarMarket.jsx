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
const SideBarMarket = (props) => {
  const [Link, setLink] = React.useState(1);
  return (
    <div className="bar">
      <div className="bar__container">
        <div
          className="bar__fr "
          style={{
            backgroundColor: '#E6635B',
          }}
        >
          Uhunt market
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Мои предложения'}
          new={''}
          all={'44222'}
          Icon={MyIcon}
          to="/market/my"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Добавить'}
          new={''}
          all={'22'}
          Icon={AddIcon}
          to="/market/add"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Сообщения'}
          new={''}
          all={''}
          Icon={MessageIcon}
          to="/market/messages"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Новые товары'}
          new={''}
          all={''}
          Icon={NewIcon}
          to="/market/new"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Популярные'}
          new={''}
          all={''}
          Icon={TrendingIcon}
          to="/market/popular"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Избранное'}
          new={''}
          all={''}
          Icon={FavoritIcon}
          to="/market/favorite"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Отложенные'}
          new={''}
          all={''}
          Icon={ShoppingbagIcon}
          to="/market/aside"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Просмотренные'}
          new={''}
          all={''}
          Icon={EyeIcon}
          to="/market/viewed"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Подписки'}
          new={''}
          all={''}
          Icon={UserPlusIcon}
          to="/market/subscriptions"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Рекомендации'}
          new={''}
          all={''}
          Icon={RecommendationIcon}
          to="/market/recom"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Поиск'}
          new={''}
          all={''}
          Icon={SearchIcon}
          to="/market/search"
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
  const marketColor = '#E6635B';
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
            backgroundColor: marketColor,
          }}
        ></div>
        <div className="bar__ln-inner">
          <div className="bar__ln-img">
            <props.Icon color={props.location === props.to ? marketColor : 0} />
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

export default SideBarMarket;
