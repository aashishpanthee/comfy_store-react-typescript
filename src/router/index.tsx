import { ErrorElement, Loading, LoginCardSkeleton, RegisterCardSkeleton } from '@/components';
import { Error, HomeLayout, Landing } from '@/pages';
import { loader as LandingPageLoader } from '@/pages/Landing';
import { store } from '@/redux-store/store';
import { withSuspense } from '@/utils/withSuspense';
import { createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cart,
  Checkout,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  checkoutAction,
  loadCheckout,
  loadOrders,
  loadProducts,
  loadSingleProduct,
  loginAction,
  registerAction,
} from './lazyImports';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingPageLoader,
      },
      {
        path: 'products',
        element: withSuspense(<Products />, <Loading />),
        errorElement: <ErrorElement />,
        loader: loadProducts,
      },
      {
        path: 'products/:id',
        element: withSuspense(<SingleProduct />),
        errorElement: <ErrorElement />,
        loader: loadSingleProduct,
      },
      {
        path: '/cart',
        element: withSuspense(<Cart />),
        errorElement: <ErrorElement />,
      },
      {
        path: '/about',
        element: withSuspense(<About />),
        errorElement: <ErrorElement />,
      },
      {
        path: '/checkout',
        element: withSuspense(<Checkout />),
        errorElement: <ErrorElement />,
        loader: loadCheckout(store),
        action: checkoutAction(store),
      },
      {
        path: '/orders',
        element: withSuspense(<Orders />),
        errorElement: <ErrorElement />,
        loader: loadOrders(store),
      },
    ],
  },
  {
    path: '/register',
    element: withSuspense(<Register />, <RegisterCardSkeleton />),
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: '/login',
    element: withSuspense(<Login />, <LoginCardSkeleton />),
    errorElement: <Error />,
    action: loginAction(store),
  },
]);