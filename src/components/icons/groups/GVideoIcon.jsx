import React from 'react';

const GVideoIcon = (props) => {
  return (
    <>
      <svg
        width={props.size ? props.size : '24'}
        height={props.size ? props.size : '24'}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4718 17.4984V15.8894L19.4743 15.8912L20.9267 16.9647C21.3173 17.2534 21.7673 17.2156 22.1068 16.9647C22.4393 16.7189 22.6591 16.2782 22.6591 15.7591V7.55087C22.6591 7.03176 22.4393 6.59099 22.1068 6.34525C21.7673 6.09435 21.3173 6.0565 20.9267 6.34525L19.4743 7.41874L19.4718 7.42058V5.81129C19.4718 3.94049 17.9553 2.4239 16.0844 2.4239H4.39735C2.52655 2.4239 1.00996 3.94049 1.00996 5.81129V17.4984C1.00996 19.3692 2.52655 20.8858 4.39735 20.8858H16.0844C17.9553 20.8858 19.4718 19.3692 19.4718 17.4984ZM19.4718 14.2582V9.05171L19.7121 8.87414L21.4875 7.56188V15.7481L19.7121 14.4358L19.4718 14.2582ZM21.5526 15.7962L21.5525 15.7961L21.5526 15.7962ZM4.39735 3.70575H16.0844C17.2473 3.70575 18.19 4.64843 18.19 5.81129V17.4984C18.19 18.6612 17.2473 19.6039 16.0844 19.6039H4.39735C3.23449 19.6039 2.29181 18.6612 2.29181 17.4984V5.81129C2.29181 4.64843 3.23449 3.70575 4.39735 3.70575Z"
          fill="#7C7474"
          stroke="#7C7474"
          stroke-width="0.4"
        />
      </svg>
    </>
  );
};

export default GVideoIcon;
