import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: '/movies', element: <MovieListPage />},
      {path: '/movies/:id', element: <MovieDetailPate />},
      {path: '/genre', element: <GenreList />},
      {path: '/genre/:id', element: <MovieByGenrePage />},
      {path: '*', element: <PageNotFound />}
    ] 
  }

]

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


