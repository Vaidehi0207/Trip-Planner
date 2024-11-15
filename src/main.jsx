import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/ui/custom/Header'

const router = createBrowserRouter([
{
  // in this we can define all the path for which we want to create the route
   path:'/',
   element: <App/>
},
{
  path:'/create-trip',
  element: <CreateTrip/>

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* as we want our header to be constant in all pages 
    so we are adding header here */}
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
