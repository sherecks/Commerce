import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' 

import {createBrowserRouter, RouterProvider } from "react-router-dom"

import Product from "./Pages/Product"
import Cart from './Pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/Product",
    element: <Product />,
  },
  {
    path:"/Cart",
    element: <Cart />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
