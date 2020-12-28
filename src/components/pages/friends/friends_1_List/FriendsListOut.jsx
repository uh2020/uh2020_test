import React from 'react';
import AddIcon from '../../../icons/friends/AddIcon';
import XRedIcon from '../../../icons/friends/XRedIcon';

const FriendsListOut = () => {
  const items = [{}, {}, {}];
  return (
    <div className="f_list__items-inner">
      <div className="f_list__items f_list__items-sroke">
        {items.map((i) => {
          return <FriendsListOutItem />;
        })}
      </div>
      <div className="f_list__out-bottom">
        <div className="f_list__out-bottom-all">Все</div>
        <div className="f_list__out-bottom-add f_list__inn-btn">
          Подписаться
        </div>
        <div className="f_list__out-bottom-subs f_list__inn-btn">Написать</div>
        <div className="f_list__out-del">
          <b>
            <span>Отменить заявку</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};

const FriendsListOutItem = () => {
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
        <div className="f_list__inn-btn f_list__out-plus">Подписаться</div>
        <div className="f_list__inn-btn f_list__out-subs">Написать</div>
        <div className=" f_list__out-del f_list__out-del-op">
          <b>
            <span>Отменить заявку</span>
          </b>
          <XRedIcon />
        </div>
      </div>
    </div>
  );
};

export default FriendsListOut;
