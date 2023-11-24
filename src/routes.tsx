import { redirect, RouteObject } from 'react-router-dom';
import { getProducts } from './api/Product';
import AppLayout from './layouts/AppLayout';
import Login from './pages/auth/Login';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

const authGuard = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return redirect('/auth/login?message=Molimo vas da se ulogujete');
  }
  return null;
};

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    loader: authGuard,
    children: [
      {
        path: '/shop',
        element: <Shop />,
        loader: () => getProducts(),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
];
