import { RouteObject } from 'react-router-dom';
import { getProducts } from './api/Product';
import AppLayout from './layouts/AppLayout';
import Login from './pages/auth/Login';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/shop',
    element: <Shop />,
    loader: () => {
      return getProducts();
    },
  },
];
