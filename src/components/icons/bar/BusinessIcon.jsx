import React from 'react';

const BusinessIcon = (props) => {
  return (
    <>
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30519 22.1436V6.75327H18.6957V22.1436H8.30519ZM22.1865 22.1436H20.332V6.75327H22.1865C23.2139 6.75327 24.0409 7.56668 24.0409 8.56298V20.3338C24.0409 21.3301 23.2139 22.1436 22.1865 22.1436ZM4.81441 6.75327H6.66888V22.1436H4.81441C3.78701 22.1436 2.95994 21.3301 2.95994 20.3338V8.56298C2.95994 7.56668 3.78701 6.75327 4.81441 6.75327ZM9.3415 4.64355V5.14679H4.81441C2.88972 5.14679 1.32363 6.6731 1.32363 8.56298V20.3338C1.32363 22.2237 2.88972 23.75 4.81441 23.75H22.1865C24.1112 23.75 25.6772 22.2237 25.6772 20.3338V8.56298C25.6772 6.6731 24.1112 5.14679 22.1865 5.14679H17.6594V4.64355C17.6594 3.47521 16.6916 2.53384 15.5049 2.53384H11.496C10.3093 2.53384 9.3415 3.47521 9.3415 4.64355ZM16.0231 4.64355V5.14679H10.9778V4.64355C10.9778 4.3688 11.2066 4.14031 11.496 4.14031H15.5049C15.7943 4.14031 16.0231 4.3688 16.0231 4.64355Z"
          fill={props.color ? props.color : '#7C7474'}
          stroke={props.color ? props.color : '#7C7474'}
          strokeWidth="0.3"
        />
      </svg>
    </>
  );
};

export default BusinessIcon;
