import React from 'react';
import { ButtonGreen } from '../../../commonElements/buttons/Buttons';
import AddIcon from '../../../icons/bar/AddIcon';
import NewsIcon from '../../../icons/bar/NewsIcon';
import Search from '../../../icons/bar/SearchIcon';
import AllNewsIconBig from '../../../icons/friend/AllnewsIconBig';
import DotsIcon from '../../../icons/friend/DotsIcon';
import ShareIcon from '../../../icons/groups/ShareIcon';
import MessageIcon from '../../../icons/bar/MessageIcon';
import AppraisalIcon from '../../../icons/bar/AppraisalIcon';

const FriendMain = () => {
  const hide = false;
  return (
    <>
      <div className="fr__top-bar">
        <div className="fr__top-bar-left">
          <div
            className="fr__top-bar-img"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/2f/03/f8/2f03f8cae2989c91c13b19b91ad94f8a.jpg")`,
            }}
          ></div>
          {/* <div className="fr__top-bar-text">Написать в новостях Сергея</div> */}
          <input
            placeholder="Написать в новостях Сергея"
            className="fr__top-bar-text"
          />
        </div>
        <div className="fr__top-bar-right">
          <div className="fr__poi">
            <AddIcon size="24" />
          </div>
        </div>
      </div>
      <section className="main-container main-container-fr-main ">
        <div className="f-info__header main-container-mar">
          <div className="f-info__header-left">
            <div className="f-info__svg">
              <NewsIcon />
            </div>
            <p className="f-info__title">
              все новости{' '}
              <span class="f-all-info">
                <span className="f-info__count">5</span>
              </span>
            </p>
          </div>
          <div className="f-info__header-right">
            <div className="fr__poi">
              <Search width="24" height="24" />
            </div>
          </div>
        </div>
      </section>
      {hide ? <FriendMainNone /> : <FriendMainPage />}
    </>
  );
};

const FriendMainNone = () => {
  return (
    <div className="main-container">
      <div class="f-all-info__main">
        <AllNewsIconBig />
        <p class="fr__none-title">На стене у Сергея пока нет записей</p>
        <ButtonGreen text="Добавить новость" />
      </div>
    </div>
  );
};

const FriendMainPage = () => {
  return (
    <div className="fr__main">
      <div class="main__post">
        <div class="main__post-top">
          <div class="main__post-logo">
            <div class="main__post-logo-img"></div>
            <div class="main__post-logo-texts">
              <p>Имя Фамилия</p>
              <span>6 минут назад</span>
            </div>
          </div>
          <div class="main__post-dots">
            <DotsIcon />
          </div>
        </div>
        <p class="main__post-title">
          Интересное видео на тему “Как выбрать”. Что думаете?
        </p>
        <div class="main__post-media"></div>
        <p class="main__post-subtitle">
          Интересное видео на тему “Как выбрать ”. Что думаете?
        </p>
        <div class="main__post-bottom">
          <div class="main__post-comm">
            <div class="main__post-comm-l">
              {/* <img src="img/main/peace.png" alt="" /> */}
              <AppraisalIcon width="24" height="24" />
            </div>
            <div class="main__post-comm-r">
              {/* <img src="img/main/comment.svg" alt="" /> */}
              <MessageIcon size="24" />
            </div>
          </div>
          <div class="main__post-share">
            {/* <img src="img/main/share.svg" alt="" /> */}
            <ShareIcon color="#7C7474" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendMain;
