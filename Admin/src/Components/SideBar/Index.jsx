import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoMdLogOut } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { Mycontext } from '../../App';
import { IoClose } from "react-icons/io5";
import { BsCollectionFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { HiChat } from "react-icons/hi";
import { PiInvoiceBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

function SideBar(){

    const [activeTab, setActiveTab]= useState(0)
    const [isToggleSubmenu, setIsToggleSubmenu]= useState(false)
    const [openCategory, setOpenCategory] = useState(null);

    const context = useContext(Mycontext);

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
          setIsToggleSubmenu(!isToggleSubmenu);
        } else {
          setActiveTab(index);
          setIsToggleSubmenu(true);
        }
      };

      const toggleSubmenu = (category) => {
        if (openCategory === category) {
          setOpenCategory(null); 
        } else {
          setOpenCategory(category);
        }
      };

    return(<>
    <div className="Sidebar-box">
        <ul>
            <li>
                <Link to={'/'}>
                <Button className='closeButton' onClick={()=>context.closeNav()}><IoClose /></Button>
        <Button className={`w-100 custom-hover ${activeTab===0 ?'active':''}`} onClick={()=>isOpenSubmenu(0)}><span className='icons'><MdDashboard /></span>
        Dashboard
        <span className='arrow'><MdOutlineArrowForwardIos /></span>
        </Button>
        </Link>
        <div className={`submenuwrapper ${activeTab===0 && isToggleSubmenu===true ? 'colapse':'colapsed'}`}>
        <div className='submenu'>
            <ul>
                <li><Link to={'/analysis'}>Analysis</Link></li>
                <li><Link to={'/orderupdate'}>Order Update</Link></li>
                <li><Link to={'/userdetails'}>User Details</Link></li>
            </ul>
        </div>
        </div>
        </li>
        <li>
        <Button className={`w-100 custom-hover ${activeTab===1 ?'active':''}`} onClick={()=>isOpenSubmenu(1)}><span className='icons'><BsCollectionFill /></span>
          Collection
        <span className='arrow'><MdOutlineArrowForwardIos /></span>
        </Button>
        <div className={`submenuwrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse':'colapsed'}`}>
        <div className='submenu2'>
        <ul>
        <li>
        <Button onClick={() => toggleSubmenu('corporate')}>Corporate Tab <span className='arrow'><IoMdArrowDropright />
        </span></Button>
              {openCategory === 'corporate' && (
                <ul className='subcategories'>
                  <li className='submenu'><Link to={'/'}>Edit</Link></li>
                  <li className='submenu'><Link to={'/'}>Add</Link></li>
                  <li className='submenu'><Link to={'/'}>Update</Link></li>
                  <li className='submenu'><Link to={'/'}>Delete</Link></li>
                </ul>
              )}
          
        </li>
        <li>
        <Button onClick={() => toggleSubmenu('school')}>School Tab <span className='arrow'><IoMdArrowDropright />
        </span></Button>
              {openCategory === 'school' && (
                <ul className='subcategories'>
                  <li className='submenu'><Link to={'/'}>Edit</Link></li>
                  <li className='submenu'><Link to={'/'}>Add</Link></li>
                  <li className='submenu'><Link to={'/'}>Update</Link></li>
                  <li className='submenu'><Link to={'/'}>Delete</Link></li>
                </ul>
              )}
        </li>
      </ul>
        </div>
        </div>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===2 ?'active':''}`} onClick={()=>isOpenSubmenu(2)}><span className='icons'><FaInfoCircle /></span>
          User Info
        <span className='arrow'><MdOutlineArrowForwardIos /></span>
        </Button>
        </Link>
        <div className={`submenuwrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse':'colapsed'}`}>
        <div className='submenu'>
            <ul className='subcategories'>
                <li className='submenu'><Link to={'/edit'}>Edit</Link></li>
                <li className='submenu'><Link to={'/add'}>Add</Link></li>
                <li className='submenu'><Link to={'/update'}>Update</Link></li>
                <li className='submenu'><Link to={'/delete'}>Delete</Link></li>
            </ul>
        </div>
        </div>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===3 ?'active':''}`} onClick={()=>isOpenSubmenu(3)}><span className='icons'><MdBorderColor /></span>
          Orders Update
        <span className='arrow'><MdOutlineArrowForwardIos /></span>
        </Button>
        </Link>
        <div className={`submenuwrapper ${activeTab===3 && isToggleSubmenu===true ? 'colapse':'colapsed'}`}>
        <div className='submenu'>
            <ul>
                <li><Link to={'/'}>Cutting</Link></li>
                <li><Link to={'/'}>Stiching</Link></li>
                <li><Link to={'/'}>Hand Over to Courier</Link></li>
            </ul>
        </div>
        </div>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===4 ?'active':''}`} onClick={()=>isOpenSubmenu(4)}><span className='icons'><HiChat /></span>
          Chat
        </Button>
        </Link>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===5 ?'active':''}`} onClick={()=>isOpenSubmenu(5)}><span className='icons'><PiInvoiceBold /></span>
          Invoice
        </Button>
        </Link>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===6 ?'active':''}`} onClick={()=>isOpenSubmenu(5)}><span className='icons'><FaTruck /></span>
          Delivery Update
        </Button>
        </Link>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===5 ?'active':''}`} onClick={()=>isOpenSubmenu(5)}><span className='icons'><IoIosSettings /></span>
          Settings
        </Button>
        </Link>
        </li>
        <li>
                <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===6 ?'active':''}`} onClick={()=>isOpenSubmenu(6)}><span className='icons'><IoPersonSharp /></span>
        Login
        </Button>
        </Link>
        </li>
        <li>
        <Link to={'/'}>
        <Button className={`w-100 custom-hover ${activeTab===7 ?'active':''}`} onClick={()=>isOpenSubmenu(7)}><span className='icons'><FaUserCheck /></span>
          Sign Up
        </Button>
        </Link>
        </li>
        </ul>
        <div className="logoutwrapper">
            <div className="logoutBox">
        <Button variant="contained"><span className='btn-icon'><IoMdLogOut /></span>Logout</Button>
        </div>
        </div>

    </div>
    </>)
};

export default SideBar;