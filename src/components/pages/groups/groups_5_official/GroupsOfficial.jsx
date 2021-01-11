import React from 'react';
import FilterIcon from '../../../icons/friends/FilterIcon';
import './GroupsOfficial.scss';
import FSortIcon from '../../../icons/friends/FSortIcon';
import OfficialIcon from '../../../icons/groups/OfficialIcon';
import GroupsHeaderMenu from '../groupsCommon/GroupsHeaderMenu';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import GroupsItemSmall from '../../../commonElements/groups/GroupsItemSmall';

const GroupsOfficial = (props) => {
  const gColor = '#608AA1';
  const items = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="g__inner">
      <div className="friends-page">
        <GroupsHeaderMenu />
      </div>

      <div className="g_manage g__page">
        <div className="g__container">
          <div className="g_manage__header">
            <div className="f_pets__header-left  f_list__header-left f_list__header-left-active">
              <OfficialIcon />
              <p>
                Официальные группы <span>54</span>
              </p>
            </div>

            <div className="f_list__header-right">
              <div className="g_manage__btn-add g__btn-blue">
                Верифицировать сообщество
              </div>

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
          <>
            <div className="g__items-x g_Off__items">
              {items.map((i) => {
                return <GroupsItemSmall />;
              })}
            </div>
            <div class="f_list__more">
              <ButtonCasual text="Показать еще" />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default GroupsOfficial;
