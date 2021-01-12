import React from 'react';
import { ButtonGreen } from '../../../commonElements/buttons/Buttons';
import { NonePageButtonTwo } from '../../../commonElements/NonePages/NonePages';
import InfoIcon from '../../../icons/friend/InfoIcon';
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
import { FriendInviteIcon } from '../../friends/friends_10_Invite/FriendsInvite';

const FriendInfo = () => {
  const hide = false;
  return (
    <>
      <section className="main-container f-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <div className="f-info__svg">
              <InfoIcon />
            </div>
            <p className="f-info__title">Информация</p>
          </div>
        </div>
        {hide ? (
          <NonePageButtonTwo
            button={ButtonGreen}
            buttonText="Добавить в друзья"
            UpperText="Сергей скрыл информацию"
            UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
          />
        ) : (
          <FriendInfoItems />
        )}
      </section>
    </>
  );
};

const FriendInfoItems = () => {
  return (
    <div className="f-info__items">
      <article className="f-info__item">
        <p className="f-info__item-left">Место работы</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">ООО “Титан”</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Образование</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Высшее</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Родной город</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Россия, Псков</p>
        </div>
      </article>
      <article className="f-info__item ai-center">
        <p className="f-info__item-left">Интересы</p>
        <div className="f-info__item-right">
          <span className="f-info__item-right__hobby">#Рыбалка</span>
          <span className="f-info__item-right__hobby">#Собаки</span>
          <span className="f-info__item-right__hobby">#Сафари</span>
          <span className="f-info__item-right__hobby">#Рыбалка</span>
          <span className="f-info__item-right__hobby">#Собаки</span>
          <span className="f-info__item-right__hobby">#Сафари</span>
        </div>
      </article>
      <article className="f-info__item ai-center">
        <p className="f-info__item-left">Языки</p>
        <div className="f-info__item-right">
          <span className="f-info__item-right__lang">Английский</span>
          <span
            className="f-info__item-right__lang"
            // style="background-image: url(media/lang/lang.png);"
          >
            Французский
          </span>
          <span
            className="f-info__item-right__lang"
            // style="background-image: url(media/lang/lang.png);"
          >
            Итальянский
          </span>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Обо мне</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text-n">
            В советское время работал на промыслах пушнины. Южная Якутия, два
            промысловых участка по 625 квадратных километра. Кубань охота на
            утку ,гуся,зайца лиса . Внештатный егерь Приморско Ахтарского р—на.
          </p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Гражданство</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Осетия, Россия</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Контакты</p>
        <div className="f-info__item-right">
          <a className="f-info__item-right__text" href="tel:+7 900 000 00 00">
            +7 900 000 00 00
          </a>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Оружие</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">
            Карабин КК Сайга TG2 366TKM
          </p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Бренды</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Название бренда</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Транспорт</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Снегоход Tinger</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Места охоты</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Названия стран</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Место службы/Звание</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Название</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Сообщество охотников</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Название</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Шлем</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Бриллиантовый</p>
        </div>
      </article>
      <article className="f-info__item">
        <p className="f-info__item-left">Коллекции</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Горные козлы</p>
        </div>
      </article>
      <article className="f-info__item ai-center">
        <p className="f-info__item-left">В социальных сетях</p>
        <div className="f-info__item-right">
          <div className="f-info__item-right-social">
            <FriendInviteIcon size={'30'} Icon={VkIcon} text="Vk" />
            <FriendInviteIcon size={'30'} Icon={FacebookIcon} text="Facebook" />
            <FriendInviteIcon size={'30'} Icon={TwitterIcon} text="Twitter" />
            <FriendInviteIcon size={'30'} Icon={LinkedinIcon} text="Linkedin" />
            <FriendInviteIcon size={'30'} Icon={GoogleIcon} text="Google" />
            <FriendInviteIcon
              size={'30'}
              Icon={InstagramIcon}
              text="Instagram"
            />
            <FriendInviteIcon
              size={'30'}
              Icon={OdnoklassnikiIcon}
              text="Odnoklassniki"
            />
            <FriendInviteIcon size={'30'} Icon={WhatsappIcon} text="Whatsapp" />
            <FriendInviteIcon size={'30'} Icon={ViberIcon} text="Viber" />
            <FriendInviteIcon size={'30'} Icon={TelegramIcon} text="Telegram" />
          </div>
        </div>
      </article>
    </div>
  );
};
export default FriendInfo;
