import { NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LearningPage() {

    return (
        <>
            
            <nav className='w-full'>

                <div className="max-w-[1250px] mx-auto flex justify-between px-5 mx-2 bg-white">

                    <div className='flex justify-center gap-2 items-center'>
                    
                        <img src="https://img.alicdn.com/imgextra/i3/O1CN01NPLO4Y28DL5IDtAeP_!!6000000007898-2-tps-5693-3201.png" alt="Daraz Logo" width={'115px'} />

                        <h1 className='border-l border-gray-300 text-2xl px-2.5'>Help Ceneter</h1>
                
                    </div>

                    <div className='flex justify-center items-center'>
                
                        <input type="text" placeholder='search' className='p-2.5 py-1.5 w-[400px] bg-white outline outline-orange-500 placeholder:text-gray-400 placeholder:text-sm' />
                
                        <div className='bg-[#FF472E] text-center py-1.5 px-3.5 border-[3.9px] border-white'>
                            <SearchIcon className='text-white' />
                        </div>
                
                    </div>

                    <div className='flex justify-center gap-10 px-4 items-center text-[22px]'>

                        <NavLink to="/helpcenter"
                            className={({ isActive }) =>
                                isActive
                                ? "text-gray-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                                : "text-orange-500 border-b-2 border-orange-500"
                            }
                        >
                            Homepage
                        </NavLink>


                        <NavLink to="/helpcenter/faq"
                            className={({ isActive }) =>
                                isActive
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-500"
                            }
                        >
                            FAQ
                        </NavLink>

                    </div>

                </div>
            
            </nav>

            <div className="w-full">

                <div className="max-w-[1250px] mx-auto">

                    <img src="/assets/help-center/ham-burger.png" alt="Ham Burger" width="90px" className="pt-6 px-6" />

                </div>
                
                <div className="max-w-[1250px] mx-auto bg-white flex gap-5 p-5 pt-7 pr-10">

                    <div className="w-75">

                        <p className="bg-[#ffecea] text-orange-500 px-5 py-2 rounded cursor-pointer">Categories</p>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                            
                            <p>Promotions</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                            
                            <p>Account Management</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Daraz Categories</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Orders</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Payments</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Shipping & Delivery</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Returns & Refund</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                        <div className="flex justify-between cursor-pointer items-center text-gray-500 hover:bg-[#ffecea] hover:text-orange-500 pl-5 py-2 my-3.5 rounded">
                        
                            <p>Sell on Daraz</p>
                            <ArrowDropDownIcon />
                        
                        </div>
                        
                    </div>

                    <div className="w-92 px-2 pb-12">

                        <h2>Categories</h2>

                        <h4 className="pt-6 pb-4">Promotions</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>What is Pakistan Day?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to use vouchers?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>Why am I unable to use collectible vouchers?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What are the Daraz Freebie?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to avail free shipping?</p>
                        
                        </div>


                        <h4 className="pt-22 pb-4">Daraz Categories</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is the Fashion & Lifestyle Store at Daraz?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>I think my Daraz Mall item is Fake/Counterfeit What should I do?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is Daraz Coin/Gems Carnival?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is favourite number?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How do I find Fashion & Lifestyle category at Daraz?</p>
                        
                        </div>


                        <h4 className="pt-14 pb-4">Payments</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is Easy Monthly Instalment (EMI)?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to pay via Union Pay?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p className="text-[15.5px]">What are the terms and conditions when paying through Easy Monthly Instalment (EM...</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>I am unable to pay through EasyPaisa Direct, what should I do?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to remove the Daraz account from the Easypaisa app?</p>
                        
                        </div>


                        <h4 className="pt-14 pb-4">Returns & Refund</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How should I pack the items for return?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How Can I Correct the Reason for My Refund Request?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How can I track my return?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How do I return my item?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What are the refund timelines?</p>
                        
                        </div>
                        
                    </div>

                    <div className="w-92 px-2 pb-12">

                        <h4 className="pt-14 pb-4">Account Management</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>What safety measures can I take on Daraz to avoid being hacked or scammed?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to Clear Caches and cookies?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>Can I access Daraz app from multiple devices?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to unsubscribe Daraz Newsletters?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How can I provide suggestions and feedback?</p>
                        
                        </div>


                        <h4 className="pt-14 pb-4">Orders</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is the Daraz Buyer Policy?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How do I place an order on Daraz?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to cancel the order (Local & Cross Border)?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>Order Selector</p>
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is Add-On Electronic Protection Insurance, and how can I purchase it?</p>

                        </div>


                        <h4 className="pt-16 pb-4">Shipping & Delivery</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>What are the delivery charges?</p>

                        </div>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>What is Daraz Collection point?</p>

                        </div>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>What are the expected delivery timelines?</p>

                        </div>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>How to track my order?</p>

                        </div>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">

                            <p>•</p>
                            <p>Which couriers does Daraz deliver through?</p>

                        </div>


                        <h4 className="pt-30 pb-4">Sell on Daraz</h4>

                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How to contact Seller Support Team?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What categories can i sell on Daraz?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>How can I sell on Daraz?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What if incorrect information is submitted during Seller Signup?</p>
                        
                        </div>
                        
                        <div className="flex gap-5 items-center pt-2.5 text-gray-500 hover:text-orange-500 cursor-pointer">
                        
                            <p>•</p>
                            <p>What is Daraz Commission ?</p>
                        
                        </div>
                    
                    </div>

                </div>

            </div>

        </>
    )

}

export default LearningPage
