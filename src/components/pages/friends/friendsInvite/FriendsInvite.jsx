import React from 'react';
import '../Friends.scss';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';

const FriendsInvite = () => {
  return (
    <div>
      <section class="main-container friends">
        <FriendsHeaderMenu />
        <div class="main__block invite">
          <div class="main__header">
            <h2 class="main__title not-after">Приглашение друзей</h2>
          </div>
          <div class="content">
            <p class="content__text">
              Приглашение будет выслано на телефон или email, который Вы
              укажете. Ваши друзья и родственники смогут сразу начать
              пользоваться Uhunt, не совершая дополнительных действий.
            </p>
            <form class="invite-form">
              <div class="invite-form__content">
                <label class="invite-form__label" for="inviteName">
                  Имя
                </label>
                <input
                  class="invite-form__input"
                  id="inviteName"
                  type="text"
                  placeholder="Введите имя"
                />
              </div>
              <div class="invite-form__content">
                <label class="invite-form__label" for="inviteSurname">
                  Фамилия
                </label>
                <input
                  class="invite-form__input"
                  id="inviteSurname"
                  type="text"
                  placeholder="Введите фамилию"
                />
              </div>
              <div class="invite-form__content">
                <label class="invite-form__label" for="invitePhone">
                  Мобильный телефон
                </label>
                <input
                  class="invite-form__input"
                  id="invitePhone"
                  type="number"
                  placeholder="Номер телефона"
                />
              </div>
              <div class="invite-form__content">
                <label class="invite-form__label" for="inviteEmail">
                  Email:
                </label>
                <input
                  class="invite-form__input"
                  id="inviteEmail"
                  type="email"
                  placeholder="Введите email:"
                />
              </div>
              <button class="btn invite-form__btn">Выслать приглашение</button>
            </form>

            <div class="invite-social">
              <p class="title">Пригласить друзей из соцсетей</p>
              <div class="invite-social__content">
                <a class="invite-social__link link-vk" href=""></a>
                <a class="invite-social__link link-facebook" href=""></a>
                <a class="invite-social__link link-twitter" href=""></a>
                <a class="invite-social__link link-linkedin" href=""></a>
                <a class="invite-social__link link-google" href=""></a>
                <a class="invite-social__link link-instagram" href=""></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FriendItem = () => {
  return (
    <article className="friend-item">
      <div className="tab__main-item__block-img">
        <a
          style={{
            backgroundImage: `url(${'https://7sisters.ru/wp-content/uploads/2017/08/2515091748.jpg'})`,
          }}
          className="tab__main-item__img"
          href=""
        ></a>
      </div>
      <div className="tab__main-item__block-info">
        <h4 className="tab__main-item__block-info__name">
          <a className="tab__main-item__block-info__name-link" href="">
            Фамилия Имя
          </a>
        </h4>
        <a className="tab__main-item__block-info__country" href="">
          <span>Страна</span>, <span>Город</span>
        </a>
        <a className="tab__main-item__block-info__msg" href="">
          Написать
        </a>
      </div>
    </article>
  );
};

export default FriendsInvite;
