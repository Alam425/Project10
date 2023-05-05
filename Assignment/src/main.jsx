import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Blog';
import AuthProvider from './AuthProvider';
import Register from './Register';
import Login from './Login';
import Error from './Error';
import EmailLogin from './EmailLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <Blog />
  },{
    path: 'login',
    element: <Login/>
  },{
    path: 'register',
    element: <Register/>
  },{
    path: 'emailLogin',
    element: <EmailLogin/>
  },
  {
    path: '*',
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
