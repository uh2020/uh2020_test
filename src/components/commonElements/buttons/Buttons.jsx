import React from 'react';
import XRedIcon from '../../icons/friends/XRedIcon';
import GAddBtn from '../../icons/groups/GAddBtn';

// Common
// Common
// Common
export const ButtonBrown = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-brown' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBrownDisabled = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-brown-dis' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBrownLine = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-brown-line' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBrownPlus = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-brown-line g__btn-brown-plus' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
        />
      </svg>
      {props.text}
    </div>
  );
};
export const ButtonBrownPlusFilled = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-brown g__btn-brown-plus-filled' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
export const ButtonCasual = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        color: props.color,
      }}
      className={'g__btn-casual' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonDisabled = (props) => {
  return (
    <div
      style={props.ml ? { marginLeft: props.ml } : null}
      onClick={props.onClick}
      className={'g__btn-dis' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
// Friends
// Friends
// Friends
export const ButtonGreen = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-green' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonGreenLine = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-green-line' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonGreenPlus = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-green-line g__btn-green-plus' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
        />
      </svg>
      {props.text}
    </div>
  );
};
export const ButtonGreenPlusFilled = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-green g__btn-green-plus-filled' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
// Groups
// Groups
// Groups
export const ButtonBlueGroups = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-blue' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBlueGroupsLine = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-blue-line' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBlueGroupsPlus = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-blue-line g__btn-blue-plus' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
export const ButtonBlueGroupsPlusFilled = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-blue g__btn-blue-plus-filled' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
// Messenger
// Messenger
// Messenger
export const ButtonBlueMessenger = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-blue-mess' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};
export const ButtonBlueMessengerLine = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-blue-mess-line' + ' ' + (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      {props.text}
    </div>
  );
};
export const ButtonBlueMessengerPlus = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-blue-mess-line g__btn-blue-mess-plus' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
export const ButtonBlueMessengerPlusFilled = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'g__btn-blue-mess g__btn-blue-mess-plus-filled' +
        ' ' +
        (props.mr ? 'g__btn-mar' : ' ')
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#608AA1" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
        />
      </svg>
      {props.text}
    </div>
  );
};
//media
//media
//media
export const ButtonOrangeMedia = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={'g__btn-orange' + ' ' + (props.mr ? 'g__btn-mar' : ' ')}
    >
      {props.text}
    </div>
  );
};

// Other
// Other
// Other
export const XDeleteItem = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={
        'f_list__out-del' + ' ' + (props.op ? 'f_list__inn-del-op' : ' ')
      }
    >
      <b>
        <span>{props.text}</span>
      </b>
      <XRedIcon />
    </div>
  );
};
