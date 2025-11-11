import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import AdminLayout from "./layout/AdminLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPAge"
import MoviePage from "./pages/MoviePage"
import AdminPage from "./pages/admin/AdminPage"
import AdminMovieCreate from "./pages/admin/AdminMovieCreate"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLayout />} >
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/movies/create" element={<AdminMovieCreate />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
