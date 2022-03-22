import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Components/App/App';
import {BrowserRouter} from 'react-router-dom'

// import { store } from './app/store'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from "redux";
import userReducer from "./features/user";
import sneakersReducer from "./features/shoe";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const store = configureStore({
  reducer: {
    user: userReducer,
    sneakers: sneakersReducer
  },
})

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
