import React from 'react';

const WhatsappIcon = (props) => {
  return (
    <>
      <svg
        width={props.size ? props.size : '40'}
        height={props.size ? props.size : '40'}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#55D061" />
        <path
          d="M28.1607 14.8402C25.2807 10.4002 19.4007 9.08024 14.8407 11.8402C10.4007 14.6002 8.96071 20.6002 11.8407 25.0402L12.0807 25.4002L11.1207 29.0002L14.7207 28.0402L15.0807 28.2802C16.6407 29.1202 18.3207 29.6002 20.0007 29.6002C21.8007 29.6002 23.6007 29.1202 25.1607 28.1602C29.6007 25.2802 30.9207 19.4002 28.1607 14.8402ZM25.6407 24.0802C25.1607 24.8002 24.5607 25.2802 23.7207 25.4002C23.2407 25.4002 22.6407 25.6402 20.2407 24.6802C18.2007 23.7202 16.5207 22.1602 15.3207 20.3602C14.6007 19.5202 14.2407 18.4402 14.1207 17.3602C14.1207 16.4002 14.4807 15.5602 15.0807 14.9602C15.3207 14.7202 15.5607 14.6002 15.8007 14.6002H16.4007C16.6407 14.6002 16.8807 14.6002 17.0007 15.0802C17.2407 15.6802 17.8407 17.1202 17.8407 17.2402C17.9607 17.3602 17.9607 17.6002 17.8407 17.7202C17.9607 17.9602 17.8407 18.2002 17.7207 18.3202C17.6007 18.4402 17.4807 18.6802 17.3607 18.8002C17.1207 18.9202 17.0007 19.1602 17.1207 19.4002C17.6007 20.1202 18.2007 20.8402 18.8007 21.4402C19.5207 22.0402 20.2407 22.5202 21.0807 22.8802C21.3207 23.0002 21.5607 23.0002 21.6807 22.7602C21.8007 22.5202 22.4007 21.9202 22.6407 21.6802C22.8807 21.4402 23.0007 21.4402 23.2407 21.5602L25.1607 22.5202C25.4007 22.6402 25.6407 22.7602 25.7607 22.8802C25.8807 23.2402 25.8807 23.7202 25.6407 24.0802Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default WhatsappIcon;
