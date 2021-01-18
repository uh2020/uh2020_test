import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import {
  ButtonOrangeMedia,
  ButtonBrown,
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import FriendsPetsIcon from '../../../icons/friends/FriendsPetsIcon';
import PetsIcons from '../../../icons/header/PetsIcons';
import FriendPetsSubscriptions from './FriendPetsSubscriptions';
import { AmericanFlag } from '../../../icons/flags/Flags';
import FLikeIcon from '../../../icons/friends/FLikeIcon';
import RewardIcon from '../../../icons/friends/RewardIcon';
import XIcon from '../../../icons/friends/XIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import FilterIcon from '../../../icons/friends/FilterIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import {
  NonePage,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';

const FriendPets = (props) => {
  const items = [{}];
  const hide = false;
  return (
    <section className="main-container f-all-info">
      <div className="f-info__header">
        <div
          className="f-info__header-left"
          style={
            props.location.pathname.includes('/id/pets/id')
              ? null
              : { flexDirection: 'row-reverse' }
          }
        >
          {props.location.pathname.includes('/id/pets/id') ? null : (
            <NavLink
              exact
              style={
                props.location.pathname.includes('/id/pets/id')
                  ? null
                  : { marginLeft: '20px' }
              }
              to="/id/pets/subscriptions"
              activeClassName="active"
              className={
                'f-info__header__item' +
                ' ' +
                (items.length === 0 ? 'disLn' : '')
              }
            >
              <div className="f-info__svg">
                <FriendsPetsIcon />
              </div>
              <p className="f-info__title">Подписки </p>
              <span className="f-info__count">0</span>
              <span className="f-info__line"></span>
            </NavLink>
          )}
          <NavLink
            exact
            to="/id/pets"
            activeClassName=" active"
            className={
              'f-info__header__item' + ' ' + (items.length === 0 ? 'disLn' : '')
            }
          >
            <div className="f-info__svg">
              <PetsIcons />
            </div>
            <p className="f-info__title">питомцы</p>
            <span className="f-info__count">0</span>
            <span className="f-info__line"></span>
          </NavLink>

          {props.location.pathname.includes('/id/pets/id') ? (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/id/pets/id"
                activeClassName="active"
                className={
                  'f-info__header__item' +
                  ' ' +
                  (items.length === 0 ? 'disLn' : '')
                }
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Марсель
                </p>
                <span className="f-info__line"></span>
              </NavLink>
            </div>
          ) : null}
        </div>
        <div className="f-info__header-right">
          <div className="f_list__header-sort">
            <div className="f_list__header-sort-item">
              <FilterIcon />
            </div>
            <div className="f_list__header-sort-item">
              <FSortIcon />
            </div>
          </div>
        </div>
      </div>
      {hide ? (
        <NonePageButtonTwo
          button={ButtonGreen}
          buttonText="Добавить в друзья"
          UpperText="Питомцы скрыты"
          UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
        />
      ) : (
        <>
          {!items.length ? (
            <NonePage UpperText="У Сергея пока нет питомцев" />
          ) : (
            <Switch>
              <Route exact path="/id/pets" render={() => <FriendPetsMain />} />
              <Route
                path="/id/pets/subscriptions"
                render={() => <FriendPetsSubscriptions />}
              />
              <Route
                exact
                path="/id/pets/id"
                render={() => <FriendPetPage />}
              />
            </Switch>
          )}
        </>
      )}
    </section>
  );
};
const FriendPetsMain = () => {
  const items = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="f_pets__main">
        {items.map((i) => {
          return <FriendPetsItem />;
        })}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};
const FriendPetPage = () => {
  return <>FriendPetPage</>;
};

export const FriendPetsItem = () => {
  return (
    <div className="f_pets__item fr__pets-item">
      <div className="f_pets__item-header">
        <p className="f_pets__item-title">
          Марсель, <span>7</span>
        </p>
        <div className="f_pets__item-reward">
          <div>
            <RewardIcon />
          </div>
          <p>
            <XIcon />
            <span>10</span>
          </p>
        </div>
      </div>
      <NavLink to="/id/pets/id">
        <div
          to="/id/pets/id"
          className="f_pets__item-img"
          style={{
            backgroundImage: `url("https://avatars.mds.yandex.net/get-zen_doc/1064817/pub_5d468e47e3062c00ad408138_5d5beca597b5d400ae26c826/scale_1200")`,
          }}
        ></div>
      </NavLink>

      <div className="f_pets__item-about">
        <p>австрийская гончая</p>
      </div>
      <div className="fr__pets-bottom">
        <div className="fr__pets-bottom-logo-inner">
          <div
            className="f_pets__item-logo fr__pets-bottom-logo"
            style={{
              backgroundImage: `url("https://i.pinimg.com/736x/2f/03/f8/2f03f8cae2989c91c13b19b91ad94f8a.jpg")`,
            }}
          ></div>
          <div className="fr__pets-bottom-flag">
            <AmericanFlag sm="1" />
          </div>
        </div>
        <div className="fr__pets-bottom-right">
          <div className=" fr__pets-bottom-right-like f_pets__item-about-right">
            <span>7312</span>
            <FLikeIcon />
          </div>
          <ButtonBrown text="Подписаться" />
        </div>
      </div>
    </div>
  );
};

export default FriendPets;
