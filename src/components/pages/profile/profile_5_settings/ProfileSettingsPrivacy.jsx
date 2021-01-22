import React from 'react';
import PArrRightIcon from '../../../icons/profile/PArrRightIcon';

const ProfileSettingsPrivacy = () => {
  return (
    <div className="pr__privacy">
      <div className="pr__privacy-block pr__privacy-block-fr">
        <div className="pr__privacy-block-header">
          <p>Записи на моей странице</p>
        </div>
        <div className="pr__privacy-block-items">
          <Item
            title="Кто может видеть записи на моей странице"
            type="blue"
            text="Все"
          />
          <Item
            title="Кто может оставлять записи на моей странице"
            text="Пользователи Uhunt"
          />
          <Item
            title="Кто может видеть комментарии к записям"
            type="blue"
            text="Все"
          />
          <Item
            title="Кто может оставлять комментарии к записям"
            text="Пользователи Uhunt"
          />
        </div>
      </div>

      <div className="pr__privacy-block">
        <div className="pr__privacy-block-header">
          <p>связь со мной</p>
        </div>
        <div className="pr__privacy-block-items">
          <Item
            title="Кто может писать мне личные сообщения"
            text="Пользователи Uhunt"
          />
          <Item
            title="Кто может приглашать меня в группы"
            text="Пользователи Uhunt"
          />
          <Item
            title="Кто может приглашать меня в беседы"
            text="Пользователи Uhunt"
          />
          <Item
            title="Кто может отмечать меня на фотографии"
            text="Пользователи Uhunt"
          />
          <Item
            title="Кто может найти меня по номеру телефона"
            text="Все"
            type="blue"
          />
        </div>
      </div>
      <div className="pr__privacy-block">
        <div className="pr__privacy-block-header">
          <p>связь со мной</p>
        </div>
        <div className="pr__privacy-block-items">
          <Item
            title="Кто в интернете видит мою страницу"
            text="Все"
            type="blue"
          />
          <Item
            title="Кто видит моих друзй и подписчиков "
            text="Все"
            type="blue"
          />
          <Item title="Кто видит моих питомцев" text="Все" type="blue" />
          <Item
            title="Кто видит мои объявления в разделе питомцев"
            text="Все"
            type="blue"
          />
          <Item title="Кто видит мои группы" text="Все" type="blue" />
          <Item title="Кто видит мои медиа" text="Все" type="blue" />
          <Item
            title="Кто видит мои объявления на букинге"
            text="Все"
            type="blue"
          />
          <Item
            title="Кто видит мои товары на маркете"
            text="Все"
            type="blue"
          />
          <Item title="Кто видит мои публикации" text="Все" type="blue" />
          <Item title="Кто видит мой бизнес-страницы" text="Все" type="blue" />
        </div>
      </div>

      <div className="pr__privacy-block-bottom">
        <p className="pr__privacy-text">
          Посмотреть, как будут видеть вашу страницу
        </p>
        <div className="pr__privacy-see">
          Друзья
          <PArrRightIcon />
        </div>
        <div className="pr__privacy-see">
          Подписчики
          <PArrRightIcon />
        </div>
        <div className="pr__privacy-see">
          Другие пользователи
          <PArrRightIcon />
        </div>
      </div>
    </div>
  );
};

const Item = (props) => {
  const [value, setValue] = React.useState(props.text);
  const [visable, setVisable] = React.useState(false);

  const flip = (e) => {
    visable ? setVisable(false) : setVisable(true);
  };
  const test = (e) => {
    debugger;
    console.log('act');
    if (typeof e.target.className != 'string') {
      return true;
    }
    if (e.target.className === 'pr__privacy-item-flip-item') {
      if (visable) {
        flip();
      }
    }
    const g = e.target.className.includes('pr__privacy-item-flip');
    if (!g) {
      if (visable) {
        flip();
      }
    }
  };
  const changeValue = (val) => {
    setValue(val);
    visable ? setVisable(false) : setVisable(true);
  };

  React.useEffect(() => {
    document.addEventListener('click', test);
  }, [visable]);
  // switch (props.type) {
  //   case 'red':
  //   case 'blue':
  //   default:
  // }
  return (
    <div className="pr__privacy-item">
      <div className="pr__privacy-item-left">
        <p>{props.title}</p>
        <span>{value}</span>
      </div>
      <div
        className="pr__privacy-item-flip"
        // style={props.type === 'blue' ? { backgroundColor: '#73AEE6' } : null}
        // onClick={flip}
      >
        <div
          className="pr__privacy-item-flip-item"
          style={props.type === 'blue' ? { backgroundColor: '#73AEE6' } : null}
          onClick={flip}
        ></div>
        <div
          className={
            'pr__privacy-item-flip-inn' + ' ' + (visable ? '' : 'none ')
          }
        >
          <div
            className={
              'pr__privacy-item-flip-options' + ' ' + (visable ? '' : 'none ')
            }
          >
            {props.type === 'blue' ? (
              <div
                onClick={() => {
                  changeValue('Все');
                }}
                className="pr__privacy-item-flip-option"
              >
                Все
              </div>
            ) : null}

            <div
              onClick={() => {
                changeValue('Пользователи Uhunt');
              }}
              className="pr__privacy-item-flip-option"
            >
              Пользователи Uhunt
            </div>
            <div
              onClick={() => {
                changeValue('Только я');
              }}
              className="pr__privacy-item-flip-option"
            >
              Только я
            </div>
            <div
              onClick={() => {
                changeValue('Только друзья');
              }}
              className="pr__privacy-item-flip-option"
            >
              Только друзья
            </div>
            <div
              onClick={() => {
                changeValue('Друзья и подписчики');
              }}
              className="pr__privacy-item-flip-option"
            >
              Друзья и подписчики
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPrivacy;
