import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Layout from './assets/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github from './components/GitHub/Github.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },{
        path:"about",
        element:<About/>
      },{
        path:'user/:id',
        element:<User/>
      },{
        path:'/Github',
        element:<Github/>,
        
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
