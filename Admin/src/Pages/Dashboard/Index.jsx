import DashboardBox from "./Components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CiTimer } from "react-icons/ci";
import { PieChart } from '@mui/x-charts/PieChart';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import ProductData from "./Components/ProductData";



const options = [
    'Last Day',
    'Last Week',
    'Last Month',
    'Last Year',
  ];
  
  const ITEM_HEIGHT = 48;
  


function Dashboard(){
  const [products,setProducts] = useState(ProductData);

    const [anchorEl, setAnchorEl] = useState(null);
    const [shopBy, setshopBy] = useState('');
    const [categoryBy, setcategoryBy] = useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(<>
  
  <div className="dashboard-content w-100">
    <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
        <div className="dashboardBoxWrapper d-flex">
            <DashboardBox color={['rgb(29, 162, 86)','rgb(72, 212, 131)']} icon={<FaUserCircle />} grow={true}/>
            <DashboardBox color={['rgb(192, 18, 226)','rgb(235, 100, 254)']} icon={<FaCartShopping />}grow={true}/>
            <DashboardBox color={['rgb(44, 120, 229)','rgb(96, 175, 245)']} icon={<FaShoppingBag />} grow={false}/>
            <DashboardBox color={['rgb(225, 149, 14)','rgb(243, 205, 41)']} icon={<GiStarsStack />} grow={false}/>
        </div>
        </div>
        <div className="col-md-4 pl-0 topPart2">
        <div className="box graphBox">
        <div className="d-flex bottomEle w-100 align-items-center">
        <h6 className="text-white mb-0 mt-0">Total Sales</h6>
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
     <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
        <p>$3,578.90 in last month</p>
        <div className="pieChart">
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 12, label: '2023' },
            { id: 1, value: 12, label: '2024' },
            { id: 2, value: 10, label: '2025' },
            { id: 3, value: 10, label: '2026' },
          ],
        },
      ]}
      width={250}
      height={150}
    />
        </div>
        </div>
        </div>
    </div>

    <div className="card shadow border-0 p-3 mt-4">
      <h3 className="hd">Best Selling Products</h3>
      <div className="row cardFilters mt-3">
        <div className="col-md-3">
            <h4>SHOP BY</h4>
            <FormControl size="small" className="w-100">
            <Select
          value={shopBy}
          onChange={(e)=>setshopBy(e.target.value)}
          className="w-100"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          labelId="demo-select-small-label"
        >
          <MenuItem value="">
            <em>Brands</em>
          </MenuItem>
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Children</MenuItem>
        </Select>
        </FormControl>

        </div>
        <div className="col-md-3">
            <h4>CATEGORY BY</h4>
            <FormControl size="small" className="w-100">
            <Select
          value={categoryBy}
          onChange={(e)=>setcategoryBy(e.target.value)}
          className="w-100"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          labelId="demo-select-small-label" 
        >
          <MenuItem value="">
            <em>Fashion</em>
          </MenuItem>
          <MenuItem value={10}>Top Brands</MenuItem>
          <MenuItem value={20}>Western Wear</MenuItem>
          <MenuItem value={30}>Eyhnic Wear</MenuItem>
        </Select>
        </FormControl>
        </div>
      </div>

      <div className="table-responsive mt-3">
      <table className="table table-bordered table-striped">
        <thead className="theme-dark">
          <tr>
            <th>UID</th>
            <th>PRODUCT</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>ORDER</th>
            <th>SALES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product)=>(
            <tr key={product.productID}>
            <td className="align-middle">{product.productID}</td>
            <td className="align-middle">
              <div className="productBox d-flex align-items-center">
                <div className="imagewrapper">
                  <div className="img card shadow m-0">
                   <img src={product.productImage}/>
                  </div>
                </div>
                <div className="info ps-3">
                    <h6>{product.productTitle}</h6>
                </div>

              </div>
            </td>
            <td className="align-middle">{product.categories}</td>
            <td className="productName align-middle">{product.productTitle}</td>
            <td className="align-middle">{product.price}</td>
            <td className="align-middle">{product.stock}</td>
            <td className="align-middle">{product.reviews}</td>
            <td className="align-middle">{product.order}</td>
            <td className="align-middle">{product.qnty}</td>
            <td className="align-middle">
              <div className="actions d-flex align-items-center">
                <Button className="secondary"><IoIosEye /></Button>
                <Button className="success"><MdModeEdit /></Button>
                <Button className="delete"><MdDelete /></Button>
              </div>
            </td>
          </tr>
        ))}
          </tbody>
      </table>

    </div>



      

    </div>

    
  </div>
    </>)
};

export default Dashboard;