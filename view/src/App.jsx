import { createBrowserRouter,RouterProvider } from 'react-router'
import ROUTES from './Routes/routes'
const routes = createBrowserRouter(ROUTES)
import './App.css'

function App() {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
