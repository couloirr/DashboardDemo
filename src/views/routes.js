import React from 'react';

import {
  Landing,
  People as PeopleView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Data as DataView
} from 'views';


export const unprotectedRoutes = [
  {
    path: '/',
    renderer: (params = {}) => <Landing {...params} />,
  },
  {
    path: '/password-reset',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  {
    path: '/signin',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signup',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];


export const protectedRoutes = [
  {
    path: '/app',
    renderer: (params = {}) => <PeopleView {...params} />,
  },
  {
    path: '/app/data',
    renderer: (params = {}) => <DataView {...params} />,
  },

];
