import axios from "axios";
import { useEffect, useState, useRef  } from "react";
import { Link, useParams } from "react-router-dom";

import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import NavigateNextIcon from '@mui/icons-material/NavigateNextOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MainFooter from "../components/MainFooter";
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from "@mui/icons-material/Star";
import Navbar from "../components/Navbar";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";



function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [zoomStyle, setZoomStyle] = useState({});
    const [showZoom, setShowZoom] = useState(false);
    const [count, setCount] = useState(1);
    const [viewFull, setViewFull] = useState(false);
    
    const detailsRef = useRef(null);
    
    const maxCount = 15;

    
    function handleInputChange(e) {
        
        let value = e.target.value;

        if (/^\d*$/.test(value)) {
    
            value = value === "" ? "" : Math.min(parseInt(value), maxCount);
            setCount(value);
    
        }

    }

    const fetchProduct = async () => {
        
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`);

            setProduct(res.data);
        } 
        catch (error) {
            console.error(error);
        }
  
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <h1 className="text-5xl text-center text-orange-500">Loading...</h1>;

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

    
    const images = product.images && product.images.length > 0 ? product.images : [product.thumbnail];
    
    const visibleImages = images.slice(startIndex, startIndex + 4);
    
    const isPrevDisabled = startIndex === 0;
    
    const isNextDisabled =startIndex + 4 >= images.length;
    

    const nextThumbs = () => {
    
        if (!isNextDisabled) {
            setStartIndex(prev => prev + 1);
        }
  
    };
    
    const prevThumbs = () => {
    
        if (!isPrevDisabled) {
            setStartIndex(prev => prev - 1);
        }
  
    };
    
    const handleThumbnailHover = (index) => {
    
        setCurrentIndex(index);
    
        if (index >= startIndex + 4) {
            setStartIndex(index - 3);
        }
  
        if (index < startIndex) {
            setStartIndex(index);
        }
  
    };
    
    const handleMouseMove = (e) => {
    
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
    
        setZoomStyle({
            backgroundPosition: `${x}% ${y}%`,
            backgroundColor: "#cfecf2"
        });
  
    };

    function increaseCount() {
        setCount(prev => Math.min(prev + 1, maxCount));
    }

    function decreaseCount() {
        setCount(prev => Math.max(prev - 1, 1));
    }

    const handleToggle = () => {

        if (viewFull) {
      
            setViewFull(false);

            setTimeout(() => {
            
                detailsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            }, 0);
        } 
        else {
            setViewFull(true);
        }

    };

    const rating = Math.round(product.rating || 0);

    const ratingCounts = {
        5: rating >= 5 ? 12 : 0,
        4: rating >= 4 ? 9 : 0,
        3: rating >= 3 ? 6 : 0,
        2: rating >= 2 ? 3 : 0,
        1: rating >= 1 ? 1 : 0,
    };

    const totalRatings =
        ratingCounts[5] +
        ratingCounts[4] +
        ratingCounts[3] +
        ratingCounts[2] +
        ratingCounts[1];


    return (
        <>

            <Navbar />

            <div className="w-full relative sticky top-20 z-50 bg-[#fff]">

                <div className="max-w-[1250px] mx-auto relative">

                    <div className="flex items-center gap-1 text-[#0f136d] hover:text-[#f85606] py-2 pb-3 ml-15 text-[14px] font-medium w-fit" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

                        <span className={`transition-transform duration-200 ${ open ? "text-[#f85606]" : "" }`}>Categories</span>

                        <KeyboardArrowDownIcon className={`transition-transform duration-200 ${ open ? "rotate-180 text-[#f85606]" : "" }`} />

                        {open && (

                            <div className="absolute top-full left-0 w-[200px] bg-white shadow-lg rounded z-50 text-[13px] pt-2 pb-2 cursor-pointer ml-8" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

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
        
            <div className="max-w-[1250px] mx-auto">

                <div className="flex flex-row gap-1 px-10 py-5 text-center text-[#5f9cb7] text-md">

                    <Link to="/">Health & Beauty<NavigateNextIcon /></Link>

                    <Link to="/">Men's Care<NavigateNextIcon /></Link>
                    
                    <Link to="/">Herbal<NavigateNextIcon /></Link>
                    
                    <p className="text-gray-400">

                        {product.tags?.length > 18 
                          ? product.tags.slice(0, 18).join(" ") + "..."
                          : product.tags?.join(" ")}

                        {product.description?.split(" ").length > 18 && "..."}
                    
                    </p>
                
                </div>

                <div className="mx-10 bg-white flex justify-items-start">

                    <div className="flex gap-6">

                       <div className="flex flex-col w-80 mx-2 my-3">

                            <div className="overflow-hidden cursor-zoom-in"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setShowZoom(true)}
                                onMouseLeave={() => setShowZoom(false)}
                            >

                                <img src={images[currentIndex]} alt="Product Imae"
                                  className="w-full h-92 object-contain p-2 bg-[#cfecf2]"
                                />

                            </div>

                            <div className="flex justify-between items-center gap-2 mt-4">

                                <div className="flex gap-2 items-center">

                                    <ArrowBackIosIcon
                                        onClick={!isPrevDisabled ? prevThumbs : undefined}
                                        className={`
                                          ${isPrevDisabled
                                            ? "cursor-not-allowed text-gray-300"
                                            : "cursor-pointer text-gray-500 hover:text-black"}
                                        `}
                                    />
                                    
                                    {visibleImages.map((img, index) => {
                                    
                                        const actualIndex =
                                        startIndex + index;
                                    
                                        return (
                                
                                            <img key={actualIndex} src={img} alt="thumb"
                                
                                                onMouseEnter={() => handleThumbnailHover(actualIndex)}
                                  
                                                className={`w-15 h-14 border p-1 bg-[#cfecf2]
                                                    ${currentIndex === actualIndex
                                                      ? "border-orange-500"
                                                      : "border-gray-300 hover:border-orange-400"}
                                                `}
                                            />
                                        
                                        );
                              
                                    })}

                                </div>

                                
                                <ArrowForwardIosIcon
                                    
                                    onClick={!isNextDisabled ? nextThumbs : undefined}
                                    
                                    className={`
                                      ${isNextDisabled
                                        ? "cursor-not-allowed text-gray-300"
                                        : "cursor-pointer text-gray-500 hover:text-black"}
                                    `}
                                />

                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col w-full p-3 relative">

                        {showZoom && (

                            <div
                              className="w-full h-[550px] hidden md:block rounded absolute inset-0 my-3 z-10"
                              style={{
                                backgroundImage: `url(${images[currentIndex]})`,
                                backgroundSize: "125%",
                                backgroundRepeat: "no-repeat",
                                ...zoomStyle
                              }}
                            />

                        )}

                        <div className="flex justify-between gap-5">
                            
                            <div className="w-[150%]">

                                <h1 className="text-[22px] font-medium">{product.description}</h1>

                                <div className="text-gray-400 text-end pt-1">
                                    <ShareIcon />
                                    <FavoriteBorderOutlinedIcon />
                                </div>

                                <div className="flex items-center gap-1">

                                    <Rating value={product.rating || 4} precision={0.5} size="small" readOnly sx={{ fontSize: "14px", gap: "0px", color: "#ffd600" }} />

                                    <span className="text-blue-500 text-xs">
                                      Ratings {Math.floor(product.stock)}
                                    </span>

                                </div>

                                <div className="text-xs text-gray-400 pt-5">
                                    Brand: <span className="text-blue-500">{product.brand ? product.brand : "No Brand"}</span> | <span className="text-blue-500">More {product.category} from {product.brand ? product.brand : "No Brand"}</span>
                                </div>

                                <div className="my-5 py-3.5 text-3xl text-orange-500 border-t border-b border-gray-200">
                                    Rs. {Math.floor(product.price).toLocaleString()}
                                </div>

                                <div className="flex items-center gap-3">

                                    <p className="text-gray-400 text-sm mr-10">Quantity</p>

                                    <button onClick={decreaseCount} disabled={count <= 1}
                                      className={`text-2xl px-2.5
                                        ${count <= 1
                                          ? "bg-gray-200 text-gray-300 cursor-not-allowed"
                                          : "bg-gray-100 text-gray-400 cursor-pointer hover:bg-[#dadada] hover:text-white"}
                                      `}
                                    >-</button>

                                    <input type="text" value={count} onChange={handleInputChange}
                                      className="w-5 text-center py-0.5 focus:outline-0 text-sm"
                                    />

                                    <button onClick={increaseCount} disabled={count >= maxCount}
                                      className={`text-2xl px-2.5
                                        ${count >= maxCount
                                          ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                                          : "bg-gray-100 text-gray-400 cursor-pointer hover:bg-[#dadada] hover:text-white"}
                                      `}
                                    >+</button>

                                </div>

                                <div className="flex justify-between flex-wrap pt-10">

                                    <button 
                                        className="py-2.5 px-20 bg-[#2abbe8] text-white cursor-pointer transition duration-500 hover:bg-[#26abd4]" 
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You want to purchase this product now?",
                                                icon: "info",
                                                showCancelButton: true,
                                                confirmButtonText: "Yes, Buy it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) Swal.fire({
                                                  title: "Thank You!",
                                                  text: "Product purchased successfully!",
                                                  icon: "success"
                                                });
                                            });
                                        }}>
                                        Buy Now
                                    </button>

                                    <button 
                                        className="py-2.5 px-20 bg-[#f57224] text-white cursor-pointer transition duration-500 hover:bg-[#d0611e]"
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Good job!",
                                                text: "Your product has been added succsessfully!",
                                                icon: "success"
                                            });
                                        }}
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                                
                            </div>

                            <div className="w-full px-1">

                                <div className="bg-[#fafafa] p-4 pb-6 border-b border-gray-200">

                                    <div className="flex justify-between items-center mb-3 text-sm">

                                        <h2 className="text-gray-500 text-xs">Delivery Options</h2>

                                        <InfoOutlinedIcon className="text-gray-400" fontSize="extra-small" />

                                    </div>

                                    <div className="flex gap-3 mb-4">

                                        <LocationOnOutlinedIcon className="text-gray-400 mt-1" />

                                        <div className="flex justify-between items-center">

                                            <p className="text-sm">Sindh, Karachi - Gulshan-e-Iqbal, Block 15</p>

                                            <button className="text-blue-600 text-sm">CHANGE</button>

                                        </div>

                                    </div>

                                    <div className="flex justify-between items-start mb-4">

                                        <div className="flex gap-3">

                                            <LocalShippingOutlinedIcon className="text-gray-400 mt-1" />

                                            <div>

                                                <p className="text-sm">Standard Delivery</p>

                                                <p className="text-gray-400 text-xs">Guaranteed by 29-31 Mar</p>

                                            </div>

                                        </div>

                                        <p className="text-sm">Rs. 150</p>

                                    </div>

                                    <div className="flex justify-between items-start mb-4">

                                        <div className="flex gap-3">

                                            <Inventory2OutlinedIcon className="text-gray-400 mt-1" />

                                            <div>

                                                <p className="text-sm">Standard Collection Point</p>

                                                <p className="text-gray-400 text-xs">Guaranteed by 29-31 Mar</p>

                                            </div>

                                        </div>

                                        <p className="text-sm">Rs. 35</p>

                                    </div>

                                    <div className="flex gap-3 items-center">

                                        <PaymentsOutlinedIcon className="text-gray-500 mt-1" />

                                        <p className="text-sm">Cash on Delivery Available</p>

                                    </div>

                                </div>

                                <div className="bg-[#fafafa] p-4 pt-6 border-b border-gray-200">

                                    <div className="flex justify-between items-center mb-3">

                                        <h2 className="text-xs text-gray-400">Return & Warranty</h2>

                                        <InfoOutlinedIcon className="text-gray-400" fontSize="xtra-small" />

                                    </div>

                                    <div className="flex gap-3 mb-3">

                                        <AutorenewOutlinedIcon className="text-gray-500" />

                                        <p className="text-sm text-gray-700">14 days easy return</p>

                                    </div>

                                    <div className="flex gap-3">
                                            
                                        <GppGoodOutlinedIcon className="text-gray-500" />
                                            
                                        <p className="text-sm text-gray-700">Warranty not available</p>
                                            
                                    </div>

                                </div>

                                <div className="bg-[#fafafa] p-4">

                                    <div className="flex gap-3 items-center">

                                        <img src="/assets/global-images/QR-Code-img.png" alt="qr" className="w-50 h-28"/>

                                            <div className="bg-white px-3 py-1.5 rounded shadow-xl flex flex-col gap-2">

                                                <img src="/assets/global-images/new-icon.png" alt="daraz icon" width="50px" className="rounded" />

                                                <p className="text-xs text-gray-500 pb-4">Download app to enjoy exclusive discounts!</p>

                                            </div>

                                        </div>

                                        <p className="text-xs text-gray-400 pt-2">
                                            <StayCurrentPortraitIcon fontSize="small" className="pb-1" />Scan with mobile
                                        </p>

                                    </div>

                                    <div className="bg-[#fafafa] mt-2.5 p-4">

                                        <div className="flex justify-between items-center mb-2">

                                            <div>
                                                <p className="text-xs text-gray-400">Sold by</p>

                                                <p>Hair Energy</p>
                                            </div>

                                            <button className="text-blue-600 text-sm flex items-center gap-1 font-semibold">

                                                <QuestionAnswerOutlinedIcon fontSize="xtra-small" />Chat Now
            
                                            </button>

                                        </div>

                                        <div className="grid grid-cols-3 border-t border-gray-200 mt-3">

                                            <div className="border-r py-3 border-gray-200">

                                                <p className="text-xs text-gray-500">Positive Seller Ratings</p>

                                                <p className="text-2xl pt-2">93%</p>

                                            </div>

                                            <div className="border-r border-gray-200 pl-2">

                                                <p className="text-xs text-gray-500 pt-3.5">Ship on Time</p>

                                                <p className="text-2xl pt-6">100%</p>

                                            </div>

                                            <div className="pl-2">
                                                            
                                                <p className="text-xs text-gray-500 pt-3">Chat Response Rate</p>
                                                            
                                                <p className="text-[11px] pt-5 text-gray-300">Not enough data</p>
                                                            
                                            </div>

                                        </div>

                                    <button className="w-full text-sm pt-2 text-blue-600 border-t border-gray-200 cursor-pointer hover:underline">
                                        GO TO STORE
                                    </button>

                                </div>

                            </div>
                        
                        </div>

                    </div>

                </div>

            </div>

            <div className="max-w-[1250px] mx-auto">

                <div ref={detailsRef} className="bg-white mx-10 px-5 my-3 w-250 pr-5">

                    <div className={`overflow-hidden transition-all duration-300  ${viewFull ? "h-full" : "h-210 mask-b-from-50"}`}>
        
                        <h2 className="py-10 font-medium">Product details of</h2>

                        <p className="text-sm">{product.description}</p>

                        <div className="mt-5 py-2.5 flex flex-col gap-3 border-t border-b border-gray-200">

                            {(product.images && product.images.length > 0
                                ? product.images
                                : [product.thumbnail]
                            
                            ).map((img, index) => (
                            
                                <img key={index} src={img} alt={`Product Image ${index + 1}`} className="w-120 object-contain bg-gray-100 my-2.5"/>

                            ))}

                        </div>

                        <h2 className="py-5 font-medium">Specifications of</h2>

                        <div className="text-sm flex gap-5">

                            <div className="w-125">

                                <p className="text-gray-400">Brand</p>
                                <p>{product.brand ? product.brand : "No Brand"}</p>
                            
                                <p className="text-gray-400 pt-2">Express delivery</p>
                                <p>Out of Country</p>

                                <p className="text-gray-400 pt-2">Storage</p>
                                <p className="text-gray-400">Requirements</p>
                                <p>Own Desigion</p>

                                <p className="text-gray-400 pt-2">Model</p>
                                <p>Since 1999</p>

                                <div className="flex gap-20 pt-8">
                                    <p className="text-gray-400">What’s in the box</p>
                                    <p>{product.tags[0]}</p>
                                </div>

                            </div>
                            
                            <div>

                                <p className="text-gray-400">SKU</p>
                                <p>{product.sku}</p>    

                                <p className="text-gray-400 pt-2">dMart</p>
                                <p>Across Pakistan, N/A</p>
                            
                                <p className="text-gray-400 pt-2">Fragranced</p>
                                <p>No</p>
                            
                            </div>

                        </div>

                    </div>

                    <div className="text-center">

                        <button onClick={handleToggle} className="text-blue-500 font-medium cursor-pointer border border-blue-500 py-1.5 px-6 my-4 mb-5 transition duration-400 hover:bg-blue-500 hover:text-white">
                            {viewFull ? "VIEW LESS" : "VIEW MORE"}
                        </button>
                    
                    </div>

                </div>

            </div>

            
            <div className="max-w-[1250px] mx-auto">

                <div className="w-250 bg-white mx-10 my-3">

                    <h2 className="text-lg font-medium bg-[#fafafa] p-5 mt-5">Ratings & Reviews of {product.title}</h2>

                    <div className="flex gap-20 items-start p-5 mt-5 pb-8 border-b border-gray-200">

                        <div>

                            <h1 className="text-5xl font-normal pt-2.5">{rating}
                                <span className="text-gray-400 text-2xl">/5</span>
                            </h1>

                            <div className="flex mt-2">
            
                                {[1,2,3,4,5].map((star) =>
                                    star <= rating
                                    ? <StarIcon key={star} className="text-[#ffc83c]" fontSize="large" />
                                    : <StarBorderIcon key={star} className="text-gray-300" fontSize="large" />
                                )}
          
                            </div>

                            <p className="text-sm text-gray-500 mt-2">{totalRatings} Ratings</p>

                        </div>

                        <div className="flex flex-col gap-2 w-72">

                            {[5,4,3,2,1].map((star) => {

                                const count = ratingCounts[star];

                                const percent =
                                    totalRatings > 0
                                    ? (count / totalRatings) * 100
                                    : 0;

                                    return (

                                        <div key={star} className="flex items-center gap-3">

                                            <div className="flex">

                                                {[1,2,3,4,5].map((i) =>
                                                    i <= star
                                                    ? (
                                                        <StarIcon
                                                          key={i}
                                                          className="text-[#ffc83c] text-sm"
                                                          fontSize="small"
                                                        />
                                                    )
                                                    : (
                                                        <StarBorderIcon
                                                          key={i}
                                                          className="text-gray-300 text-sm"
                                                          fontSize="small"
                                                        />
                                                    )
                                                )}

                                            </div>

                                        <div className="flex-1 h-2 bg-gray-200 relative">

                                            <div className="h-2 bg-[#ffc83c]" style={{ width: `${percent}%`}}></div>

                                        </div>

                                        <span className="text-sm text-gray-500 w-5">
                                          {count}
                                        </span>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                    <div className="flex justify-center mt-5">

                        <img
                          src="/assets/global-images/two-faces.png"
                          alt="No Reviews"
                          className="w-18"
                        />

                    </div>

                    <p className="text-center text-gray-500 mt-3 pb-5 text-sm">
                      This product has no reviews.
                      <br />
                      Let others know what do you think and be the first to write a review.
                    </p>

                </div>

            </div>

            <div className="max-w-[1250px] mx-auto">

                <div className="w-250 bg-white mx-10 my-3 mb-8">

                    <h2 className="text-lg font-medium bg-[#fafafa] p-5 mt-5">Questions about this product</h2>

                    <div className="flex justify-center mt-5 text-gray-300 pt-6 pb-3">

                        <LiveHelpOutlinedIcon sx={{ fontSize: 60 }} />
                    
                    </div>

                    <p className="text-center text-gray-500 mt-3 pb-5 text-sm">
                      There are no questions yet.
                      <br />
                      <span className="text-blue-500">Login</span> or <span className="text-blue-500">Register</span> to ask the seller now and answer will show here.
                    </p>

                </div>

            </div>

            <MainFooter />
            
        </>
    );
    
}

export default ProductDetail;
