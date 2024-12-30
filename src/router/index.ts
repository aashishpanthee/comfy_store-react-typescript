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
    element: React.createElement(Landing),
  },
  {
    path: '/cart',
    element: React.createElement(Cart),
  },
  {
    path: '/about',
    element: React.createElement(About),
  },
]);
