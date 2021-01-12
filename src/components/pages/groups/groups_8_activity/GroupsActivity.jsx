import React from 'react';
import './GroupsActivity.scss';
import New from '../../../icons/bar/NewIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import EarthIcon from '../../../icons/friends/EarthIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import QuizIcon from '../../../icons/bar/QuizIcon';
import NewsIcon from '../../../icons/bar/NewsIcon';
import CommentIcon from '../../../icons/bar/CommentIcon';
import ShareIcon from '../../../icons/groups/ShareIcon';
import PeaceIcon from '../../../icons/groups/PeaceIcon';
import AppraisalIcon from '../../../icons/bar/AppraisalIcon';
import PlayVideoIcon from '../../../icons/groups/PlayVideoIcon';
import ForumsIcon from '../../../icons/bar/ForumsIcon';
import { ButtonCasual } from '../../../commonElements/buttons/Buttons';
import { NonePage } from '../../../commonElements/NonePages/NonePages';

const GroupsActivity = () => {
  const activity = true;
  return (
    <div className="g__act">
      <div className="friends-page g__act__header  f_new ">
        <TopMenu />
      </div>
      {!activity ? (
        <NonePage UpperText="У вас пока нет активностей." />
      ) : (
        <>
          <div className="g__act__items">
            <Item />
            <ItemVideo />
            <ItemFroums />
          </div>
          <div className="g_Off__bottom">
            <div class="f_list__more">
              <ButtonCasual text="Показать еще" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
const Item = () => {
  return (
    <div className="g__act__item">
      <div
        className="g__act__item-img"
        style={{
          backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
        }}
      ></div>
      <div className="g__act__item-center">
        <div className="g__act__item-top">
          <div className="g__act__item-title">
            <p>Название гурппы</p>
            <span>сегодня, 20:34</span>
          </div>
          <div className="g__act__item-share">
            <div className="g__act__item-item">
              <AppraisalIcon width="24" height="24" color="#ADADAD" />
              <span>125</span>
            </div>
            <div className="g__act__item-item g__act__item-item-active">
              <CommentIcon width="24" height="24" color="#EB5757" />
              <span>12</span>
            </div>
            <div className="g__act__item-item">
              <ShareIcon />
              <span>1</span>
            </div>
          </div>
        </div>
        <p className="g__act__item-text">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so cases blinded by desire, that they
          <span>Показать полностью</span>
        </p>
      </div>
      <div className="g__act__item-right">
        <NewsIcon width="40" height="40" />
      </div>
    </div>
  );
};
const ItemVideo = () => {
  return (
    <div className="g__act__item">
      <div
        className="g__act__item-img"
        style={{
          backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
        }}
      ></div>
      <div className="g__act__item-center">
        <div className="g__act__item-top">
          <div className="g__act__item-title">
            <p>Название гурппы</p>
            <span>сегодня, 20:34</span>
          </div>
          <div className="g__act__item-share">
            <div className="g__act__item-item">
              <AppraisalIcon width="24" height="24" color="#ADADAD" />
              <span>125</span>
            </div>
            <div className="g__act__item-item g__act__item-item-active">
              <CommentIcon width="24" height="24" color="#EB5757" />
              <span>12</span>
            </div>
            <div className="g__act__item-item">
              <ShareIcon />
              <span>1</span>
            </div>
          </div>
        </div>
        <p className="g__act__item-text">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so cases blinded by desire, that they
          <span>Показать полностью</span>
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
        }}
        className="g__act__item-right g__act__item-right-video"
      >
        <VideoTop />

        <PlayVideoIcon />
        <VideoBott />
      </div>
    </div>
  );
};
const ItemFroums = () => {
  return (
    <div className="g__act__item">
      <div
        className="g__act__item-img"
        style={{
          backgroundImage: `url(${'https://domfotooboev.com.ua/home/products_images/0381.jpg'})`,
        }}
      ></div>
      <div className="g__act__item-center">
        <div className="g__act__item-top">
          <div className="g__act__item-title">
            <p>Название гурппы</p>
            <span>сегодня, 20:34</span>
          </div>
          <div className="g__act__item-share">
            <div className="g__act__item-item">
              <AppraisalIcon width="24" height="24" color="#ADADAD" />
              <span>125</span>
            </div>
            <div className="g__act__item-item g__act__item-item-active">
              <CommentIcon width="24" height="24" color="#EB5757" />
              <span>12</span>
            </div>
            <div className="g__act__item-item">
              <ShareIcon />
              <span>1</span>
            </div>
          </div>
        </div>
        <p className="g__act__item-text g__act__item-text-w">
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so cases blinded by desire, that they our cannot foresee
          the pain and trouble that are bound to ensue; and equal blame belongs
          to those who fail in their duty through weakness of will, which is the
          same as saying through shrinking from toil and pain. These cases are
          perfectly simple and easy to distinguish. In a free hour, when our
          power of choice is untrammelled and when nothing prevents our being
          endures being endures being enduresof choice is weakness of will
        </p>
      </div>
      <div className="g__act__item-right">
        <ForumsIcon width="40" height="40" />
      </div>
    </div>
  );
};

const TopMenu = (props) => {
  return (
    <>
      <div className="main__top f_new__header">
        <div className="main__top-input f_new__title-inner">
          <div className="main__top-input-search">
            <QuizIcon />
          </div>
          <div className="f_new__header-title">
            Активность
            <span>55</span>
          </div>
        </div>
        <div className="main__top-select">
          <select>
            <option>За все время</option>
          </select>
          <div className="main__search-down f_new__down">
            <DownIcon />
          </div>
        </div>
        <div className="f_new__header-item">
          <FSortIcon />
        </div>
      </div>
    </>
  );
};
const VideoTop = () => {
  return (
    <svg
      width="120"
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H115C117.761 0 120 2.23858 120 5V10H0V5Z"
        fill="#3F4548"
      />
      <rect x="5" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="20" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="35" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="50" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="65" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="80" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="95" y="3" width="5" height="5" rx="1" fill="white" />
      <rect x="110" y="3" width="5" height="5" rx="1" fill="white" />
    </svg>
  );
};
const VideoBott = () => {
  return (
    <svg
      width="120"
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H120V5C120 7.76142 117.761 10 115 10H5C2.23858 10 0 7.76142 0 5V0Z"
        fill="#3F4548"
      />
      <rect x="5" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="20" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="35" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="50" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="65" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="80" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="95" y="2" width="5" height="5" rx="1" fill="white" />
      <rect x="110" y="2" width="5" height="5" rx="1" fill="white" />
    </svg>
  );
};
export default GroupsActivity;
