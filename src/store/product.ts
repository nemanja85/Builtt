import { Action, action } from 'easy-peasy';
import { type GetProductResponse } from '../api/Product';

type ProductCartItem = GetProductResponse & {
  quantity?: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  count: number;
  addToBasket: Action<ProductState, ProductCartItem>;
  removeFromBasket: Action<ProductState, { id: number }>;
};

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],
  count: 0,
  addToBasket: action((state, payload) => {
    const productInBasket = state.productsInBasket.find((item) => item.id === payload.id);
    if (productInBasket) {
      state.count += 1;
    }
    state.productsInBasket.push(...[payload]);
  }),
  removeFromBasket: action((state, payload) => {
    const existingProduct = state.productsInBasket.find((item) => item.id === payload.id);
    if (existingProduct) {
      state.productsInBasket.pop();
    }
    state.count = Math.max(state.count - 1, 0);
  }),
};
