import React from 'react';

const AddIcon = (props) => {
  if (props.plus === '#7C7474') {
  }
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7.5"
          cy="7.5"
          r="7.5"
          fill={props.color ? props.color : '#669774'}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.125 4.375H6.875V6.875H4.375V8.125H6.875V10.625H8.125V8.125H10.625V6.875H8.125V4.375Z"
          fill="white"
          fill={props.plus ? props.plus : '#fff'}
        />
      </svg>
    </>
  );
};

export default AddIcon;
