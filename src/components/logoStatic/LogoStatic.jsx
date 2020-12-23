import React from 'react';
import './logoStatic.scss';
const LogoStatic = (props) => {
  return (
    <div>
      <div className="logo__static">
        <svg
          width="34"
          height="130"
          viewBox="0 0 34 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 0H0V91V97V128.998C0 129.874 1.04597 130.327 1.68446 129.728L16.3155 115.991C16.7003 115.63 17.2997 115.63 17.6845 115.991L32.3155 129.728C32.954 130.327 34 129.874 34 128.998V97V91V0Z"
            fill={props.color ? props.color : '#669774'}
          />
        </svg>

        <p>friends</p>
      </div>
    </div>
  );
};

export default LogoStatic;
