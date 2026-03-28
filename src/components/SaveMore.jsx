import { useState } from "react";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";


function SaveMore() {

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

      <span onClick={handleClick} className="cursor-pointer text-white px-3 hover:text-gray-200">
        SAVE MORE ON APP
      </span>

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
            overflow: "visible",
          },
        }}
      >

        <div className="relative">

          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white" />

          <div className="w-[360px] p-4 bg-white text-center cursor-pointer pr-5">

            <h1 className="text-md pb-3 text-start">Download the App</h1>

            <img src="/assets/global-images/QR-Code.jpg" alt="QR-Code" />

            <Link to='/' className="flex justify-center gap-5 px-10 pt-6 pb-3">
                
              <img src="/assets/footer-images/store_img-1.png" alt="App Store" />
              <img src="/assets/footer-images/store_img-2.png" alt="Google Play" />
            
            </Link>

          </div>

        </div>

      </Popover>

    </>
  );

}

export default SaveMore;
