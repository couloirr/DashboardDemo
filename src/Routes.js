import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { Main, Dashboard } from 'layouts';
import { protectedRoutes, unprotectedRoutes } from 'views/routes';
import {AuthRoute} from './auth/AuthRoute';


const Routes = () => {
  return (
    <ReactRoutes>
      {unprotectedRoutes.map((item, i) => (
      
        <Route key={i} path={item.path} element={
          <Main>
          {item.renderer()}
          </Main>
        } />
        
      ))}
     {protectedRoutes.map((item, i) => (
      <Route element={<AuthRoute/>}>
      <Route key={i} path={item.path} element={
        <Dashboard Child={item.renderer}>
        </Dashboard>
      } />
      </Route>
      
    ))}
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} />
    </ReactRoutes>
  );
};

export default Routes;
