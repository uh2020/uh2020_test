import React from 'react';
import '../Friends.scss';
import FriendsHeaderMenu from '../friendsCommon/FriendsHeaderMenu';

const FriendsList = () => {
  const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <section className="main-container friends">
        <FriendsHeaderMenu />
        <div className="main__block">
          <div className="main__header">
            <h2 className="main__title">Все друзья</h2>
            <div className="main__tab">
              <nav className="main__tab-items">
                <a
                  href="#tab-incoming"
                  className="main__tab-items__link main__tab-items__link-incoming"
                >
                  <span className="count-incoming ">2</span>
                  <span className="main__tab-items__link-text hover-line-fr">
                    Входящие
                  </span>
                </a>
                <a
                  href="#tab-request"
                  className="main__tab-items__link main__tab-items__link-request "
                >
                  <span className="hover-line-fr"> Заявки </span>
                </a>
                <a
                  href="#tab-outgoing"
                  className="main__tab-items__link main__tab-items__link-outgoing"
                >
                  <span className="main__tab-items__link-text hover-line-fr">
                    Исходящие
                  </span>

                  <span className="count-incoming viewed ">2</span>
                </a>
              </nav>
            </div>
            <button className="btn btn-write-all">Написать всем</button>
          </div>
          <div className="main__tab-body">
            <div id="tab-incoming" className="main__tab-body-block">
              Входящие
            </div>
            <div id="tab-request" className="main__tab-body-block">
              Заявки
            </div>
            <div id="tab-outgoing" className="main__tab-body-block">
              Исходящие
            </div>
          </div>
          <div className="all-friends">
            {items.map((i) => (
              <FriendItem />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FriendItem = () => {
  return (
    <article className="friend-item">
      <div className="tab__main-item__block-img">
        <a
          style={{
            backgroundImage: `url(${'https://7sisters.ru/wp-content/uploads/2017/08/2515091748.jpg'})`,
          }}
          className="tab__main-item__img"
          href=""
        ></a>
      </div>
      <div className="tab__main-item__block-info">
        <h4 className="tab__main-item__block-info__name">
          <a className="tab__main-item__block-info__name-link" href="">
            Фамилия Имя
          </a>
        </h4>
        <a className="tab__main-item__block-info__country" href="">
          <span>Страна</span>, <span>Город</span>
        </a>
        <a className="tab__main-item__block-info__msg" href="">
          Написать
        </a>
      </div>
    </article>
  );
};

export default FriendsList;
