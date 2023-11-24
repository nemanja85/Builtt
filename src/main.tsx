import { StoreProvider } from 'easy-peasy';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import { store } from './store/store';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <StoreProvider store={store} />
  </StrictMode>
);
