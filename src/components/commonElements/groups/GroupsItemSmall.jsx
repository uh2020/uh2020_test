import React from 'react';
import GroupUserIcon from '../../icons/groups/GroupUserIcon';
import GVerifiedIcon from '../../icons/groups/GVerifiedIcon';
import LockIcon from '../../icons/groups/LockIcon';
import OfficialIcon from '../../icons/groups/OfficialIcon';
import { ButtonBlueGroupsLine } from '../buttons/Buttons';

const GroupsItemSmall = (props) => {
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
        {/* <ButtonBlueGroupsLine text="Вступить" /> */}
        {props.button ? (
          <props.button text={props.buttonText ? props.buttonText : ' '} />
        ) : (
          <ButtonBlueGroupsLine text="Вступить" />
        )}
      </div>
    </div>
  );
};

export default GroupsItemSmall;
