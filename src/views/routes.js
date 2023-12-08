import React from 'react';

import {
  Landing,



  Pricing as PricingView,

  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,

  SignupSimple as SignupSimpleView,

  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Dashboard as DashboardView
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <Landing {...params} />,
  },

  {
    path: '/app',
    renderer: (params = {}) => <DashboardView {...params} />,
  },

  
  {
    path: '/pricing',
    renderer: (params = {}) => <PricingView {...params} />,
  },

  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
 
  {
    path: '/signup-simple',
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

export default routes;
