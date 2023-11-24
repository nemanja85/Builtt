import { Action, action } from 'easy-peasy';
import { type GetProductResponse } from '../api/Product';

type ProductCartItem = GetProductResponse & {
  quantity?: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  addToBasket: Action<ProductState, number>;
};

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],
  addToBasket: action((state, payload) => {
    /*state.productsInBasket.push(payload);*/
  }),
};
