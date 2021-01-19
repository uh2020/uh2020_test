import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import {
  NonePage,
  NonePageButtonOne,
} from '../../../commonElements/NonePages/NonePages';
import NewsIcon from '../../../icons/bar/NewsIcon';
import Plus from '../../../icons/bar/PlusIcon';
import {
  UnitedKingDomSmallFlag,
  FranceSmallFlag,
  ItalySmallFlag,
} from '../../../icons/flags/SmallFlags';
import InfoIcon from '../../../icons/friend/InfoIcon';
import DownIcon from '../../../icons/friends/DownIcon';
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
import TagIcon from '../../../icons/profile/TagIcon';
import { FriendMainPageArticle } from '../../friend/friend_1_main/FriendMain';
import { FriendInviteIcon } from '../../friends/friends_10_Invite/FriendsInvite';
import PlusIcon from '../../../icons/bar/PlusIcon';

const ProfileMy = (props) => {
  const hide = false;
  return (
    <section className="main-container f-info">
      {/* <div className="f-info__header">
        <div className="f-info__header-left">
          <div className="f-info__svg">
            <InfoIcon />
          </div>
          <p className="f-info__title">Информация</p>
        </div>
      </div> */}
      <div className="f-info__header">
        <div className="f-info__header-left">
          <div className="fr__media-ln-inn">
            <div className="f-info__header-left">
              <div className="f-info__svg">
                <InfoIcon />
              </div>
              <p className="f-info__title">Информация</p>
            </div>
          </div>
        </div>
        <div className="f-info__header-right">
          {props.location.pathname === '/profile' ? (
            <NavLink to="/profile/edit">
              <ButtonBrown text="Редактировать" />
            </NavLink>
          ) : null}
          {props.location.pathname === '/profile/edit' ? (
            <NavLink to="/profile">
              <ButtonBrown text="Сохранить" />
            </NavLink>
          ) : null}
        </div>
      </div>
      {hide ? (
        <NonePageButtonOne
          button={ButtonBrown}
          buttonText="Добавить "
          UpperText="Вы не добавили информацию о себе"
        />
      ) : (
        <Switch>
          <Route exact path="/profile" render={() => <ProfileMyInfo />} />
          <Route path="/profile/edit" render={() => <ProfileMyEdit />} />
        </Switch>
        // <> {editMode ? <ProfileMyEdit /> : <ProfileMyInfo />} </>
      )}
    </section>
  );
};
export const ProfileMyEdit = () => {
  return (
    <>
      <div className="pr__my-edit">
        <div className="pr__my-item">
          <p className="pr__my-item-title">Верификация</p>
          <div className="pr__my-item-right">
            <ButtonBrown text="Подать заявку" />
          </div>
        </div>
        <div className="pr__my-item">
          <p className="pr__my-item-title">Место работы</p>
          <div className="pr__my-item-right">
            <input
              className="pr__my-item-input"
              type="text"
              placeholder="Введите место работы"
            />
          </div>
        </div>
        <div className="pr__my-item">
          <p className="pr__my-item-title">Место работы</p>
          <div className="pr__my-item-right">
            <ProfileSelectIcon />
          </div>
        </div>
        <div className="pr__my-item">
          <p className="pr__my-item-title">Место работы</p>
          <div className="pr__my-item-right">
            {/* <div className="pr__my-item-select">
              <div className="pr__my-item-select-top">
                <div className="pr__my-item-select-body">
                  <input
                    placeholder="Выберите образование"
                    className="pr__my-item-select-input"
                  />
                  <DownIcon />
                </div>
              </div>
              <div className="pr__my-item-select-list">
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
                <div className="pr__my-item-select-option">Олени</div>
              </div>
            </div> */}
            <ProfileSelect />
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileSelectIcon = () => {
  const [active, setActive] = React.useState(false);
  const change = () => {
    active === false ? setActive(true) : setActive(false);
  };
  return (
    <>
      {console.log(active)}
      <div className="pr__my-item-select">
        <div className="pr__my-item-select-top">
          <TagIcon />
          <div className="pr__my-item-select-body">
            <input
              placeholder="Выберите образование"
              className="pr__my-item-select-input"
            />
            <div className="pr__my-item-select-click flex" onClick={change}>
              <PlusIcon size="20" />
            </div>
          </div>
        </div>
        <div
          className={
            'pr__my-item-select-list pr__my-item-select-list-icon' +
            ' ' +
            (active ? ' ' : 'hide')
          }
        >
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
        </div>
      </div>
    </>
  );
};
const ProfileSelect = () => {
  const [active, setActive] = React.useState(false);
  const change = () => {
    active === false ? setActive(true) : setActive(false);
  };
  return (
    <>
      {console.log(active)}
      <div className="pr__my-item-select">
        <div className="pr__my-item-select-top">
          <div className="pr__my-item-select-body">
            <input
              placeholder="Выберите образование"
              className="pr__my-item-select-input"
            />
            <div className="pr__my-item-select-click flex" onClick={change}>
              <DownIcon />
            </div>
          </div>
        </div>
        <div
          className={'pr__my-item-select-list' + ' ' + (active ? ' ' : 'hide')}
        >
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
          <div className="pr__my-item-select-option">Олени</div>
        </div>
      </div>
    </>
  );
};
const ProfileMyInfo = () => {
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
      <article className="f-info__item">
        <p className="f-info__item-left">Профессия</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Инженер</p>
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
        <div className="f-info__item-right f-info__item-lang-inner">
          <span className="f-info__item-right__lang">
            <UnitedKingDomSmallFlag />
            Английский
          </span>
          <span className="f-info__item-right__lang">
            <FranceSmallFlag />
            Французский
          </span>
          <span className="f-info__item-right__lang">
            <ItalySmallFlag />
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
        <p className="f-info__item-left">Опыт в охоте</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">10 лет</p>
        </div>
      </article>
      <article className="f-info__item ai-center">
        <p className="f-info__item-left">Вид охоты</p>
        <div className="f-info__item-right">
          <span className="f-info__item-right__hobby">#Охота на кабана</span>
          <span className="f-info__item-right__hobby">#Охота на медведя</span>
          <span className="f-info__item-right__hobby">#Подводная охота</span>
        </div>
      </article>
      <article className="f-info__item ai-center">
        <p className="f-info__item-left">Трофеи</p>
        <div className="f-info__item-right">
          <span className="f-info__item-right__hobby">#Медведь</span>
          <span className="f-info__item-right__hobby">#Кабан</span>
          <span className="f-info__item-right__hobby">#Тетерев</span>
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
        <p className="f-info__item-left">События</p>
        <div className="f-info__item-right">
          <p className="f-info__item-right__text">Выставка охотничьих собак</p>
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

export default ProfileMy;
