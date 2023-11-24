import { createStore } from 'easy-peasy';
import { appStore } from './app';
import { productStore } from './product';

export type AlertType = 'success' | 'danger';

export type Store = {};

export const store = createStore<Store>({
  products: productStore,
  cart: appStore,
});
