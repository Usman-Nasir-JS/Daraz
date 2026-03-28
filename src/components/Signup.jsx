import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Login from "./Login";


const Transition = React.forwardRef(function Transition(props, ref) {

    return <Slide direction="up" ref={ref} {...props} />;

});


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };



function Signup({ open, handleClose }) {

    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => {

        handleClose();
        setOpenLogin(false);

    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
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

                <div className="flex justify-between pb-12">

                    <h2 className="text-md font-bold pl-40">Sign Up</h2>

                    <CloseIcon onClick={handleClose} className="text-gray-400 cursor-pointer" />

                </div>

                <div className="flex justify-around">

                    <input placeholder="PK+92" readOnly className="border border-gray-400 w-[85px] px-2 text-sm text-gray-500 cursor-default rounded focus:outline-none placeholder:text-center placeholder:text-[12px] p-[14px]" />

                    <input type="text" placeholder="Please enter your phone number" className="border border-gray-400 w-74 p-3 rounded focus:outline-none focus:border-blue-500 placeholder:text-gray-400" />

                </div>

                <div className="flex justify-around items-center pb-5">

                    <Checkbox defaultChecked
                        sx={{
                            padding: "4px",

                            "& .MuiSvgIcon-root": {
                            fontSize: 20,
                            border: "1px solid #9ca3af", // gray thin border
                            borderRadius: "6px",
                            },

                            "&.Mui-checked": {
                            color: "#60a5fa", // light blue
                            }
                        }}
                    />
                
                    <p className="text-gray-400 text-sm pt-4">By creating and/or using your account, you agree to our <Link className="text-blue-500">Terms of Use</Link> and <Link className="text-blue-500">Privacy Policy.</Link></p>

                </div>

                <button className="bg-[#f57224] text-white flex gap-1 py-2 w-full px-5 cursor-pointer hover:bg-[#ff8040] mb-2.5 items-center">
                
                    <img src="/assets/global-images/call-icon.png" alt="Call Icon" width="40px" />
                    <p className="pl-12">Send code via Whatsapp</p>
            
                </button>

                <div className="flex justify-center text-sm gap-1 mb-18">

                    <p className="text-gray-400">Already have an account?</p>
            
                    <button onClick={handleOpenLogin} className="cursor-pointer text-blue-500">
                        Log in Now
                    </button>

                </div>

                <p className="text-gray-400 text-center pb-2.5">Or, sign up with</p>

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

            <Login open={openLogin} handleClose={handleCloseLogin} /> {/*  */}

        </Dialog>
    );
    
}

export default Signup
