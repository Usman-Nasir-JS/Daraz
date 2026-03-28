import { useState } from "react";
import Popover from "@mui/material/Popover";

function Language() {

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
        زبان تبدیل کریں
      </span>

      <Popover open={open} anchorEl={anchorEl} onClose={handleClose}

        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}

        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}

        PaperProps={{
          sx: {
            marginTop: "10px",
            marginLeft: "-40px",
            overflow: "visible",
          },
        }}

      >

        <div className="relative">

          <div className="absolute -top-2 right-0.5 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"/>

          <div className="w-[260px] p-2 bg-white">

            <div className="flex justify-center gap-5">

              <div className="flex justify-center gap-1.5 items-center">

                <img src="/assets/global-images/pak-flag.png" alt="PAK Flag" width='45px' />
                <p className="text-xs">UR / Urdu</p>
                
              </div>

              <div className="flex justify-center items-center">
                
                <img src="/assets/global-images/usa-flag.png" alt="USA Flag" width='45px' />
                <p className="text-xs">EN /<br />English</p>
                
              </div>

            </div>

          </div>

        </div>

      </Popover>

    </>
  )

}

export default Language;
