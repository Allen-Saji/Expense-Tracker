import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
    <div className="container">
      <Header />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
     </Routes>
     <Footer />
    </div>
    </>
  )
}

export default App
