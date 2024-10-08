import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CiTimer } from "react-icons/ci";
import Button from '@mui/material/Button';
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";

const options = [
    'Last Day',
    'Last Week',
    'Last Month',
    'Last Year',
  ];
  
  const ITEM_HEIGHT = 48;
  


function DashboardBox(props){

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(<>

<Button className="dashboardBox" style={{
    backgroundImage:`linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`
}}>
    <div className="d-flex w-100">
        <div className="col1">
            <h4 className="text-white">Total Users</h4>
            <span className="text-white">277</span>
        </div>
        <div className="ms-auto">
            <span className="icon">{props.icon}</span>
        </div>
    </div>


    {
        props.grow === true ?
        <span className='chart'><IoMdTrendingUp /></span>
        :
        <span className='chart'><IoMdTrendingDown /></span>
    }

     <div className="d-flex bottomEle w-100 align-items-center">
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        <div className='icon-button ms-auto'>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}><span className='timer-icon'><CiTimer /></span>
            {option}
          </MenuItem>
        ))}
      </Menu>
        </div>
     </div>

</Button>


         
    
    </>)
};

export default DashboardBox;