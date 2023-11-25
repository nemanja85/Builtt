import { createStore } from 'easy-peasy';
import { appStore, type AppState } from './app';
import { productStore, type ProductState } from './product';

export type Store = {
  products: ProductState;
  app: AppState;
};

export const store = createStore<Store>({
  products: productStore,
  app: appStore,
});
