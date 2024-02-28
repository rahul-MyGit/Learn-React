// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//For wrapper , we need provider from react-redux and store
// just to import store here, we have exported it in app/store

import { Provider} from "react-redux";
import {store} from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>      
    <App />
  </Provider>,
)

//above insted of value in context , we call it here as store. and our store name is also 'store' so 
//we'll give the same value
