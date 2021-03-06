import React from 'react';
import { ReactLocation, Router, Outlet } from 'react-location';

import { MainPage } from './pages/main';
import { MySpace } from './pages/my-space';
import { Header, Footer } from './layouts';

const reactLocation = new ReactLocation();

const routes = [
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/my-space',
    element: <MySpace />
  }
];

export const Routes = () => {
  return (
    <Router location={reactLocation} routes={routes}>
      <Header />
      <article>
        <Outlet />
      </article>
      {/*<Footer />*/}
    </Router>
  );
};
