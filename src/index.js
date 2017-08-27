import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App/AppContainer';
import './index.css';
import { Provider } from 'react-redux'
import Store from './store/index';

ReactDOM.render(
  <Provider store={Store}>
    <AppContainer />
  </Provider >,
  document.getElementById('root')
);
