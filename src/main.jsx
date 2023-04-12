import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './Components/Home/Statistics/Statistics';
import AppliedJobs from './Components/Home/AppliedJobs/AppliedJobs';
import Home from './Components/Home/Home/Home';
import Default from './Components/Home/Default/Default';
import Blog from './Components/Home/Blog/Blog';
import ShowDetails from './Components/Home/ShowDetails/ShowDetails';
import NotFound from './Components/Home/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Default></Default>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/jobDetails/:Id",
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
