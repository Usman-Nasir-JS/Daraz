import { Link } from "react-router-dom";

function MainFooter() {

    return (
        <>
            <footer className="bg-[#f4f4f6] pt-8 pb-5 w-full">

                <div className="flex gap-5 sm:gap-32 max-w-[1250px] mx-auto px-4 pt-4 sm:px-10 sm:pt-10 text-[12.5px] flex-wrap">

                    <div className="flex flex-col">

                        <h2 className="text-[18px] text-[#0f136d] py-1.5">Customer Care</h2>

                        <Link to="/" className="hover:underline">Help Center</Link>
                        <Link to="/" className="hover:underline">How to Buy</Link>
                        <Link to="/" className="hover:underline">Corporate & Bulk Purchasing</Link>
                        <Link to="/" className="hover:underline">Returns & Refunds</Link>
                        <Link to="/" className="hover:underline">Daraz Shop</Link>
                        <Link to="/" className="hover:underline">Contact Us</Link>
                        <Link to="/" className="hover:underline">Purchase Protection</Link>
                        <Link to="/" className="hover:underline">Daraz Pick up Points</Link>

                    </div>

                    <div className="flex flex-col">

                        <h2 className="text-[18px] text-[#0f136d] py-1.5">Daraz</h2>

                        <Link to="/" className="hover:underline">About Us</Link>
                        <Link to="/" className="hover:underline">Digital Payments</Link>
                        <Link to="/" className="hover:underline">Daraz Donates</Link>
                        <Link to="/" className="hover:underline">Daraz Blog</Link>
                        <Link to="/" className="hover:underline">Terms & Conditions</Link>
                        <Link to="/" className="hover:underline">Privacy Policy</Link>
                        <Link to="/" className="hover:underline">NTN Number : 4012118-6</Link>
                        <Link to="/" className="hover:underline">STRN Number : 1700401211818</Link>
                        <Link to="/" className="hover:underline">Online Shopping App</Link>
                        <Link to="/" className="hover:underline">Online Grocery Shopping</Link>
                        <Link to="/" className="hover:underline">Daraz Exclusive</Link>
                        <Link to="/" className="hover:underline">Daraz University</Link>
                        <Link to="/" className="hover:underline">Sell on Daraz</Link>
                        <Link to="/" className="hover:underline">Join Daraz Affiliate Program</Link>
                    

                    </div>

                    <div className="flex sm:justify-center gap-8 flex-wrap pt-5 sm:pt-0">

                        <div className="flex flex-col">
                    
                            <div className="flex gap-5">
                                <img src="/assets/footer-images/color-icon.png" alt="daraz color icon" width="50px" />

                                <div className="text-[14px]">
                                    <h4 className="text-orange-500 text-[16.5px]">Happy Shopping</h4>
                                    <p>Download App</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3 flex-wrap">

                            <div className="flex gap-3">
                                <Link to="/">
                                    <img src="/assets/footer-images/store_img-1.png" alt="App Store" />
                                </Link>
                                <Link to="/">
                                    <img src="/assets/footer-images/store_img-2.png" alt="Google App" />
                                </Link>
                            </div>
                            
                            <Link to="/">
                                <img src="/assets/footer-images/store_img-3.png" alt="App Gallery" width="128px" />
                            </Link>

                        </div>

                    </div>

                </div>

            </footer>

            <footer className="w-full bg-white">

                <div className="flex gap-5 sm:gap-20 max-w-[1250px] mx-auto px-10 py-6 flex-wrap">

                    <div>
                        <h1 className="py-6 text-[18px]">Payment Methods</h1>

                        <p className="flex gap-1.5 pb-1.5 flex-wrap">

                            <img src="/assets/footer-images/card-images/card-1.png" alt="Payment Card 1" width="45px" />
                            <img src="/assets/footer-images/card-images/card-2.png" alt="Payment Card 2" width="45px" />
                            <img src="/assets/footer-images/card-images/card-3.png" alt="Payment Card 3" width="45px" />
                            <img src="/assets/footer-images/card-images/card-4.png" alt="Payment Card 4" width="45px" />
                            <img src="/assets/footer-images/card-images/card-5.png" alt="Payment Card 5" width="45px" />
                            <img src="/assets/footer-images/card-images/card-6.png" alt="Payment Card 6" width="45px" />

                        </p>

                        <p className="flex gap-1.5">

                            <img src="/assets/footer-images/card-images/card-7.png" alt="Payment Card 7" width="45px" />
                            <img src="/assets/footer-images/card-images/card-8.png" alt="Payment Card 8" width="45px" />
                            <img src="/assets/footer-images/card-images/card-9.png" alt="Payment Card 9" width="45px" />

                        </p>

                    </div>

                    <div>
                        <h1 className="py-6 text-[18px]">Verified by</h1>

                        <img src="/assets/footer-images/card-images/company-logo.png" alt="Company Logo" />
                    </div>

                </div>

            </footer>

            <footer className="w-full bg-white">
        
                <div className="flex justify-items-start gap-18 max-w-[1250px] mx-auto px-10 py-8 pb-12 flex-wrap sm:pt-12">

                    <div>
                        <h2 className="text-[19px]">Daraz International</h2>

                        <div className="flex flex-wrap gap-5 items-center pt-1.5">

                            <p className="flex justify-items-start gap-1.5">
                                <img src="/assets/footer-images/country_flag-1.png" alt="Pakistan" width="30px" />
                                <Link to="/" className="text-[#555555] hover:underline">Pakistan</Link>
                            </p>
                            <p className="flex justify-items-start gap-1.5">
                                <img src="/assets/footer-images/country_flag-2.png" alt="Bangladesh" width="30px" />
                                <Link to="/" className="text-[#555555] hover:underline">Bangladesh</Link>
                            </p>
                            <p className="flex justify-items-start gap-1.5">
                                <img src="/assets/footer-images/country_flag-3.png" alt="Sri Lanka" width="30px" />
                                <Link to="/" className="text-[#555555] hover:underline">Sri Lanka</Link>
                            </p>
                            <p className="flex justify-items-start gap-1.5">
                                <img src="/assets/footer-images/country_flag-4.png" alt="Myanmar" width="30px" />
                                <Link to="/" className="text-[#555555] hover:underline">Myanmar</Link>
                            </p>
                            <p className="flex justify-items-start gap-1.5">
                                <img src="/assets/footer-images/country_flag-5.png" alt="Nepal" width="30px" />
                                <Link to="/" className="text-[#555555] hover:underline">Nepal</Link>
                            </p>

                        </div>
                    
                    </div>

                    <div>
                        <h4>Follow Us</h4>

                        <div className="flex gap-5 items-center pt-1.5">

                            <img src="/assets/footer-images/facebook-icon.png" alt="Facebook Icon" width="30px" />
                            <img src="/assets/footer-images/x-icon.png" alt="X Icon" width="30px" />
                            <img src="/assets/footer-images/instagram-icon.png" alt="Instagram Icon" width="30px" />
                            <img src="/assets/footer-images/youtube-icon.png" alt="Youtube Icon" width="30px" />

                        </div>
                    </div>

                    <div className="ml-auto">
                        <h6 className="text-[#666666]">© Daraz 2026</h6>
                    </div>

                </div>

            </footer>

        </>
    )

}

export default MainFooter
