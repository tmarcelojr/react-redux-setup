import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// provider
import { Provider } from 'react-redux'
import store from './store'
// import * as serviceWorker from './serviceWorker';

// Remember in order to provide the store into our app we need to provide provider
ReactDOM.render(
  // we wrap our App with Provider
  // we pass in the store we imported inside our store variable inside our Provider

  // We created our reducer, our reducer is passing out state to the store, and store is providing the state to the Provider to the App

  // now our store is our "single source of truth"
  // store holds all of our state that we can access throughout our whole entire <App /> and all of it's nested components
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
