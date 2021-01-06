import React from 'react';

const FacebookIcon = (props) => {
  return (
    <>
      <svg
        width={props.size ? props.size : '40'}
        height={props.size ? props.size : '40'}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="white" />
        <path
          d="M40 20C40 8.95125 31.0413 0 20 0C8.95125 0 0 8.95125 0 20C0 29.98 7.31125 38.255 16.875 39.7538V25.7825H11.7963V20.0013H16.875V15.5925C16.875 10.5813 19.8563 7.81375 24.4263 7.81375C26.615 7.81375 28.9062 8.20375 28.9062 8.20375V13.125H26.38C23.9 13.125 23.125 14.6688 23.125 16.25V20H28.6713L27.78 25.7813H23.125V39.7525C32.6812 38.2538 40 29.9788 40 19.9988V20Z"
          fill="#4C529F"
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
