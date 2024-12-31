import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  Register,
  Login,
  Checkout,
  Orders,
  About,
} from '../pages';
import { ErrorElement } from '@/components';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(HomeLayout),
    errorElement: React.createElement(Error),
    children: [
      {
        index: true,
        element: React.createElement(Landing),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: 'products',
        element: React.createElement(Products),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: 'products/:id',
        element: React.createElement(SingleProduct),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: '/cart',
        element: React.createElement(Cart),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: '/about',
        element: React.createElement(About),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: '/checkout',
        element: React.createElement(Checkout),
        errorElement: React.createElement(ErrorElement),
      },
      {
        path: '/orders',
        element: React.createElement(Orders),
        errorElement: React.createElement(ErrorElement),
      },
    ],
  },
  {
    path: '/register',
    element: React.createElement(Register),
    errorElement: React.createElement(Error),
  },
  {
    path: '/login',
    element: React.createElement(Login),
    errorElement: React.createElement(Error),
  },
]);
