import { createTypedHooks } from 'easy-peasy';
import { type Store } from './store/store';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<Store>();

export { useStore, useStoreActions, useStoreDispatch, useStoreState };
