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
import { loader as LandingPageLoader } from '../pages/Landing';
import { loader as ProductsLoader } from '../pages/Products';
import { loader as SingleProductLoader } from '../pages/SingleProduct';
import { loader as CheckoutLoader } from '../pages/Checkout';
import { loader as OrdersLoader } from '../pages/Orders';
//actions
import { action as registerUser } from '@/pages/Register';
import { action as loginUser } from '@/pages/Login';
import { action as checkoutAction } from '@/components/Checkout/CheckoutForm';
import { store } from '@/redux-store/store';
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
        loader: LandingPageLoader,
      },
      {
        path: 'products',
        element: React.createElement(Products),
        errorElement: React.createElement(ErrorElement),
        loader: ProductsLoader,
      },
      {
        path: 'products/:id',
        element: React.createElement(SingleProduct),
        errorElement: React.createElement(ErrorElement),
        loader: SingleProductLoader,
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
        loader: CheckoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: '/orders',
        element: React.createElement(Orders),
        errorElement: React.createElement(ErrorElement),
        loader: OrdersLoader(store),
      },
    ],
  },
  {
    path: '/register',
    element: React.createElement(Register),
    errorElement: React.createElement(Error),
    action: registerUser,
  },
  {
    path: '/login',
    element: React.createElement(Login),
    errorElement: React.createElement(Error),
    action: loginUser(store),
  },
]);
