import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
function App() {

  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="/about"  element={<About/>} />

    </Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
