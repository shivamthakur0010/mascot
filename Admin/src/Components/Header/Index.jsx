
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import SearchBox from "../SearchBox/Index";
import { MdLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useContext, useState } from "react";
import { Mycontext } from "../../App";


function Header(){

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(Mycontext);

    return(
        <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    <div className="col-lg-2 part1">
                        <Link to={'/'} className="d-flex logo align-items-center" style={{textDecoration:'none'}}><img  src="http://localhost:3000/mascot.png" style={{height:'50px',textAlign:'center'}}/></Link>
                         
                    </div>

                    {
                      context.windowWidth >992 && <div className="col-lg-3 d-flex align-items-center part2">
                      <Button className="rounded-button me-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                        {
                          context.isToggleSidebar === false ? <MdMenuOpen /> : <IoMdMenu />
                        }

                      </Button>
                      {/* <Button ><MdMenu /></Button> */}
                      <div className="search-bar">< SearchBox/></div>

                  </div>
                    }

                    <div className="col-lg-7 d-flex align-items-center part3">
                    <Button className="rounded-button me-3"><FaRegBell /></Button>
                    <Button className="rounded-button me-3" onClick={()=>context.openNav()}><IoMdMenu /></Button>
                    <Button className="rounded-button me-3"><FiShoppingCart /></Button>
                    {/* <Button className="rounded-button me-3"><MdOutlineMail /></Button> */}
                    <Button className="myAcc d-flex align-items-center" onClick={handleClick}>
                        <div className="userimage">
                            <span className="rounded-circle">
                                <img src="/mascot-logo.jpg"></img>
                            </span>
                        </div>
                        <div className="userInfo res-hide">
                                <h4>MASCOT UNIFORMS</h4>
                                <p className="mb-0">thinkmascot@gmail.com</p>
                            </div>
                    </Button>

                    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

                    </div>
                </div>
            </div>
        </header>
        </>
    )
};

export default Header;