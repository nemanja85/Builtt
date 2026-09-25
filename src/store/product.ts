import { action, computed, type Action, type Computed } from 'easy-peasy';
import { type GetProductResponse } from '../api/products';

export type ProductCartItem = Partial<GetProductResponse> & {
  id: number;
  quantity?: number;
  name?: string;
  price?: number;
};

export type ProductState = {
  products: GetProductResponse[];
  productsInBasket: ProductCartItem[];
  mockSubtotal?: number;
  mockDiscount?: number;
  mockGrandTotal?: number;
  addToBasket: Action<ProductState, number>;
  removeFromBasket: Action<ProductState, number>;
  removeItem: Action<ProductState, number>;
  setProducts: Action<ProductState, GetProductResponse[]>;
  subtotal: Computed<ProductState, number>;
  discount: Computed<ProductState, number>;
  grandTotal: Computed<ProductState, number>;
};

// helper funkcije van store-a — čistije i lakše za testiranje
const getPrice = (item: ProductCartItem): number =>
    item.currentPrice ?? item.price ?? 0;

const getOldPrice = (item: ProductCartItem): number =>
    item.oldPrice ?? getPrice(item);

export const productStore: ProductState = {
  products: [],
  productsInBasket: [],

  addToBasket: action((state, payload) => {
    const existing = state.productsInBasket.find((x) => x.id === payload);

    if (existing) {
      existing.quantity = (existing.quantity ?? 0) + 1;
      return;
    }

    const product = state.products.find((x) => x.id === payload);

    if (!product) {
      return;
    }

    state.productsInBasket.push({ ...product, quantity: 1 } as ProductCartItem);
  }),

  removeFromBasket: action((state, payload) => {
    const existing = state.productsInBasket.find((x) => x.id === payload);

    if (!existing) return;

    const currentQty = existing.quantity ?? 1;

    if (currentQty > 1) {
      existing.quantity = currentQty - 1;
      return;
    }

    const idx = state.productsInBasket.findIndex((x) => x.id === payload);
    if (idx !== -1) {
      state.productsInBasket.splice(idx, 1);
    }
  }),

  removeItem: action((state, payload) => {
    const idx = state.productsInBasket.findIndex((x) => x.id === payload);
    if (idx !== -1) {
      state.productsInBasket.splice(idx, 1);
    }
  }),

  setProducts: action((state, payload) => {
    state.products = payload;
  }),

  subtotal: computed((state) => {
    if (state.mockSubtotal !== undefined) return state.mockSubtotal;

    return state.productsInBasket.reduce((acc, item) => {
      const qty = item.quantity ?? 1;
      return acc + qty * getPrice(item);
    }, 0);
  }),

  discount: computed((state) => {
    if (state.mockDiscount !== undefined) return state.mockDiscount;

    return state.productsInBasket.reduce((acc, item) => {
      const qty = item.quantity ?? 1;
      return acc + qty * (getOldPrice(item) - getPrice(item));
    }, 0);
  }),

  grandTotal: computed((state) =>
      state.mockGrandTotal !== undefined
          ? state.mockGrandTotal
          : state.subtotal - state.discount
  ),
};