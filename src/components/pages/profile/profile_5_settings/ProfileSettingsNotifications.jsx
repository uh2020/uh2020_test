import React from 'react';
import { ButtonBrown } from '../../../commonElements/buttons/Buttons';

const ProfileSettingsNotifications = () => {
  return (
    <div className="pr__privacy-block pr__privacy-block-fr">
      <div className="pr__notifications">
        <div className="pr__notifications-left">
          <h4 className="pr__notifications-title">Все</h4>
          <div className="pr__notifications-left-item">
            <input type="checkbox" id="pr_Not_w" />
            <label htmlFor="pr_Not_w">Уведомления со звуком</label>
          </div>
          <div className="pr__notifications-left-item">
            <input type="checkbox" id="pr_Not_n" />
            <label htmlFor="pr_Not_n">Уведомления без звука</label>
          </div>
          <div className="pr__notifications-left-item">
            <input type="checkbox" id="pr_Not_none" />
            <label htmlFor="pr_Not_none">Без уведомления</label>
          </div>
          <div className="pr__notifications-left-item">
            <input type="checkbox" id="pr_Not_set" />
            <label htmlFor="pr_Not_set">Пользовательские настройки</label>
          </div>
          <div className="pr__notifications-left-btn">
            <ButtonBrown text="Сохранить" />
          </div>
          <div className="pr__notifications-texts">
            <p>Выбран может быть только 1 пункт</p>
            <p>
              При выбранном пункте “Пользовательские настройки” вы можете
              изменить каждый из элементов в правой части
            </p>
          </div>
        </div>
        <div className="pr__notifications-right">
          <h4 className="pr__notifications-title">
            Пользовательские настройки
          </h4>
          <div className="pr__notifications-right-items">
            <Item title="Заявки в друзья" text="Уведомления со звуком" id={1} />
            <Item
              title="Новые подписчики"
              text="Уведомления со звуком"
              id={2}
            />
            <Item title="Новые сообщения" text="Уведомления со звуком" id={3} />
            <Item
              title="Отметки “Нравится”"
              text="Уведомления со звуком"
              id={4}
            />
            <Item
              title="Комментарии к вашим записям"
              text="Уведомления со звуком"
              id={5}
            />
            <Item
              title="Репосты ваших записей"
              text="Уведомления со звуком"
              id={6}
            />
            <Item
              title="Ответы на комментарии"
              text="Уведомления со звуком"
              id={7}
            />
            <Item
              title="Упоминание о вас"
              text="Уведомления со звуком"
              id={8}
            />
            <Item
              title="Новые записи на стене"
              text="Уведомления со звуком"
              id={9}
            />
            <Item title="Итоги опроса" text="Уведомления со звуком" id={10} />
            <Item title="Дни рождения" text="Уведомления со звуком" id={11} />
            <Item
              title="В разделе питомцы"
              text="Уведомления со звуком"
              id={12}
            />
            <Item
              title="В разделе маркет"
              text="Уведомления со звуком"
              id={13}
            />
            <Item
              title="В разделе букинг"
              text="Уведомления со звуком"
              id={14}
            />
            <Item
              title="В разделе библиотека"
              text="Уведомления со звуком"
              id={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Item = (props) => {
  const [value, setValue] = React.useState(props.text);
  const [visible, setvisible] = React.useState(false);
  const [checked, setchecked] = React.useState(false);
  // props.setActive(props.id);
  const flip = (e) => {
    setchecked(true);
    if (visible) {
      setvisible(false);
    } else {
      setvisible(true);
    }
  };
  const IsActive = (e) => {
    if (typeof e.target.className != 'string') {
      return true;
    }
    if (
      !e.target.className.includes('pr__privacy-item-flip-span') ||
      !e.target.className.includes('pr__privacy-item-flip-options') ||
      !e.target.className.includes('pr__privacy-item-flip-option')
    ) {
      setvisible(false);
    } else setvisible(true);
    if (e.target.className === 'pr__privacy-item-flip-span' + ' ' + props.id) {
      setvisible(true);
    }
    setchecked(false);
  };
  const changeValue = (val) => {
    setValue(val);
    flip();
  };

  React.useEffect(() => {
    if (checked) {
      document.addEventListener('click', IsActive);
    }
    if (!visible) {
      document.removeEventListener('click', IsActive);
    }
  }, [checked, visible]);
  return (
    <div className="pr__privacy-item">
      <div className="pr__privacy-item-left pr__notifications-right-item-left">
        <p>{props.title}</p>
        <span
          className={'pr__privacy-item-flip-span' + ' ' + props.id}
          onClick={flip}
        >
          {value}
          <div
            className={
              'pr__privacy-item-flip-inn' + ' ' + (visible ? '' : 'none ')
            }
          >
            <div
              className={
                'pr__privacy-item-flip-options' + ' ' + (visible ? '' : 'none ')
              }
            >
              <div
                onClick={() => {
                  changeValue('Уведомления со звуком');
                }}
                className="pr__privacy-item-flip-option"
              >
                Уведомления со звуком
              </div>
              <div
                onClick={() => {
                  changeValue('Уведомления без звука');
                }}
                className="pr__privacy-item-flip-option"
              >
                Уведомления без звука
              </div>
              <div
                onClick={() => {
                  changeValue('Без уведомления');
                }}
                className="pr__privacy-item-flip-option"
              >
                Без уведомления
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProfileSettingsNotifications;
