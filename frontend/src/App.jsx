import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Register from './account/register/Register.jsx';
import Login from './account/login/Login.jsx';
import Faq from './components/faq/Faq.jsx';
function App() {

  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="/about"  element={<About/>} />
    <Route path="/contact"  element={<Contact/>} />
    <Route path="/faq"  element={<Faq/>} />




    <Route path="/register"  element={<Register/>} />
    <Route path="/login"  element={<Login/>} />

    </Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
