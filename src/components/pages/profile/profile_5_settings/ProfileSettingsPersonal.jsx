import React from 'react';
import DownIcon from '../../../icons/friends/DownIcon';
import CloseIcon from '../../../icons/profile/CloseIcon';
import SignoutIcon from '../../../icons/profile/SignoutIcon';
import ProfileMyEdit from '../profile_1_my/ProfileMyEdit';

const ProfileSettingsPersonal = () => {
  return (
    <div className="pr__personal">
      <div className="pr__personal-left">
        <div className="pr__personal-left-inn">
          <div
            className="pr__personal-left-photo"
            style={{
              backgroundImage: `url("https://vsrap.ru/wp-content/uploads/2019/08/drake2.jpg")`,
            }}
          >
            <CloseIcon />
            <div className="pr__personal-img-inn">
              <div className="pr__btn-edit">Изменить фото</div>
            </div>
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Ваше имя</p>
            <input
              type="text"
              // value="Ваше имя"
              name="Ваше имя"
              className="pr__personal-left-input"
            />
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Ваша фамилия</p>
            <input
              type="text"
              // value={'Петров'}
              name="Петров"
              className="pr__personal-left-input"
            />
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Страна</p>
            <ProfileSelect text="Россия" />
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Город</p>
            <ProfileSelect text="Москва" />
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Дата рождения</p>
            <ProfileSelect text="26.09.1980" />
          </div>
          <div className="pr__personal-left-check">
            <input type="checkbox" id="age" />
            <label for="age">Не отображать возраст</label>
          </div>
          <div className="pr__personal-left-item">
            <p className="pr__personal-left-item-title">Пол</p>
            <div className="pr__personal-left-item-check-inn">
              <div className="pr__personal-left-item-check">
                <input id="male" name="gender" type="radio" />
                <label for="male">Мужской</label>
              </div>
              <div className="pr__personal-left-item-check">
                <input id="female" name="gender" type="radio" />
                <label for="female">Женский</label>
              </div>
            </div>
          </div>
        </div>
        <div className="pr__personal-left-exit">
          Выйти <SignoutIcon />
        </div>
      </div>
      <div className="pr__personal-right">
        <div
          className="pr__personal-right-bg"
          style={{
            backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
          }}
        >
          <CloseIcon />
          <div className="pr__personal-img-inn">
            <div className="pr__btn-edit">Изменить фото</div>
          </div>
        </div>
        <ProfileMyEdit />
      </div>
    </div>
  );
};
const ProfileSelect = (props) => {
  const [active, setActive] = React.useState(false);
  const change = () => {
    active === false ? setActive(true) : setActive(false);
  };
  return (
    <>
      {console.log(active)}
      <div className="pr__my-item-select">
        <div className="pr__my-item-select-top pr__cur" onClick={change}>
          <div className="pr__my-item-select-body ">
            <div className="pr__my-item-select-text">{props.text}</div>
            <div className="pr__my-item-select-click flex">
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

export default ProfileSettingsPersonal;
