import React from 'react';
import './GroupsViewed.scss';
import GroupsTopMenuSF from '../groupsCommon/GroupsTopMenuSF';
import EyeIcon from '../../../icons/bar/EyeIconIcon';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import GroupsItemSmall from '../../../commonElements/groups/GroupsItemSmall';

const GroupsViewed = (props) => {
  const gColor = '#608AA1';
  const items = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="g__inner">
      <div className="g_manage g__page">
        <div className="g__container">
          <div className="friends-page g_new__header f_new__header f_new ">
            <GroupsTopMenuSF Icon={EyeIcon} text="Просмотренные группы" />
          </div>
          <>
            <div className="g__items-x g_Off__items">
              {items.map((i) => {
                return <GroupsItemSmall />;
              })}
            </div>
            <div className="f_list__more">
              <ButtonCasual text="Показать еще" />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default GroupsViewed;
