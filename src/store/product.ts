import { Action, action } from 'easy-peasy';
import { type GetProductResponse } from '../api/Product';

type ProductCartItem = GetProductResponse & {
  quantity?: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  count: number;
  addToBasket: Action<ProductState, { id: number }>;
  removeFromBasket: Action<ProductState, void>;
  countIncrement: Action<ProductState, void>;
  countDecrement: Action<ProductState, void>;
};

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],
  count: 0,
  addToBasket: action((state, payload) => {
    if (state.count > 0) {
      state.productsInBasket.push(payload.id);
    }
  }),
  removeFromBasket: action((state) => {
    state.count = Math.max(state.count - 1, 0);
    state.productsInBasket.pop();
  }),
  countIncrement: action((state) => {
    state.count += 1;
  }),
  countDecrement: action((state) => {
    state.count = Math.max(state.count - 1, 0);
  }),
};
