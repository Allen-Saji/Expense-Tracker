import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import ManageDebit from "./pages/ManageDebit";
import ManageCredit from "./pages/ManageCredit"
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <div className="container">
      <Header />
     <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Home /> }/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/credit" element={<ManageCredit />}/>
      <Route path="/debit" element={<ManageDebit />}/>
     </Routes>
     <Footer />
    </div>
    </>
  )
}

export default App
