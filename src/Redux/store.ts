import { createStore, Store } from 'redux';
import reducer, { CounterState } from './reducers';

const store: Store = createStore(reducer);

// export type RootState = ReturnType<typeof store.getStore>;
export type RootState = CounterState;

export default store;
