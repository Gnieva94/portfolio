import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import {Home} from "../../Routes/Home/Home"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes >
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
