import React from 'react';
import Home from './components/Home';
import UrlShortener from './components/UrlShortener';
import XSSDemo from './components/XSSDemo';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import D3Demo from './components/D3Demo';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/url-shortener',
    component: UrlShortener,
  },
  {
    path: '/xss-demo',
    component: XSSDemo,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    authorization: true,
  },
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/d3-demo',
    component: D3Demo,
  },
  {
    render: ({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = 404;
      }
      return (
        <ErrorPage
          webStatus={404}
        />
      );
    },
  },
];


export default routes;
