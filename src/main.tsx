import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout';
import Login from './pages/auth/Login';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
const router = createBrowserRouter([
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
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
