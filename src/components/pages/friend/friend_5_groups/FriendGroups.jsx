import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonBlueGroups,
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import GroupsItemSmall from '../../../commonElements/groups/GroupsItemSmall';
import {
  NonePageButtonOne,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';
import GroupsIcon from '../../../icons/bar/GroupsIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import FriendsHeaderMenu from '../../friends/friendsCommon/FriendsHeaderMenu';

const FriendGroups = () => {
  const items = [{}];
  const hide = false;
  return (
    <div className="friends-page">
      <FriendsHeaderMenu />
      <section className="main-container f-all-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <div className="f-info__header__item active">
              <div className="f-info__svg">
                <GroupsIcon />
              </div>
              <p className="f-info__title">группы</p>
              <span className="f-info__count">0</span>
            </div>
          </div>

          <div className="f-info__header-right">
            <div className="f_list__header-sort">
              <div className="f_list__header-sort-item">
                <FilterIcon />
              </div>
              <div className="f_list__header-sort-item">
                <FSortIcon />
              </div>
            </div>
          </div>
        </div>

        {hide ? (
          <NonePageButtonTwo
            button={ButtonGreen}
            buttonText="Добавить в друзья"
            UpperText="Группы скрыты"
            UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
          />
        ) : (
          <>
            {!items.length ? (
              <NonePageButtonOne
                button={ButtonBlueGroups}
                buttonText="Рекомендовать группы"
                UpperText="Сергей не состоит ни в одной группе"
              />
            ) : (
              <FriendGroupsInit />
            )}
          </>
        )}
      </section>
    </div>
  );
};

const FriendGroupsNone = () => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">
        Сергей не состоит ни в одной группе
      </p>
      <span>
        <ButtonBlueGroups text="Рекомендовать группы" />
      </span>
    </div>
  );
};

const FriendGroupsInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="g_Off__items">
        {items.map((i) => (
          <GroupsItemSmall />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export default FriendGroups;
