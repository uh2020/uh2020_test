import React from 'react';
import './logoStatic.scss';
const LogoStatic = (props) => {
  let initial = {
    color: '#fff',
    title: 'friends',
  };
  const [page, setPage] = React.useState(initial);
  const checkPage = () => {
    let changePAge = (color, title) => {
      // debugger;
      let page = {
        color,
        title,
      };
      setPage(page);
    };
    const path = props.location;
    const links = [
      {
        ln: '/id',
        color: '#669774',
        title: 'Friend',
      },
      {
        ln: '/profile',
        color: '#7c7474',
        title: 'Uhunt Home',
      },
      {
        ln: '/friends',
        color: '#669774',
        title: 'Friends',
      },
      {
        ln: '/pets',
        color: '#7c7474',
        title: 'Pets',
      },
      {
        ln: '/messenger',
        color: '#5574b0',
        title: 'Messenger',
      },
      {
        ln: '/groups',
        color: '#608aa1',
        title: 'Groups',
      },
      {
        ln: '/media',
        color: '#e5925b',
        title: 'Media',
      },
      {
        ln: '/groups',
        color: '#608aa1',
        title: 'Groups',
      },
      {
        ln: '/booking',
        color: '#d89342',
        title: 'Booking',
      },
      {
        ln: '/market',
        color: '#e5635b',
        title: 'Market',
      },
      {
        ln: '/library',
        color: '#b28d75',
        title: 'Library',
      },
      {
        ln: '/search',
        color: '#7c7474',
        title: 'Search',
      },
    ];
    for (let i = 0; i < links.length; i++) {
      const is = path.includes(links[i].ln);
      if (is) {
        changePAge(links[i].color, links[i].title);
        break;
      }
    }
    // switch (path) {
    //   case '/friends': {
    //     return path.includes('/friends') ? changePAge('#669774', 'Friends') : 0;
    //   }
    //   case '/library': {
    //     return path.includes('/library') ? changePAge('#b28d75', 'Library') : 0;
    //   }
    //   case '/search': {
    //     return path.includes('/search') ? changePAge('#7c7474', 'Search') : 0;
    //   }
    //   // default:
    //   //   return ;
    // }
  };

  React.useEffect(() => {
    checkPage();
  }, [props.location]);
  React.useEffect(() => {
    checkPage();
  }, []);
  return (
    <div>
      <div
        className="logo__static"
        style={
          props.location.includes('/id/main')
            ? {
                height: '70%',
                top: '420px',
              }
            : null
        }
      >
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
