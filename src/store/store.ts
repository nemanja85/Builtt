import { createStore } from 'easy-peasy';
import { appStore, type AppState } from './app';
import { productStore, type ProductState } from './product';

export type Store = {
  products: ProductState;
  app: AppState;
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object | undefined
    ? DeepPartial<T[P]>
    : T[P];
};

const getInitialState = (): DeepPartial<Store> | undefined => {
  if (typeof window === 'undefined') return undefined;
  try {
    const mockStore = localStorage.getItem('mockStore');
    if (mockStore) {
      const parsed = JSON.parse(mockStore);
      const initialProducts: Partial<ProductState> = {};
      if (parsed.products) {
        if (parsed.products.productsInBasket) {
          initialProducts.productsInBasket = parsed.products.productsInBasket;
        }
        if (parsed.products.products) {
          initialProducts.products = parsed.products.products;
        }
        if (parsed.products.subtotal !== undefined) {
          initialProducts.mockSubtotal = parsed.products.subtotal;
        }
        if (parsed.products.discount !== undefined) {
          initialProducts.mockDiscount = parsed.products.discount;
        }
        if (parsed.products.grandTotal !== undefined) {
          initialProducts.mockGrandTotal = parsed.products.grandTotal;
        }
      }
      return {
        products: initialProducts as DeepPartial<ProductState>,
        app: parsed.app,
      };
    }
  } catch (e) {
    console.error('Failed to parse mockStore from localStorage', e);
  }
  return undefined;
};

export const store = createStore<Store, DeepPartial<Store>>(
  {
    products: productStore,
    app: appStore,
  },
  {
    initialState: getInitialState(),
  }
);
