import React from 'react';
import './index.css';
import App from './App';
import store from "./store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
 
  </StrictMode>,
)
