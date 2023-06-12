import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
