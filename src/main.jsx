import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Themeprovider from './Theme'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const App = React.lazy(()=> import('./App'))
const Login = React.lazy(()=> import('./login'))


const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <h1>Error</h1>},
  {path: "/login", element: <Login />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Themeprovider>
      <Suspense>
          <RouterProvider  router={router}/>
      </Suspense>
   </Themeprovider>
  </React.StrictMode>
)
