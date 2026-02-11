import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Navbar from "./components/Navbar"
import Movies from "./pages/Movies"
import Forum from "./pages/Forum"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
