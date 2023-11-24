import { createStore } from 'easy-peasy';
import { appStore } from './app';
import { productStore } from './product';

export type AlertType = 'success' | 'danger';

type Store = {};

export const store = createStore<Store>({
  products: productStore,
  cart: appStore,
});
