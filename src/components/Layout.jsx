import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={css.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : `${css.link}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : `${css.link}`
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={css.backdrop}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
