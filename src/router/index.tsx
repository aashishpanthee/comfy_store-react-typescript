import { AboutPageSkeleton, CartPageSkeleton, CheckoutPageSkeleton, ErrorElement, LoginCardSkeleton, OrdersPageSkeleton, ProductsSkeleton, RegisterCardSkeleton, SingleProductSkeleton } from '@/components';
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
  Signup,
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
        element: withSuspense(<Products />, <ProductsSkeleton />),
        errorElement: <ErrorElement />,
        loader: loadProducts,
      },
      {
        path: 'products/:id',
        element: withSuspense(<SingleProduct />, <SingleProductSkeleton />),
        errorElement: <ErrorElement />,
        loader: loadSingleProduct,
      },
      {
        path: '/cart',
        element: withSuspense(<Cart />, <CartPageSkeleton />),
        errorElement: <ErrorElement />,
      },
      {
        path: '/about',
        element: withSuspense(<About />, <AboutPageSkeleton />),
        errorElement: <ErrorElement />,
      },
      {
        path: '/checkout',
        element: withSuspense(<Checkout />, <CheckoutPageSkeleton />),
        errorElement: <ErrorElement />,
        loader: loadCheckout(store),
        action: checkoutAction(store),
      },
      {
        path: '/orders',
        element: withSuspense(<Orders />, <OrdersPageSkeleton />),
        errorElement: <ErrorElement />,
        loader: loadOrders(store),
      },
    ],
  },
  {
    path: '/register',
    element: withSuspense(<Signup />, <RegisterCardSkeleton />),
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