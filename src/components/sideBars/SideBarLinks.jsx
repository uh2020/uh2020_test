import React from 'react';
import './sidebar.scss';
const SideBarLinks = () => {
  return (
    <div className="bar__about">
      <div className="bar__about-lns">
        <a href="#" className="bar__about-ln">
          О проекте
        </a>
        <a href="#" className="bar__about-ln">
          Сотрудничество
        </a>{' '}
        <br />
        <a href="#" className="bar__about-ln">
          Правовая информация
        </a>
        <a href="#" className="bar__about-ln">
          Защита данных
        </a>
        <a href="#" className="bar__about-ln">
          Написать в техподдержку
        </a>
      </div>
    </div>
  );
};

export default SideBarLinks;
