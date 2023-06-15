import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
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
        <Outlet />
      </div>
    </>
  );
};
