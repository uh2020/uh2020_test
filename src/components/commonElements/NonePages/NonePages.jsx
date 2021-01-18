import React from 'react';
import { ButtonGreen } from '../buttons/Buttons';

export const NonePageButtonTwo = (props) => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">{props.UpperText}</p>
      {props.button ? (
        <props.button text={props.buttonText} />
      ) : (
        <ButtonGreen text="Добавить в друзья" />
      )}

      <p className="f-all-info__main__text">{props.UnderText}</p>
    </div>
  );
};
export const NonePageButtonOne = (props) => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title">{props.UpperText}</p>
      {props.button ? (
        <props.button text={props.buttonText} />
      ) : (
        <ButtonGreen text="Добавить в друзья" />
      )}

      {/* <p className="f-all-info__main__text">{props.UnderText}</p> */}
    </div>
  );
};
export const NonePage = (props) => {
  return (
    <div className="f-all-info__main">
      <p className="f-all-info__main__title" style={{ margin: 0 }}>
        {props.UpperText}
      </p>
    </div>
  );
};
