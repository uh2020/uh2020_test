import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import { LibraryStoryCardItem } from '../../../commonElements/friends/FriendNotItems';
import { NonePageButtonOne } from '../../../commonElements/NonePages/NonePages';
import NoteBookIcon from '../../../icons/bar/NoteBookIcon';
import PricetagIcon from '../../../icons/bar/PricetagIcon';
import FArrowIcon from '../../../icons/friend/FArrowIcon';
import DownIcon from '../../../icons/friends/DownIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';
import ArchiveIcon from '../../../icons/profile/ArchiveIcon';
import EditSquareIcon from '../../../icons/profile/EditSquareIcon';

const ProfileProducts = (props) => {
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
          <NavLink
            exact
            to="/profile/products"
            activeClassName="active"
            className={'f-info__header__item'}
            style={
              props.location.pathname.includes('/profile/products/add')
                ? { marginRight: '40px' }
                : null
            }
          >
            <div className="f-info__svg">
              <PricetagIcon />
            </div>
            <p className="f-info__title">Объявления</p>
            <span className="f-info__count">3</span>
            <span
              className="f-info__line"
              style={{ backgroundColor: '#7c7474' }}
            ></span>
          </NavLink>
          {props.location.pathname.includes('/profile/products/add') ? null : (
            <>
              <NavLink
                exact
                to="/profile/products/draft"
                activeClassName=" active"
                className={'f-info__header__item'}
              >
                <div className="f-info__svg">
                  <EditSquareIcon />
                </div>
                <p className="f-info__title">Черновики</p>
                <span className="f-info__count">4</span>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: '#7c7474' }}
                ></span>
              </NavLink>
              <NavLink
                exact
                to="/profile/products/archive"
                activeClassName=" active"
                className={'f-info__header__item'}
              >
                <div className="f-info__svg">
                  <ArchiveIcon />
                </div>
                <p className="f-info__title">Архив</p>
                <span className="f-info__count">8</span>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: '#7c7474' }}
                ></span>
              </NavLink>
            </>
          )}
          {props.location.pathname.includes('/profile/products/add') ? (
            <div className="fr__pets-ln">
              <NavLink
                exact
                to="/profile/products/add"
                activeClassName="active"
                className={'f-info__header__item fr__media-inn'}
                style={
                  props.location.pathname.includes('/profile/products/add')
                    ? { marginLeft: '-20px' }
                    : null
                }
              >
                <p className="f-info__title">
                  <span className="fr__pets-ln-arr">
                    <FArrowIcon />
                  </span>
                  Добавление объявления
                </p>
                <span
                  className="f-info__line"
                  style={{ backgroundColor: '#7c7474' }}
                ></span>
              </NavLink>
            </div>
          ) : null}
        </div>
        {!props.location.pathname.includes('/profile/products/add') ? (
          <div className="f-info__header-right">
            <div className="f_list__header-sort">
              <NavLink to="/profile/products/add">
                <ButtonBrown mr="1" text="Добавить" />
              </NavLink>
              <ProfileSelect />
              <div className="f_list__header-sort-item">
                <FSortIcon />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {hide ? (
        <NonePageButtonOne
          button={ButtonBrown}
          buttonText="Добавить "
          UpperText="У вас пока нет публикаций в библиотеке"
        />
      ) : (
        <Switch>
          <Route
            exact
            path="/profile/posts"
            render={() => <ProfilePostsMain />}
          />
          {/* <Route path="/profile/edit" render={() => <ProfileMyEdit />} /> */}
        </Switch>
        // <> {editMode ? <ProfileMyEdit /> : <ProfileMyInfo />} </>
      )}
    </section>
  );
};

const ProfilePostsMain = () => {
  const items = [{}, {}, {}, {}];
  return (
    <div className="f_list__items">
      {items.map((i) => {
        return <LibraryStoryCardItem />;
      })}
    </div>
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
      <div className="pr__my-item-select pr__my-item-select-sm-mr">
        <div className="pr__my-item-select-top ">
          <div className="pr__my-item-select-body ">
            <div className="pr__my-item-select-text">Все объявления</div>
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

export default ProfileProducts;
