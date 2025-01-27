import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Register from './account/register/Register.jsx';
import Login from './account/login/Login.jsx';
import Faq from './components/faq/Faq.jsx';
import Products from './components/products/Products.jsx';
import ProductDetails from './components/products/ProductDetails.jsx';
import TermsCondition from './components/TermsAndConditions/TermsCondition.jsx';

import ScrollToTop from './utils/ScrollToTo.JSX';
function App() {

  return (
    <>
  <Router>
    <ScrollToTop/>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="/about"  element={<About/>} />
    <Route path="/contact"  element={<Contact/>} />
    <Route path="/faq"  element={<Faq/>} />
    <Route path="/products"  element={<Products/>} />
    <Route path="/single-products"  element={<ProductDetails/>} />
    <Route path="/terms-condition"  element={<TermsCondition/>} />



    <Route path="/register"  element={<Register/>} />
    <Route path="/login"  element={<Login/>} />

    </Route>
    </Routes>
  </Router>
    </>
  )
}
export default App
