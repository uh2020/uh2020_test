import React from 'react';

const AddIcon = (props) => {
  return (
    <>
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill={props.color ? props.color : '#7C7474'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-inside-1"
          // fill="white"
          fill="none"
        >
          <path d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5H19.5C22.2614 2.5 24.5 4.73858 24.5 7.5V19.5C24.5 22.2614 22.2614 24.5 19.5 24.5H7.5C4.73858 24.5 2.5 22.2614 2.5 19.5V7.5Z" />
        </mask>
        <path
          d="M7.5 4.3H19.5V0.7H7.5V4.3ZM22.7 7.5V19.5H26.3V7.5H22.7ZM19.5 22.7H7.5V26.3H19.5V22.7ZM4.3 19.5V7.5H0.7V19.5H4.3ZM7.5 22.7C5.73269 22.7 4.3 21.2673 4.3 19.5H0.7C0.7 23.2555 3.74446 26.3 7.5 26.3V22.7ZM22.7 19.5C22.7 21.2673 21.2673 22.7 19.5 22.7V26.3C23.2555 26.3 26.3 23.2555 26.3 19.5H22.7ZM19.5 4.3C21.2673 4.3 22.7 5.73269 22.7 7.5H26.3C26.3 3.74446 23.2555 0.7 19.5 0.7V4.3ZM7.5 0.7C3.74446 0.7 0.7 3.74446 0.7 7.5H4.3C4.3 5.73269 5.73269 4.3 7.5 4.3V0.7Z"
          fill={props.color ? props.color : '#7C7474'}
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M12.7858 8.86422V12.7858H8.86422C8.46977 12.7858 8.15 13.1055 8.15 13.5C8.15 13.8945 8.46977 14.2142 8.86422 14.2142H12.7858V18.1358C12.7858 18.5302 13.1055 18.85 13.5 18.85C13.8945 18.85 14.2142 18.5302 14.2142 18.1358V14.2142L18.1358 14.2142C18.5302 14.2142 18.85 13.8945 18.85 13.5C18.85 13.1055 18.5302 12.7858 18.1358 12.7858L14.2142 12.7858V8.86422C14.2142 8.46977 13.8945 8.15 13.5 8.15C13.1055 8.15 12.7858 8.46977 12.7858 8.86422Z"
          fill={props.color ? props.color : '#7C7474'}
          stroke={props.color ? props.color : '#7C7474'}
          strokeWidth="0.7"
        />
      </svg>
    </>
  );
};

export default AddIcon;
