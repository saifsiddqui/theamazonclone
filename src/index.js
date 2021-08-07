import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './Reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StateProvider>,
  document.getElementById('root')
);


