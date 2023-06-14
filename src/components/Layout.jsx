import { Outlet, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '40px',
              marginLeft: '200px',
              fontSize: '32px',
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          margin: '0 auto',
          maxWidth: ' 800px',
          padding: '0px 1.0875rem 1.45rem',
          backgroundColor: 'lightgrey',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
