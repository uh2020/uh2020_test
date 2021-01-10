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
import InfoIcon from '../icons/friend/InfoIcon';
import MyIcon from '../icons/bar/MyIcon';
import MessageIcon from '../icons/bar/MessageIcon';
import GroupsIcon from '../icons/bar/GroupsIcon';
import MediaIcon from '../icons/bar/MediaIcon';
import NoteBookIcon from '../icons/bar/NoteBookIcon';
import BusinessIcon from '../icons/bar/BusinessIcon';
import PricetagIcon from '../icons/bar/PricetagIcon';
import { ButtonGreenPlusFilled } from '../commonElements/buttons/Buttons';
import DownIcon from '../icons/friends/DownIcon';
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
          Uhunt friend
        </div>
        <SideBarItem
          location={props.location.pathname}
          title={'Главная'}
          new={'4'}
          all={'45'}
          Icon={MyIcon}
          to="/id/main"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Информация'}
          new={'4'}
          all={'45'}
          Icon={InfoIcon}
          to="/id/info"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Написать'}
          new={'4'}
          all={'45'}
          Icon={MessageIcon}
          to="/id/write"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Друзья и подписки'}
          new={'4'}
          all={'45'}
          Icon={UsersIconIcon}
          to="/id/friends"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Группы'}
          new={'4'}
          all={'45'}
          Icon={GroupsIcon}
          to="/id/groups"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Медиа'}
          new={'4'}
          all={'45'}
          Icon={MediaIcon}
          to="/id/media"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Животные'}
          new={'4'}
          all={'45'}
          Icon={PetsIcon}
          to="/id/pets"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Публикации'}
          new={''}
          all={'0'}
          Icon={NoteBookIcon}
          to="/id/posts"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Объявления'}
          new={''}
          all={''}
          Icon={PricetagIcon}
          to="/id/notification"
        />
        <SideBarItem
          location={props.location.pathname}
          title={'Бизнес'}
          new={''}
          all={''}
          Icon={BusinessIcon}
          to="/id/business"
        />
        <FriendBarBottom />
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

const FriendBarBottom = () => {
  return (
    <div className="fr__bar-bottom">
      <ButtonGreenPlusFilled text="Одобрить заявку" mr="1" />
      <div className="fr__bar-bottom-el">
        <DownIcon />
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

export default SideBarFriends;
