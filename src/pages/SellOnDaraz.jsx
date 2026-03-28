import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";


function SellOnDaraz() {
  
  const [open, setOpen] = useState(false);

  const categories = [
    "Electronic Accessories",
    "TV & Home Appliances",
    "Health & Beauty",
    "Mother & Baby",
    "Electronic Devices",
    "Groceries & Pets",
    "Home & Lifestyle",
    "Women's Fashion",
    "Men's Fashion",
    "Watches, Bags & Jewellery",
    "Sports & Outdoor",
    "Automotive & Motorbike"
  ];

  return (
    <>
      
      <Navbar />

      <div className="relative w-full sticky top-20 z-50 bg-[#fff]">

        <div className="max-w-[1250px] mx-auto relative">

          <div className="flex items-center gap-1 text-[#0f136d] hover:text-[#f85606] py-2 pb-3 ml-15 text-[14px] font-medium w-fit" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

            <span className={`transition-transform duration-200 ${ open ? "text-[#f85606]" : "" }`}>
              Categories
            </span>

            <KeyboardArrowDownIcon className={`transition-transform duration-200 ${ open ? "rotate-180 text-[#f85606]" : "" }`} />

            {open && (

              <div className="absolute top-full left-0 w-[200px] bg-white shadow-lg rounded z-50 border text-[13px] pt-2 pb-2 cursor-pointer ml-8" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

                {categories.map((item, index) => (

                  <div key={index} className="py-1 px-2 bg-white text-gray-500 hover:text-[#f85606] cursor-pointer transition">
                    {item}
                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

      <div className="w-full">
    
        <div className="max-w-[1250px] mx-auto">
  
          <img src="/assets/sellOnDaraz-images/Main-img.webp" alt="Main Image" width="100%" height="120%" />
  
        </div>

        <div className="max-w-[1250px] mx-auto my-3">

          <div className="mx-8">

            <Link to="/sellondaraz">
  
              <img src="/assets/sellOnDaraz-images/center-img-1.webp" alt="Center Image 1" width="100%" className="cursor-pointer" />

              <img src="/assets/sellOnDaraz-images/center-img-2.webp" alt="Center Image 2" width="100%" className="mt-3 cursor-pointer" />

              <img src="/assets/sellOnDaraz-images/center-img-3.webp" alt="Center Image 3" width="100%" className="mt-3 cursor-pointer" />
  
              <img src="/assets/sellOnDaraz-images/center-img-4.webp" alt="Center Image 4" width="100%" className="mt-3 cursor-pointer" />

              <img src="/assets/sellOnDaraz-images/center-img-5.webp" alt="Center Image 5" width="100%" className="mt-3 cursor-pointer" />

            </Link>

          </div>
        
        </div>

        <div className="max-w-[1250px] mx-auto">
  
          <div className="mx-8 pt-3 pb-1.5">

            <img src="/assets/sellOnDaraz-images/Last-img.webp" alt="Last Image" width="100%" />

          </div>
  
        </div>

      </div>

      <MainFooter />
    
    </>
  )

}

export default SellOnDaraz
