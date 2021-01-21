import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonBrown,
  ButtonBrownLine,
  ButtonCasual,
  ButtonCasualFilled,
} from '../../../commonElements/buttons/Buttons';
import FriendItemSmall from '../../../commonElements/friends/FriendItemSmall';
import GroupsItemSmall from '../../../commonElements/groups/GroupsItemSmall';
import AddIcon from '../../../icons/bar/AddIcon';
import GroupsIcon from '../../../icons/bar/GroupsIcon';
import MyIcon from '../../../icons/bar/MyIcon';
import NewsIcon from '../../../icons/bar/NewsIcon';
import Search from '../../../icons/bar/SearchIcon';
import UsersIcon from '../../../icons/bar/UsersIconIcon';
import AllNewsIconBig from '../../../icons/friend/AllnewsIconBig';
import { FriendMainPageArticle } from '../../friend/friend_1_main/FriendMain';

const ProfileNews = () => {
  const hide = false;
  return (
    <>
      <ProfileNewsTopAdd />
      <div className="pr__news-header-inn">
        <div className="pr__news-header">
          <div className="f-info__header-left">
            <div className="fr__media-ln-inn">
              <NavLink
                exact
                to="/profile/news"
                activeClassName=" active"
                className={'f-info__header__item'}
              >
                <div className="f-info__svg">
                  <NewsIcon />
                </div>
                <p className="f-info__title">новости</p>
                <span className="f-info__count"></span>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: `#7C7474` }}
                ></span>
              </NavLink>
            </div>
            <NavLink
              exact
              to="/profile/news/my"
              activeClassName="active"
              className={'f-info__header__item'}
            >
              <div className="f-info__svg">
                <MyIcon />
              </div>
              <p className="f-info__title">мои записи</p>
              <span className="f-info__count">2</span>
              <span
                className="f-info__line "
                style={{ backgroundColor: `#7C7474` }}
              ></span>
            </NavLink>
          </div>

          <div className="f-info__header-right">
            <div className="pr__news-search">
              <Search width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
      {hide ? (
        <FriendMainNone />
      ) : (
        <Switch>
          <Route
            exact
            path="/profile/news"
            render={() => <ProfileNewsMain />}
          />
          <Route
            // exact
            path="/profile/news/my"
            render={() => <ProfileNewsMy />}
          />
        </Switch>
      )}
      {hide ? null : (
        <>
          {/* <div className="pr__news">
            <ProfileNewsFriends />
          </div>
          <div className="pr__news">
            <ProfileNewsGroups />
          </div> */}
        </>
      )}
    </>
  );
};

const ProfileNewsMain = () => {
  return (
    <>
      <div className="pr__news">
        <FriendMainPageArticle />
      </div>
      <>
        <div className="pr__news">
          <ProfileNewsFriends />
        </div>
        <div className="pr__news">
          <ProfileNewsGroups />
        </div>
      </>
    </>
  );
};
const ProfileNewsMy = () => {
  const hide = true;
  return (
    <>
      {hide ? (
        <FriendMainNone />
      ) : (
        <>
          <div className="pr__news">
            <FriendMainPageArticle />
          </div>
          <>
            <div className="pr__news">
              <ProfileNewsFriends />
            </div>
            <div className="pr__news">
              <ProfileNewsGroups />
            </div>
          </>
        </>
      )}
    </>
  );
};
const ProfileNewsTopAdd = () => {
  return (
    <div className="fr__top-bar">
      <div className="fr__top-bar-left">
        <div
          className="fr__top-bar-img"
          style={{
            backgroundImage: `url("https://i.pinimg.com/736x/2f/03/f8/2f03f8cae2989c91c13b19b91ad94f8a.jpg")`,
          }}
        ></div>
        {/* <div className="fr__top-bar-text">Написать в новостях Сергея</div> */}
        <input placeholder="Поделитесь новостью" className="fr__top-bar-text" />
      </div>
      <div className="fr__top-bar-right">
        <div className="fr__poi">
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

const ProfileNewsFriends = () => {
  const items = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="main-container f-info">
      <div className="f-info__header">
        <div className="f-info__header-left">
          <div className="fr__media-ln-inn">
            <div className="f-info__header-left">
              <div className="f-info__svg">
                <UsersIcon />
              </div>
              <p className="f-info__title">наши рекомендации</p>
            </div>
          </div>
        </div>
        <div className="f-info__header-right">
          <ButtonCasualFilled text="Скрыть" />
        </div>
      </div>
      <div className="f_new__items">
        {items.map((i) => {
          return (
            <FriendItemSmall
              button={ButtonBrownLine}
              buttonText="Подписаться"
            />
          );
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </section>
  );
};

const ProfileNewsGroups = () => {
  const items = [{}, {}, {}, {}, {}, {}];
  return (
    <section className="main-container f-info">
      <div className="f-info__header">
        <div className="f-info__header-left">
          <div className="fr__media-ln-inn">
            <div className="f-info__header-left">
              <div className="f-info__svg">
                <GroupsIcon />
              </div>
              <p className="f-info__title">интересные группы</p>
            </div>
          </div>
        </div>
        <div className="f-info__header-right">
          <ButtonCasualFilled text="Скрыть" />
        </div>
      </div>
      <div className=" g_Off__items">
        {items.map((i) => {
          return <GroupsItemSmall />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </section>
  );
};

const FriendMainNone = () => {
  return (
    <div className="main-container">
      <div className="f-all-info__main">
        <AllNewsIconBig />
        <p className="fr__none-title">На вашей стене пока нет записей.</p>
        <ButtonBrown text="Добавить" />
      </div>
    </div>
  );
};

export default ProfileNews;
