import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/movies" element={<h1>Movies Page</h1>} />
            <Route path="/movies/:id" element={<h1>Movie Page</h1>} />
            <Route path="/admin" element={<h1>Admin Page</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
