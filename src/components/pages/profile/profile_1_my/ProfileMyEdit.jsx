import React from 'react';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';
import PlusIcon from '../../../icons/bar/PlusIcon';
import { ItalySmallFlag } from '../../../icons/flags/SmallFlags';
import DownIcon from '../../../icons/friends/DownIcon';
import AimIcon from '../../../icons/profile/AimIcon';
import LanguageIcon from '../../../icons/profile/LanguageIcon';
import MapPointIcon from '../../../icons/profile/MapPointIcon';
import TagIcon from '../../../icons/profile/TagIcon';

export const ProfileMyEdit = () => {
  const existingOptionsInit = ['Рыбалка', 'Собаки', 'Сафари'];
  const existingOptionsInitLg = [
    { title: 'Английский', lng: 'italy' },
    { title: 'Английский', lng: 'italy' },
    { title: 'Английский', lng: 'italy' },
  ];
  const optionsInit = ['Английский', 'Английский', 'Английский'];
  return (
    <>
      <div className="pr__my-edit">
        <div>
          {/* <div className="pr__my-item">
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
        <div className="pr__my-item pr__my-item-st">
          <p className="pr__my-item-title">Место работы</p>
          <div className="pr__my-item-right pr__my-wrap-col">
            <ProfileSelectIcon />
            <div className="pr__my-wrap">
              <span className="f-info__item-right__hobby">
                <ItalySmallFlag /> #Рыбалка
              </span>
              <span className="f-info__item-right__hobby">#Рыбалка</span>
              <span className="f-info__item-right__hobby">#Рыбалка</span>
            </div>
          </div>
        </div>
        <div className="pr__my-item pr__my-item-st">
          <p className="pr__my-item-title">Место работы</p>
          <div className="pr__my-item-right pr__my-wrap-col">
            <ProfileSelect />
            <div className="pr__my-wrap">
              <span className="f-info__item-right__hobby">#Рыбалка</span>
              <span className="f-info__item-right__hobby">#Рыбалка</span>
              <span className="f-info__item-right__hobby">#Рыбалка</span>
            </div>
          </div>
        </div>
        <div className="pr__my-item">
          <p className="pr__my-item-title">Обо мне</p>
          <div className="pr__my-item-right">
            <textarea
              className="pr__my-item-textarea"
              type="text"
              placeholder="Введите о себе"
            />
          </div>
        </div> */}
        </div>
        <ProfileMyEditItem
          type="input"
          title="Место работы"
          pl="Введите место работы"
        />
        <ProfileMyEditItemCase
          type="input"
          title="Образование"
          pl="Выберите образование"
          existingOptions={existingOptionsInit}
          options={optionsInit}
        />
        <ProfileMyEditItem
          type="input"
          title="Родной город"
          pl="Введите родной город"
        />
        <ProfileMyEditItem
          type="input"
          title="Профессия"
          pl="Введите профессию"
        />
        <ProfileMyEditItemCase
          type="selected"
          title="Интересы"
          pl="Добавить интерес"
          icon={TagIcon}
          existingOptions={existingOptionsInit}
          options={optionsInit}
        />
        <ProfileMyEditItemCase
          type="language"
          title="Интересы"
          pl="Добавить интерес"
          icon={LanguageIcon}
          existingOptions={existingOptionsInitLg}
          options={optionsInit}
        />
        <ProfileMyEditItem
          type="textarea"
          title="Обо мне"
          pl="Введите о себе"
        />
        <ProfileMyEditItem
          type="input"
          title="Гражданство"
          pl="Введите гражданство"
        />
        <ProfileMyEditItem
          type="input"
          title="Блог"
          pl="Введите ссылку на страницу в библиотеке"
        />
        <ProfileMyEditItem
          type="input"
          title="Маркет"
          pl="Введите ссылку на страницу на маркете"
        />
        <ProfileMyEditItem
          type="input"
          title="Booking"
          pl="Введите ссылку на страницу на букинге"
        />
        <ProfileMyEditItem type="input" title="Оружие" pl="Введите оружие" />
        <ProfileMyEditItem
          type="input"
          title="Опыт в охоте"
          pl="Введите Опыт в охоте"
        />
        <ProfileMyEditItemCase
          type="selected"
          title="Вид охоты"
          pl="Добавить вид охоты"
          icon={TagIcon}
          // existingOptions={existingOptionsInit}
          options={optionsInit}
        />
        <ProfileMyEditItemCase
          type="selected"
          title="Трофеи"
          pl="Добавить трофеи"
          icon={AimIcon}
          // existingOptions={existingOptionsInit}
          options={optionsInit}
        />
        <ProfileMyEditItem type="input" title="Бренды" pl="Введите бренды" />
        <ProfileMyEditItem
          type="input"
          title="Транспорт"
          pl="Введите транспорт"
        />
        <ProfileMyEditItemCase
          type="selected"
          title="Места охоты"
          pl="Добавить место"
          icon={MapPointIcon}
          // existingOptions={existingOptionsInit}
          options={optionsInit}
        />
        <ProfileMyEditItem
          type="input"
          title="Место службы/Звание"
          pl="Введите ссылку на страницу в библиотеке"
        />
        <ProfileMyEditItem type="input" title="События" pl="Введите события" />
        <ProfileMyEditItem
          type="input"
          title="Сообщество охотников"
          pl="Введите название"
        />
        <ProfileMyEditItem type="input" title="Шлем" pl="Введите шлем" />
        <ProfileMyEditItem
          type="input"
          title="Коллекции"
          pl="Введите коллекции"
        />
      </div>
    </>
  );
};
const ProfileMyEditItem = (props) => {
  switch (props.type) {
    case 'input':
      return (
        <div className="pr__my-item">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right">
            <input
              className="pr__my-item-input"
              type="text"
              placeholder={props.pl}
            />
          </div>
        </div>
      );
    case 'textarea':
      return (
        <div className="pr__my-item">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right">
            <textarea
              className="pr__my-item-textarea"
              type="text"
              placeholder={props.pl}
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="pr__my-item">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right">
            <input
              className="pr__my-item-input"
              type="text"
              placeholder={props.pl}
            />
          </div>
        </div>
      );
  }
};
const ProfileMyEditItemCase = (props) => {
  switch (props.type) {
    case 'input':
      return (
        <div className="pr__my-item">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right">
            <ProfileSelect pl={props.pl} options={props.options} />
          </div>
        </div>
      );
    case 'language':
      const checkLeng = (country) => {
        switch (country) {
          case 'italy':
            return <ItalySmallFlag />;
          default:
            return <ItalySmallFlag />;
        }
      };
      return (
        <div className="pr__my-item pr__my-item-st">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right pr__my-wrap-col">
            <ProfileSelectIcon
              icon={props.icon}
              pl={props.pl}
              options={props.options}
            />
            <div className="pr__my-wrap">
              {props.existingOptions
                ? props.existingOptions.map((i) => {
                    return (
                      <span className="f-info__item-right__hobby">
                        {checkLeng(i.lng)} {i.title}
                      </span>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
    case 'selected':
      return (
        <div className="pr__my-item pr__my-item-st">
          <p className="pr__my-item-title">{props.title}</p>
          <div
            className={
              'pr__my-item-right' +
              ' ' +
              (props.existingOptions ? 'pr__my-wrap-col' : '')
            }
          >
            <ProfileSelectIcon
              icon={props.icon}
              pl={props.pl}
              options={props.options}
            />
            <div className="pr__my-wrap">
              {props.existingOptions
                ? props.existingOptions.map((i) => {
                    return (
                      <span className="f-info__item-right__hobby">{i}</span>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="pr__my-item pr__my-item-st">
          <p className="pr__my-item-title">{props.title}</p>
          <div className="pr__my-item-right pr__my-wrap-col">
            <ProfileSelect pl={props.pl} options={props.options} />
            <div className="pr__my-wrap">
              {props.existingOptions
                ? props.existingOptions.map((i) => {
                    return (
                      <span className="f-info__item-right__hobby">{i}</span>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
  }
};
const ProfileSelectIcon = (props) => {
  const [active, setActive] = React.useState(false);
  const change = () => {
    active === false ? setActive(true) : setActive(false);
  };
  return (
    <>
      {console.log(active)}
      <div className="pr__my-item-select">
        <div className="pr__my-item-select-top">
          {props.icon ? <props.icon /> : <TagIcon />}

          <div className="pr__my-item-select-body">
            <input
              placeholder={props.pl ? props.pl : 'Выберите'}
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
          {props.options
            ? props.options.map((i) => {
                return <div className="pr__my-item-select-option">{i}</div>;
              })
            : null}
        </div>
      </div>
    </>
  );
};

const ProfileSelect = (props) => {
  const [active, setActive] = React.useState(false);
  const change = () => {
    active === false ? setActive(true) : setActive(false);
  };
  return (
    <>
      <div className="pr__my-item-select">
        <div className="pr__my-item-select-top">
          <div className="pr__my-item-select-body">
            <input
              placeholder={props.pl ? props.pl : 'Выберите'}
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
          {props.options
            ? props.options.map((i) => {
                return <div className="pr__my-item-select-option">{i}</div>;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ProfileMyEdit;
