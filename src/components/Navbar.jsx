import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentIcon from '@mui/icons-material/Payment';
import Popover from "@mui/material/Popover";
import SaveMore from './SaveMore';
import Language from './Language';
import Signup from './Signup';
import Login from './Login';


function MenuItem({ icon, text }) {

  let path;

  if (text === "Help Center") {
    path = "/helpcenter";
  } 
  else {
    path = "/helpcenter/faq";
  }

  return (
    <Link to={path}>

      <div className="flex items-center gap-3 py-2 px-2 cursor-pointe rrounded">

        <span className="text-gray-400">
          {icon}
        </span>

        <p className="text-gray-700 text-[14px] hover:text-orange-500 hover:underline">
          {text}
        </p>

      </div>

    </Link>
  );

}


function Navbar() {

  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenSignup = () => {
      setOpenSignup(true);
  };

  const handleCloseSignup = () => {
      setOpenSignup(false);
  };

  const handleOpenLogin = () => {
      setOpenLogin(true);
  };

  const handleCloseLogin = () => {
      setOpenLogin(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <nav className="w-full bg-[#f85606]">
  
        <div className="px-5 max-w-[1250px] mx-auto flex flex-col pt-1">
    
          <div className="flex justify-end text-white gap-8 text-[12.2px] flex-wrap">

            <SaveMore />

            <Link className='hover:text-gray-200' to="/sellondaraz">SELL ON DARAZ</Link>
            
            <button onClick={handleClick} className='hover:text-gray-200 cursor-pointer'>
                HELP & SUPPORT
            </button>
            
            <button onClick={handleOpenLogin} className="hover:text-gray-200 cursor-pointer">
                LOGIN
            </button>
            
            <button onClick={handleOpenSignup} className="hover:text-gray-200 cursor-pointer">
                SIGN UP
            </button>
            
            <Language />
                    
          </div>

        </div>

      </nav>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}

        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}

        PaperProps={{
          sx: {
            marginTop: "10px",
            overflow: "visible", // arrow show karne ke liye zaroori
          },
        }}
      >

        <div className="relative">

          
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"/>


          <div className="w-[250px] p-4 bg-white">

            <MenuItem
              icon={<HelpOutlineIcon />}
              text="Help Center"
            />

            <MenuItem
              icon={<HeadsetMicIcon />}
              text="Contact Customer Care"
            />

            <MenuItem
              icon={<Inventory2Icon />}
              text="Order"
            />

            <MenuItem
              icon={<LocalShippingIcon />}
              text="Shipping & Delivery"
            />

            <MenuItem
              icon={<PaymentIcon />}
              text="Payment"
            />

            <MenuItem
              icon={<CurrencyExchangeIcon />}
              text="Returns & Refunds"
            />

          </div>

        </div>

      </Popover>


      <Signup open={openSignup} handleClose={handleCloseSignup} openLogin={handleOpenLogin} />

      <Login open={openLogin} handleClose={handleCloseLogin} openSignup={handleOpenSignup} />


      <div className="w-full bg-[#f85606] sticky top-0 z-50">
  
        <div className="px-10 max-w-[1250px] mx-auto flex pt-4 pb-6 gap-2 sm:gap-14 flex-wrap items-center">
                        
          <img src="/assets/global-images/daraz-logo.png" alt="Logo" width="120" className='cursor-pointer' />

          <div className="flex items-center">
                    
            <input type="text" className="bg-white pl-5 lg:w-164 md:w-100 sm:w-40 h-10.5 select-none focus:outline-none focus:ring-0 text-black placeholder:text-gray-400 text-[14px] rounded-l" placeholder="Search in Daraz" />

            <p className="bg-[#ffe1d2] text-[#f85e11] p-[8.45px] px-2.5 cursor-pointer rounded-r">
              <SearchIcon />
            </p>

            <img src="/assets/global-images/Shop-cart.png" alt="basket" className="h-10 w-14 ml-5 cursor-pointer"/>
      
          </div>

        </div>

      </div>

    </>
  )
    
}

export default Navbar;
