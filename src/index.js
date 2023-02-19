import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state = {state}
           dispatch={store.dispatch.bind(store)}
           store = {store}
      />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});
