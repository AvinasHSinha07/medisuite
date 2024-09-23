import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainArea from './components/MainArea.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainArea   />,
      },
      {
        path: '/Abrechung',
        element: <MainArea />,
      },
      {
        path: '/Verordnungen',
        element: <MainArea />,
      },
      {
        path: '/Administration',
        element: <MainArea />,
      },
      {
        path: '/Logistik',
        element: <MainArea />,
      },
      {
        path: '/Schnittstellen',
        element: <MainArea />,
      },
      {
        path: '/Kosten',
        element: <MainArea />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
