import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import './Resposive.css'
import Dashboard from './Pages/Dashboard/Index'
import Header from './Components/Header/Index'
import SideBar from './Components/SideBar/Index'
import { createContext, useEffect, useState } from 'react'
import Analysis from './Pages/Analysis/Analysis'
import OrderUpdate from './Pages/OrderUpdate/OrderUpdate'
import UserDetails from './Pages/UserDetails/UserDetails'
import Edit from './Components/UserInfo/Edit/Edit'
import Add from './Components/UserInfo/Add/Add'
import Update from './Components/UserInfo/Update/Update'
import Delete from './Components/UserInfo/Delete/Delete'

const Mycontext = createContext();



function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);


  useEffect(()=>{

    const handleResize = ()=>{
      setWindowWidth(window.innerWidth)
    }
  
    window.addEventListener('resize',handleResize);

    return()=>{ 
    window.removeEventListener('resize', handleResize);
    }

  },[]);

  const openNav=()=>{
    setIsOpenNav(true);
  }

  
  const closeNav=()=>{
    setIsOpenNav(false);
  }


  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    windowWidth,
    openNav,
    isOpenNav,
    closeNav,
    setIsOpenNav
  }

  return (
    <>
      <BrowserRouter>
      <Mycontext.Provider value={values}>
      <Header/>
      <div className="main d-flex">
       <>
       <div className={`sidebar-wrapper ${isToggleSidebar === true ? 'toggle' : ''} ${isOpenNav === true ? 'show' : ''}`}>
          <SideBar/>
      </div>
      
      
       </>
      <div className={`content ${isToggleSidebar === true ? 'toggle' : ''}`}>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/orderupdate' element={<OrderUpdate/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
      </div>
      </div>

      </Mycontext.Provider>
      </BrowserRouter>
        
    </>
  )
}

export default App;
export {Mycontext}
