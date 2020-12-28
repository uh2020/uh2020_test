import React from 'react';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListInn = () => {
  const items = [{}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items f_list__items-sroke">
        {items.map((i) => {
          return <FriendsListInnItem />;
        })}
      </div>
      <div className="f_list__inn-bottom">
        <div className="f_list__inn-bottom-all">Всех</div>
        <div className="f_list__inn-btn f_list__out-bottom-add">
          <AddIcon color="#fff" plus="#7C7474" /> Принять
        </div>
        <div className="f_list__inn-bottom-add f_list__inn-btn">
          <AddIcon color="white" plus="#669774" />
          Добавить в друзья
        </div>

        <div className="f_list__inn-del">
          <b>
            <span>Отклонить</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};

const FriendsListInnItem = () => {
  return (
    <div className="f_BL__item">
      <div className="f_BL__item-left">
        <div
          className="f_BL__item-logo"
          style={{
            backgroundImage: `url("https://www.jetss.com/wp-content/uploads/2018/11/post-malone-ashlen-diaz-breakup.jpg")`,
          }}
        ></div>
        <div className="f_BL__texts">
          <h1 className="f_BL__item-title">
            Пабло Диего Хозе Франциско де Пау...
          </h1>
          <p className="f_BL__item-text">
            <span>Россия,</span>
            <span>Москва</span>
          </p>
        </div>
      </div>

      <div className="f_list__inn-btns">
        <div className="f_list__inn-btn f_list__out-plus">
          <AddIcon color="#7C7474" /> Принять
        </div>
        <div className="f_list__inn-btn f_list__inn-plus">
          <AddIcon />
          Добавить в друзья
        </div>

        <div className=" f_list__inn-del f_list__inn-del-op">
          <b>
            <span>Отклонить</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};

export default FriendsListInn;
