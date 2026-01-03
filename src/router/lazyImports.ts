import { ReduxStore } from '@/redux-store/store';
import { lazy } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router-dom';

export const Products = lazy(() => import('@/pages/Products'));
export const SingleProduct = lazy(() => import('@/pages/SingleProduct'));
export const Cart = lazy(() => import('@/pages/Cart'));
export const About = lazy(() => import('@/pages/About'));
export const Checkout = lazy(() => import('@/pages/Checkout'));
export const Orders = lazy(() => import('@/pages/Orders'));
export const Register = lazy(() => import('@/pages/Register'));
export const Login = lazy(() => import('@/pages/Login'));

export const loadProducts = async (args: LoaderFunctionArgs) => {
  const { loader } = await import('@/pages/Products');
  return loader(args);
};

export const loadSingleProduct = async (args: LoaderFunctionArgs) => {
  const { loader } = await import('@/pages/SingleProduct');
  return loader(args);
};

export const loadCheckout = (store: ReduxStore) => async (args: LoaderFunctionArgs) => {
  const { loader } = await import('@/pages/Checkout');
  return loader(store)(args);
};

export const loadOrders = (store: ReduxStore) => async (args: LoaderFunctionArgs) => {
  const { loader } = await import('@/pages/Orders');
  return loader(store)(args);
};

export const checkoutAction = (store: ReduxStore) => async (args: ActionFunctionArgs) => {
  const { action } = await import('@/components/Checkout/CheckoutForm');
  return action(store)(args);
};

export const loginAction = (store: ReduxStore) => async (args: ActionFunctionArgs) => {
  const { action } = await import('@/pages/Login');
  return action(store)(args);
};

export const registerAction = async (args: ActionFunctionArgs) => {
  const { action } = await import('@/pages/Register');
  return action(args);
};
