import React from 'react';
import {
  ButtonCasual,
  ButtonGreen,
} from '../../../commonElements/buttons/Buttons';
import BusinessIcon from '../../../icons/bar/BusinessIcon';
import FSortIcon from '../../../icons/friends/FSortIcon';

const FriendBusiness = () => {
  const items = [{}];
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
        {items.length === 0 ? <FriendBusinessNone /> : <FriendBusinessInit />}
      </section>
    </div>
  );
};

const FriendBusinessNone = () => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">Объявления скрыты</p>
      <span>
        <ButtonGreen text="Добавить в друзья" />
      </span>
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
