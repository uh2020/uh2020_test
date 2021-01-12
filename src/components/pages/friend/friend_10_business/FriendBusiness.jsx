import React from 'react';
import {
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import {
  NonePage,
  NonePageButtonTwo,
} from '../../../commonElements/NonePages/NonePages';
import BusinessIcon from '../../../icons/bar/BusinessIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const FriendBusiness = () => {
  const items = [{}, {}];
  const hide = false;
  return (
    <div className="friends-page">
      <section className="main-container f-all-info">
        <div className="f-info__header">
          <div className="f-info__header-left">
            <div className="f-info__header__item active">
              <div className="f-info__svg">
                <BusinessIcon />
              </div>
              <p className="f-info__title">бизнес</p>
              <span className="f-info__count">56</span>
            </div>
          </div>

          <div className="f-info__header-right">
            <div className="f_list__header-sort">
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
            UpperText="Бизнес скрыт"
            UnderText="Добавьте Сергея в друзья, чтобы видеть больше"
          />
        ) : (
          <>
            {!items.length ? (
              <NonePage UpperText="У Сергея пока нет бизнеса" />
            ) : (
              <FriendBusinessInit />
            )}
          </>
        )}
      </section>
    </div>
  );
};

const FriendBusinessInit = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="g_Off__items">
        {items.map((i) => (
          <FriendBusinessItem />
        ))}
      </div>
      <div className="f_list__more">
        <ButtonCasual text="Показать еще" />
      </div>
    </>
  );
};

export const FriendBusinessItem = () => {
  return (
    <>
      FriendBusinessItem <br />{' '}
    </>
  );
};
export default FriendBusiness;
