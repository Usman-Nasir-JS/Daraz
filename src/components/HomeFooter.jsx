import { Link } from "react-router-dom";

function HomeFooter() {

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
                        <Link to="/sellondaraz" className="hover:underline">Sell on Daraz</Link>
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


            <footer className="bg-[#f4f4f6] text-[#777777] py-15 w-full">

                <div className="flex gap-20 max-w-[1250px] mx-auto px-10 text-[11.5px] flex-wrap">

                    <div className="flex flex-col w-58 gap-2">

                        <h3 className="text-[#555555] text-[16.3px] font-medium">How Daraz Transformed Online Shopping in Pakistan</h3>

                        <p>How Daraz Transformed Online Shopping in Pakistan</p>
                    
                        <p>Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.</p>

                        <h3 className="text-[#606060] text-[16.3px] font-medium">What Makes Us Different from Other Online Shopping Platforms?</h3>

                        <p><span className="font-bold">Select from the Largest Online Marketplace in Pakistan</span> <br /> With over 15 million products to select from, Daraz offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone.</p>

                        <p><span className="font-bold">Hassle Free Delivery</span> <br /> Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.</p>

                        <p><span className="font-bold">SPayment Options to Suit Every Style</span> <br /> You can choose to pay through a credit/debit card, opt for cash on delivery or even go for EMI (easy monthly instalments). You can also</p>

                    </div>

                    <div className="flex flex-col w-55 gap-1.5">

                        <p>avail exclusive offers by downloading Daraz Wallet – a closed loop digital wallet that offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment method for our customers' ease</p>
                    
                        <p><span className="font-bold">Shop from Verified Vendors</span> <br /> Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!</p>

                        <p><span className="font-bold">Shop Around the World with Daraz Global Collection</span> <br /> International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.</p>

                        <p><span className="font-bold">Avail Exclusive Discounts, Offers, and Promotions</span> <br /> Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!</p>

                        <p><span className="font-bold">Buy Value, not Just Goods with Daraz Care</span> <br /> Daraz does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks.</p>

                        <p><span className="font-bold">Simplify Corporate Purchases</span> <br /> Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.</p>

                    </div>

                    <div className="flex flex-col w-52 gap-2 text-[11px]">

                        <h3 className="text-[#555555] text-[16.3px] font-medium">Top Categories & Brands</h3>

                        <p>
                            <span className="font-semibold">MOBILE PHONES IN PAKISTAN</span>
                            <br />
                            <Link to="/" className="hover:underline">Apple iPhones</Link> ,
                            <Link to="/" className="hover:underline"> Honor Mobiles</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Huawei Mobiles</Link> ,
                            <Link to="/" className="hover:underline"> Tecno Mobiles</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Redmi Mobiles</Link> ,
                            <Link to="/" className="hover:underline"> Xiaomi Mi Mobiles</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Nokia Mobiles</Link> ,
                            <Link to="/" className="hover:underline"> OnePlus Mobiles</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Oppo Mobile Phones</Link> ,
                            <Link to="/" className="hover:underline"> Realme Mobiles</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung Mobile Phones</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Vivo Mobile Phones</Link> ,
                            <Link to="/" className="hover:underline"> Mobile Accessories</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Smart Watches</Link>
                        </p>

                        <p>
                            <span className="font-semibold">LATEST LAPTOPS</span>
                            <br />
                            <Link to="/" className="hover:underline">Dell Laptops</Link> ,
                            <Link to="/" className="hover:underline"> HP Laptops</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Lenovo Laptops</Link> ,
                            <Link to="/" className="hover:underline"> Mouse</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Gaming Graphic Cards</Link> ,
                            <Link to="/" className="hover:underline"> lenovo ideapad 3</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Macbook Pro 13</Link> ,
                            <Link to="/" className="hover:underline"> Hp Probook 650 G2</Link>
                        </p>

                        <p>
                            <span className="font-semibold">LED TV</span>
                            <br />
                            <Link to="/" className="hover:underline">Changhong Led Tv</Link> ,
                            <Link to="/" className="hover:underline"> LG Led Tv</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung Led Tv</Link> ,
                            <Link to="/" className="hover:underline"> Sony Led Tv</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">TCL LED TVs</Link>
                        </p>

                        <p>
                            <span className="font-semibold">HOME APPLIANCES</span>
                            <br />
                            <Link to="/" className="hover:underline">Microwave oven</Link> ,
                            <Link to="/" className="hover:underline"> Geyser</Link> ,
                            <Link to="/" className="hover:underline"> Heater</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Refrigerators</Link> ,
                            <Link to="/" className="hover:underline"> Deep Freezers</Link> ,
                            <Link to="/" className="hover:underline"> Generators</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Water Dispensers</Link> ,
                            <Link to="/" className="hover:underline"> Fans</Link> ,
                            <Link to="/" className="hover:underline"> Room Cooler</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Table Fans</Link> ,
                            <Link to="/" className="hover:underline"> Wall Fans</Link> ,
                            <Link to="/" className="hover:underline"> Exhaust Fans</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Pedestal Fans</Link> ,
                            <Link to="/" className="hover:underline"> Window Ac</Link> ,
                            <Link to="/" className="hover:underline"> Solar Panel</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Washing Machine</Link>
                        </p>

                        <p>
                            <span className="font-semibold">DSLR CAMERAS</span>
                            <br />
                            <Link to="/" className="hover:underline">Camera Tripods</Link> ,
                            <Link to="/" className="hover:underline"> Drones</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">IP & CCTV Cameras</Link> ,
                            <Link to="/" className="hover:underline"> Nikon D7000</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Nikon D5600</Link> ,
                            <Link to="/" className="hover:underline"> Canon 200D</Link> ,
                            <Link to="/" className="hover:underline"> Canon 1200D</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Fujifilm Instax Mini 11</Link> ,
                            <Link to="/" className="hover:underline"> Canon M50</Link>
                        </p>

                        <p>
                            <span className="font-semibold">HEALTH & BEAUTY</span>
                            <br />
                            <Link to="/" className="hover:underline">sunisa foundation</Link> ,
                            <Link to="/" className="hover:underline"> Biofad</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">janssen facial kit</Link> ,
                            <Link to="/" className="hover:underline"> Glutathione Injection</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Glutathione Cream</Link> ,
                            <Link to="/" className="hover:underline"> Sauvage</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Glutathione Tablets</Link> ,
                            <Link to="/" className="hover:underline"> Glutathione Soap</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infrared Thermometers</Link> ,
                            <Link to="/" className="hover:underline"> N95 Mask</Link>
                        </p>

                        <p>
                            <span className="font-semibold">TRENDING</span>
                            <br />
                            <Link to="/" className="hover:underline">Online Bills</Link> ,
                            <Link to="/" className="hover:underline"> Core I5 Laptop</Link> ,
                            <Link to="/" className="hover:underline"> Gtx 1060</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A32</Link> ,
                            <Link to="/" className="hover:underline"> Samsung A51</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A52</Link> ,
                            <Link to="/" className="hover:underline"> Samsung A71</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A72</Link> ,
                            <Link to="/" className="hover:underline"> Samsung M31</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung S20</Link> ,
                            <Link to="/" className="hover:underline"> Ultra 5G</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung S21</Link> ,
                            <Link to="/" className="hover:underline"> Samsung S21 Ultra</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung Z Flip</Link> ,
                            <Link to="/" className="hover:underline"> Tecno Camon 17</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Tecno Spark 6</Link> ,
                            <Link to="/" className="hover:underline"> Vivo V20</Link> ,
                            <Link to="/" className="hover:underline"> Poco X3 Pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Vivo V21</Link> ,
                            <Link to="/" className="hover:underline"> Vivo V21E</Link> ,
                            <Link to="/" className="hover:underline"> Vivo X70 Pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Vivo Y12</Link> ,
                            <Link to="/" className="hover:underline"> Vivo Y12S</Link> ,
                            <Link to="/" className="hover:underline"> Vivo Y1S</Link> ,
                            <Link to="/" className="hover:underline"> Vivo Y20</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Vivo Y51</Link> ,
                            <Link to="/" className="hover:underline"> Vivo Y51S</Link> ,
                            <Link to="/" className="hover:underline"> Oppo F19 Pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Oppo Reno 6</Link> ,
                            <Link to="/" className="hover:underline"> Xiaomi Poco F3</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Xiaomi Poco M3</Link> ,
                            <Link to="/" className="hover:underline"> Xiaomi Poco X3</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Xiaomi Poco X3 Gt</Link> ,
                            <Link to="/" className="hover:underline"> Xiaomi Redmi 9C</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Xiaomi Redmi Note 10 Pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Sharp Aquos R2</Link>
                        </p>

                    </div>

                    <div className="flex flex-col w-60 gap-2.5 text-[11px] pt-0 sm:pt-5">

                        <p>
                            <span className="font-semibold">WOMEN'S FASHION</span>
                            <br />
                            <Link to="/" className="hover:underline">Al-Karam Studio</Link> ,
                            <Link to="/" className="hover:underline"> Warda</Link> ,
                            <Link to="/" className="hover:underline"> Salitex</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Bonanza Satrangi</Link> ,
                            <Link to="/" className="hover:underline"> Edenrobe</Link> ,
                            <Link to="/" className="hover:underline"> Firdous</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Junaid Jamshed</Link> ,
                            <Link to="/" className="hover:underline"> Limelight</Link> ,
                            <Link to="/" className="hover:underline"> Sana Safinaz</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Mahru</Link> ,
                            <Link to="/" className="hover:underline"> Pushup Bra</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Women Undergarments</Link>
                        </p>

                        <p>
                            <span className="font-semibold">MEN'S FASHION</span>
                            <br />
                            <Link to="/" className="hover:underline">Men's Shirts</Link> ,
                            <Link to="/" className="hover:underline"> Men's T-Shirts</Link>
                        </p>

                        <p>
                            <span className="font-semibold">ONLINE GROCERY STORE</span>
                            <br />
                            <Link to="/" className="hover:underline">Oil & Ghee</Link> ,
                            <Link to="/" className="hover:underline"> Basmati Rice</Link> ,
                            <Link to="/" className="hover:underline"> Dried Fruits</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Chocolates</Link> ,
                            <Link to="/" className="hover:underline"> Mattresses</Link>
                        </p>

                        <p>
                            <span className="font-semibold">ONLINE BOOK STORE</span>
                            <br />
                            <Link to="/" className="hover:underline">English Books</Link> ,
                            <Link to="/" className="hover:underline"> Islamic Books</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">History Books</Link> ,
                            <Link to="/" className="hover:underline"> English Literature Books</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Kids Urdu Stories</Link> ,
                            <Link to="/" className="hover:underline"> Pride & Prejudice</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Harry Potter Story Books</Link> ,
                            <Link to="/" className="hover:underline"> Namal Novel</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Nimra Ahmed Novels</Link>
                        </p>

                        <p>
                            <span className="font-semibold">AIR CONDITIONERS</span>
                            <br />
                            <Link to="/" className="hover:underline">Kenwood Ac</Link> ,
                            <Link to="/" className="hover:underline"> Haier Ac</Link> ,
                            <Link to="/" className="hover:underline"> Gree Ac</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Dawlance Ac</Link> ,
                            <Link to="/" className="hover:underline"> Orient Ac</Link> ,
                            <Link to="/" className="hover:underline"> Ecostar Ac</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Inverex Solar Ac</Link> ,
                            <Link to="/" className="hover:underline"> Pel Ac</Link>
                        </p>

                        <p>
                            <span className="font-semibold">TOP MOBILE PHONES</span>
                            <br />
                            <Link to="/" className="hover:underline">Nokia G20</Link> ,
                            <Link to="/" className="hover:underline"> redmi 9</Link> ,
                            <Link to="/" className="hover:underline"> realme 7 pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">realme c15</Link> ,
                            <Link to="/" className="hover:underline"> realme c21</Link> ,
                            <Link to="/" className="hover:underline"> vivo y20s</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">realme c11 Price in Pakistan</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">itel vision 1 pro price in pakistan</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">samsung galaxy a02 price in pakistan ,</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infinix Hot 10</Link> ,
                            <Link to="/" className="hover:underline"> Infinix Hot 8</Link> ,
                            <Link to="/" className="hover:underline"> Infinix Hot 9</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infinix Note 10 Pro</Link> ,
                            <Link to="/" className="hover:underline"> Infinix Note 7</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infinix Note 8</Link> ,
                            <Link to="/" className="hover:underline"> Infinix Zero 8</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Inifnix Smart 5</Link> ,
                            <Link to="/" className="hover:underline"> iPhone 11</Link> ,
                            <Link to="/" className="hover:underline"> iPhone 12</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">iphone 12 Pro Max</Link> ,
                            <Link to="/" className="hover:underline"> iPhone 12 Pro</Link> ,
                            <Link to="/" className="hover:underline"> iPhone 6</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Itel A25</Link> ,
                            <Link to="/" className="hover:underline"> Mi 10T</Link> ,
                            <Link to="/" className="hover:underline"> Nokia 105</Link> ,
                            <Link to="/" className="hover:underline"> Oppo A15</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Oppo A15S</Link> ,
                            <Link to="/" className="hover:underline"> Oppo A53</Link> ,
                            <Link to="/" className="hover:underline"> Oppo A54</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infinix Zero X Pro</Link> ,
                            <Link to="/" className="hover:underline"> Infinix Zero X Neo</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Oppo F19</Link> ,
                            <Link to="/" className="hover:underline"> Oppo Reno 5</Link> ,
                            <Link to="/" className="hover:underline"> Oppo Reno 5 Pro</Link>
                            <br />
                            , <Link to="/" className="hover:underline">Xiaomi Poco M3 Pro</Link> ,
                            <Link to="/" className="hover:underline"> Realme 6 Pro</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Realme 8</Link> ,
                            <Link to="/" className="hover:underline"> Realme Narzo 30A</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A02S</Link> ,
                            <Link to="/" className="hover:underline"> Samsung A11</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A12</Link> ,
                            <Link to="/" className="hover:underline"> Samsung A31</Link> ,
                            <Link to="/" className="hover:underline"> Vivo Y33s</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Infinix Note 11</Link> ,
                            <Link to="/" className="hover:underline"> Tecno Spark 6 Go</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Samsung A52s</Link> ,
                            <Link to="/" className="hover:underline"> Samsung Tab A7 Lite</Link> ,
                        </p>

                        <p>
                            <span className="font-semibold">SHOP WORLDWIDE WITH LAZADA</span>
                            <br />
                            <Link to="/" className="hover:underline">Singapore</Link> ,
                            <Link to="/" className="hover:underline"> Malaysia</Link> ,
                            <Link to="/" className="hover:underline"> Philippines</Link> ,
                            <br />
                            <Link to="/" className="hover:underline">Indonesia , Vietnam , Thailand</Link> ,
                            <Link to="/" className="hover:underline"> Vietnam</Link> ,
                            <Link to="/" className="hover:underline"> Thailand</Link>
                        </p>

                        <p>
                            <span className="font-semibold">SHOP WORLDWIDE WITH MIRAVIA</span>
                            <br />
                            <Link to="/" className="hover:underline">Spain</Link> ,
                            <Link to="/" className="hover:underline"> Portugal</Link>
                        </p>

                    </div>

                </div>

            </footer>

            <footer className="w-full bg-white">

                <div className="flex justify-items-start gap-18 max-w-[1250px] mx-auto px-10 py-8 pb-10 flex-wrap">

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

export default HomeFooter
