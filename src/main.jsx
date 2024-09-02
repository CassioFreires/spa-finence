import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Pages/Home'
import Cards from './Pages/Cards'
import Transaction from './Pages/Transaction'
import Categoryes from './Pages/Categoryes'
import Users from './Pages/Users'
import NotFound from './Pages/NotFound'
import NavBarNavegation from "./components/NavBarNavegation";
import App from './App'
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/usuarios',
        element: <Users />,
      },
      {
        path: '/cartoes',
        element: <Cards />,
      },
      {
        path: '/transacoes',
        element: <Transaction />,
      },
      {
        path: '/categorias',
        element: <Categoryes />,
      },
      {
        path:'/signin',
        element: <SignIn />
      },
      {
        path:"/signup",
        element: <SignUp/>
      }
      ,
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
