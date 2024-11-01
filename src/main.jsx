import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route , createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';
import Signin from './Signin/Signin';
import Products from './Products/Products.jsx'
import './index.css'
import Home from './Home/Home.jsx';
import { Provider } from 'react-redux';
import store from './Store/Store.js';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' index element={<Home />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />}/>
      <Route path='/Products' element={<Products />} />
      <Route path='/Cart' element={<Cart />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
