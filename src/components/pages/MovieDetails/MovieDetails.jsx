import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <h2>MovieDetails Page</h2>
      <button
        type="button"
        onClick={() => {
          <Link to="/"></Link>;
        }}
      >
        Go back
      </button>
      <Outlet />
    </>
  );
};
