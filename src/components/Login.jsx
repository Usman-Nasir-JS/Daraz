import * as React from "react";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Signup from "./Signup";


const Transition = React.forwardRef(function Transition(props, ref) {

  return <Slide direction="up" ref={ref} {...props} />;

});


function Login({ open, handleClose }) {

  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenSignup = () => {
  
    handleClose();
    setOpenSignup(false);

  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (

    <Dialog
      
      open={open}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="xs"
    
      disableEscapeKeyDown
    
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
    
      sx={{
        "& .MuiDialog-container": {
          alignItems: "center",
        },
      }}

    >

      <div className="p-6 rounded-t-2xl bg-white">

        <div className="flex justify-between pb-8">

          <div className="text-md flex gap-5">

            <h2 className="border-r border-gray-400 px-15">Password</h2>

            <h2 className="px-6 text-gray-400">Phone Number</h2>
            
          </div>

          <CloseIcon onClick={handleClose} className="text-gray-400 cursor-pointer"/>

        </div>

        <div className="flex flex-col mx-5">

          <input type="text" placeholder="Please enter your Phone or Email" className="border border-gray-400 w-full p-3 rounded placeholder:text-sm focus:outline-none focus:border-blue-500 placeholder:text-gray-400 my-2" />
            
          <input type="text" placeholder='Please enter your password' className="border border-gray-400 w-full p-3 rounded placeholder:text-sm focus:outline-none focus:border-blue-500 placeholder:text-gray-400 mt-2" />

          <p className="text-gray-400 text-end text-sm mb-5 cursor-pointer">Forgot password?</p>

        </div>


        <button className="bg-[#f57224] text-white mx-5 w-90 py-2.5 rounded mb-3 hover:bg-[#ff8040] cursor-pointer font-semibold text-md">LOGIN</button>


        <div className="flex justify-center text-sm gap-1 mb-10">

          <p className="text-gray-400">Don't have an account</p>
            
          <button onClick={handleOpenSignup} className="cursor-pointer text-blue-500">Sign up</button>

        </div>

        <p className="text-gray-400 text-center pb-2.5 text-sm">Or, sign up with</p>

        <div className="flex justify-center gap-5">

          <div className="flex justify-center items-center">

            <img src="/assets/global-images/google-icon.png" alt="Google Icon" width="25px" />
            <p className="text-gray-400">Google</p>
            
          </div>

          <div className="flex justify-center items-center">

            <img src="/assets/global-images/facebook-icon.png" alt="Facebook Icon" width="35px" />
            <p className="text-gray-400">Facebook</p>

          </div>

        </div>

      </div>

      <Signup open={openSignup} handleClose={handleCloseSignup} />

    </Dialog>
  );

}

export default Login
