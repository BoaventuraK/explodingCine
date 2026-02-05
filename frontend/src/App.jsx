import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./componensts/Navbar"
import Movies from "./pages/Movies"
import Forum from "./pages/Forum"
import Footer from "./componensts/Footer"

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>

          <main>
            <Routes>
              <Route path="/" element={<Movies/>} />
              <Route path="/forum" element={<Forum/>} />
            </Routes>
          </main>


          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
