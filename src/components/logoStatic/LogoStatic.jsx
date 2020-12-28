import React from 'react';
import './logoStatic.scss';
const LogoStatic = (props) => {
  let initial = {
    color: '#669774',
    title: 'friends',
  };
  const [page, setPage] = React.useState(initial);
  const checkPage = () => {
    let changePAge = (color, title) => {
      let page = {
        color,
        title,
      };
      setPage(page);
    };
    const path = props.location;
    switch (path) {
      case '/friends': {
        return path.includes('/friends') ? changePAge('#669774', 'Friends') : 0;
      }
      case '/pets': {
        return path.includes('/pets') ? changePAge('#7c7474', 'Pets') : 0;
      }
      case '/messenger': {
        return path.includes('/messenger')
          ? changePAge('#5574b0', 'Messenger')
          : 0;
      }
      case '/groups': {
        return path.includes('/groups') ? changePAge('#608aa1', 'Groups') : 0;
      }
      case '/media': {
        return path.includes('/media') ? changePAge('#e5925b', 'Media') : 0;
      }
      case '/booking': {
        return path.includes('/booking') ? changePAge('#d89342', 'Booking') : 0;
      }
      case '/market': {
        return path.includes('/market') ? changePAge('#e5635b', 'Market') : 0;
      }
      case '/library': {
        return path.includes('/library') ? changePAge('#b28d75', 'Library') : 0;
      }
      case '/search': {
        return path.includes('/search') ? changePAge('#7c7474', 'Search') : 0;
      }
      // default:
      //   return ;
    }
  };

  React.useEffect(() => {
    checkPage();
  }, [props.location]);
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
            fill={page.color}
          />
        </svg>

        <p style={{ color: page.color }}>{page.title}</p>
      </div>
    </div>
  );
};

export default LogoStatic;
