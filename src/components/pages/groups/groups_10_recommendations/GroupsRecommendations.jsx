import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import FilterIcon from '../../../icons/friends/FilterIcon';
import './GroupsRecommendations.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import LockIcon from '../../../icons/groups/LockIcon';
import GroupUserIcon from '../../../icons/groups/GroupUserIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import GVerifiedIcon from '../../../icons/groups/GVerifiedIcon';
import GroupsTopMenuSF from '../groupsCommon/GroupsTopMenuSF';
import New from '../../../icons/bar/NewIcon';
import EyeIcon from '../../../icons/bar/EyeIconIcon';
import RecommendationIcon from '../../../icons/bar/RecommendationIcon';

const GroupsRecommendations = (props) => {
  const gColor = '#608AA1';
  const items = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="g__inner">
      <div className="g_manage g__page">
        <div className="g__container">
          <div className="friends-page g_new__header f_new__header f_new ">
            <GroupsTopMenuSF Icon={RecommendationIcon} text="Рекомндации" />
          </div>
          <>
            <div className="g__items-x g_Off__items">
              {items.map((i) => {
                return <GroupsRecommendationsItem />;
              })}
            </div>
            <div className="g_Off__bottom">
              <div class="f_list__more">
                <span>Показать еще</span>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
const GroupsRecommendationsItem = () => {
  return (
    <div className="g__item-group g_Off__item">
      <div className="g__item-group-left">
        <div
          className="g__item-group-img"
          style={{
            backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
          }}
        ></div>
        <div className="g__item-group-texts g_Off__item-text">
          <h4>
            <OfficialIcon width="24" height="24" /> <span>Имя Фамилия</span>
          </h4>
          <div className="g__item-group-users">
            <span className="g__item-group-lock">
              <GVerifiedIcon />
            </span>
            <span className="g__item-group-lock">
              <LockIcon />
            </span>
            <span className="g__item-group-count">
              <GroupUserIcon />
              <span>5678</span>
            </span>
          </div>
        </div>
      </div>
      <div className="g__item-group-right">
        <div className="g__btn-blue-line g__item-group-btn ">Вступить</div>
      </div>
    </div>
  );
};

export default GroupsRecommendations;
