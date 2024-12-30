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
export const routes = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(HomeLayout),
    children: [
      {
        index: true,
        element: React.createElement(Landing),
      },
      {
        path: 'products',
        element: React.createElement(Products),
      },
      {
        path: 'products/:id',
        element: React.createElement(SingleProduct),
      },
      {
        path: '/cart',
        element: React.createElement(Cart),
      },
      {
        path: '/about',
        element: React.createElement(About),
      },
      {
        path: '/checkout',
        element: React.createElement(Checkout),
      },
      {
        path: '/orders',
        element: React.createElement(Orders),
      },
    ],
  },
  { path: '/register', element: React.createElement(Register) },
  { path: '/login', element: React.createElement(Login) },
]);
