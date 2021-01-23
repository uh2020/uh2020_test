import React from 'react';
import PArrRightIcon from '../../../icons/profile/PArrRightIcon';

const ProfileSettingsPrivacy = (props) => {
  const [active, setActive] = React.useState();
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
            id={'1'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может оставлять записи на моей странице"
            text="Пользователи Uhunt"
            id={'2'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может видеть комментарии к записям"
            type="blue"
            text="Все"
            id={'3'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может оставлять комментарии к записям"
            text="Пользователи Uhunt"
            id={'4'}
            active={active}
            setActive={setActive}
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
            id={'5'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может приглашать меня в группы"
            text="Пользователи Uhunt"
            id={'6'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может приглашать меня в беседы"
            text="Пользователи Uhunt"
            id={'7'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может отмечать меня на фотографии"
            text="Пользователи Uhunt"
            id={'8'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто может найти меня по номеру телефона"
            text="Все"
            type="blue"
            id={'9'}
            active={active}
            setActive={setActive}
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
            id={'10'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто видит моих друзй и подписчиков "
            text="Все"
            type="blue"
            id={'11'}
            active={active}
            setActive={setActive}
          />
          <Item title="Кто видит моих питомцев" text="Все" type="blue" />
          <Item
            title="Кто видит мои объявления в разделе питомцев"
            text="Все"
            type="blue"
            id={'12'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто видит мои группы"
            id={'13'}
            active={active}
            setActive={setActive}
            text="Все"
            type="blue"
          />
          <Item
            title="Кто видит мои медиа"
            id={'14'}
            active={active}
            setActive={setActive}
            text="Все"
            type="blue"
          />
          <Item
            title="Кто видит мои объявления на букинге"
            text="Все"
            type="blue"
            id={'15'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто видит мои товары на маркете"
            text="Все"
            type="blue"
            id={'16'}
            active={active}
            setActive={setActive}
          />
          <Item
            title="Кто видит мои публикации"
            id={'17'}
            active={active}
            setActive={setActive}
            text="Все"
            type="blue"
          />
          <Item
            title="Кто видит мой бизнес-страницы"
            id={'18'}
            active={active}
            setActive={setActive}
            text="Все"
            type="blue"
          />
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
    // visible ? setvisible(false) : setvisible(true);
  };
  const test = (e) => {
    console.log('test');
    if (typeof e.target.className != 'string') {
      return true;
    }
    if (
      !e.target.className.includes('pr__privacy-item-flip-span') ||
      !e.target.className.includes('pr__privacy-item-flip-options') ||
      !e.target.className.includes('pr__privacy-item-flip-option')
    ) {
      debugger;
      // visible ? setvisible(false) : setvisible(true);
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
      document.addEventListener('click', test);
    }
    if (!visible) {
      document.removeEventListener('click', test);
    }
  }, [checked, visible]);
  // switch (props.type) {
  //   case 'red':
  //   case 'blue':
  //   default:
  // }
  return (
    <div className="pr__privacy-item">
      <div className="pr__privacy-item-left">
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
        </span>
      </div>
      <div className="pr__privacy-item-flip">
        {/* <div
          className="pr__privacy-item-flip-item"
          style={props.type === 'blue' ? { backgroundColor: '#73AEE6' } : null}
          onClick={flip}
        ></div> */}
      </div>
    </div>
  );
};

export default ProfileSettingsPrivacy;
