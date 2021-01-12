import React from 'react';
import UserPlus from '../../../icons/bar/UserPlusIcon';
import FacebookIcon from '../../../icons/friendsSocial/FacebookIcon';
import GoogleIcon from '../../../icons/friendsSocial/GoogleIcon';
import InstagramIcon from '../../../icons/friendsSocial/InstagramIcon';
import LinkedinIcon from '../../../icons/friendsSocial/LinkedinIcon';
import OdnoklassnikiIcon from '../../../icons/friendsSocial/OdnoklassnikiIcon';
import TelegramIcon from '../../../icons/friendsSocial/TelegramIcon';
import TwitterIcon from '../../../icons/friendsSocial/TwitterIcon';
import ViberIcon from '../../../icons/friendsSocial/ViberIcon';
import VkIcon from '../../../icons/friendsSocial/VkIcon';
import WhatsappIcon from '../../../icons/friendsSocial/WhatsappIcon';
import '../Friends.scss';
import './FriendsInvite.scss';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';

const FriendsInvite = () => {
  return (
    <div>
      <section className="">
        {/* <FriendsHeaderMenu /> */}
        <div className="main__block invite">
          <div className="main__header">
            <h2 className="main__title f_invite-title not-after">
              <UserPlus /> Приглашение друзей
            </h2>
          </div>
          <div className="content">
            <p className="content__text">
              Приглашение будет выслано на телефон или email, который Вы
              укажете. Ваши друзья и родственники смогут сразу начать
              пользоваться Uhunt, не совершая дополнительных действий.
            </p>
            <form className="invite-form">
              <div className="invite-form__content">
                <label className="invite-form__label" for="inviteName">
                  Имя
                </label>
                <input
                  className="invite-form__input"
                  id="inviteName"
                  type="text"
                  placeholder="Введите имя"
                />
              </div>
              <div className="invite-form__content">
                <label className="invite-form__label" for="inviteSurname">
                  Фамилия
                </label>
                <input
                  className="invite-form__input"
                  id="inviteSurname"
                  type="text"
                  placeholder="Введите фамилию"
                />
              </div>
              <div className="invite-form__content">
                <label className="invite-form__label" for="invitePhone">
                  Мобильный телефон
                </label>
                <input
                  className="invite-form__input"
                  id="invitePhone"
                  type="number"
                  placeholder="Номер телефона"
                />
              </div>
              <div className="invite-form__content">
                <label className="invite-form__label" for="inviteEmail">
                  Email:
                </label>
                <input
                  className="invite-form__input"
                  id="inviteEmail"
                  type="email"
                  placeholder="Введите email:"
                />
              </div>
              <button className="g__btn-green f_list__header-btn">
                Выслать приглашение
              </button>
            </form>

            <div className="invite-social">
              <p className="title">Пригласить друзей из соцсетей</p>
              <div className="invite-social__content">
                <FriendInviteIcon Icon={VkIcon} text="Vk" />
                <FriendInviteIcon Icon={FacebookIcon} text="Facebook" />
                <FriendInviteIcon Icon={TwitterIcon} text="Twitter" />
                <FriendInviteIcon Icon={LinkedinIcon} text="Linkedin" />
                <FriendInviteIcon Icon={GoogleIcon} text="Google" />
                <FriendInviteIcon Icon={InstagramIcon} text="Instagram" />
                <FriendInviteIcon
                  Icon={OdnoklassnikiIcon}
                  text="Odnoklassniki"
                />
                <FriendInviteIcon Icon={WhatsappIcon} text="Whatsapp" />
                <FriendInviteIcon Icon={ViberIcon} text="Viber" />
                <FriendInviteIcon Icon={TelegramIcon} text="Telegram" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const FriendInviteIcon = (props) => {
  return (
    <div
      className={
        'invite-social__link  f_list__inn-del ' +
        ' ' +
        (props.size ? 'f_list__inn-soc-small' : ' ')
      }
    >
      <b>
        <span>{props.text}</span>
      </b>
      <props.Icon size={props.size} />
    </div>
  );
};

export default FriendsInvite;
