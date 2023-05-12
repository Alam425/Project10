import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import RecipeCard from './RecipeCard';
import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
  },{
    path: 'recipes/:genre/:id',
    element: <RecipeCard/>,
    loader: ({params}) => fetch(`https://assignment10-alam425.vercel.app/recipes/${params.genre}/${params.id}`)
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
