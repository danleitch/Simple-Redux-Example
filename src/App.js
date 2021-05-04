import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './Redux/store';
import "./App.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}
export default App;