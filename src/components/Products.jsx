import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Rating } from "@mui/material";
import Swal from "sweetalert2";

function Products() {

  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 19;

  const fetchProducts = async () => {
    
    try {

      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

      setProducts(prev => {
      
        const newProducts = res.data.products;

          const filtered = newProducts.filter(
            newItem => !prev.some(prevItem => prevItem.id === newItem.id)
          );

        return [...prev, ...filtered];
      
      });

      if (skip + limit >= res.data.total) {
        Swal.fire({
          title: "Sorry!",
          text: "There are no more Products!",
          icon: "error"
        });
      }

    } 
    catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  const loadMore = () => {
    setSkip(prev => prev + limit);
  };

  return (
    <>

      <h1 className="text-[24px] mt-12 mx-2.5">Flash Sale</h1>

      <div className="bg-white mx-2.5">

        <div className="flex justify-between px-2 py-4">

          <h4 className="text-orange-500 font-semibold pl-4">On Sale Now</h4>

          <Link>
            <button className="text-orange-500 font-semibold p-2 border border-orange-500 cursor-pointer">SHOP ALL PRODUCTS</button>
          </Link>
        
        </div>

        <hr className="text-gray-300" />

        <div className="flex gap-2 py-2.5 pb-4">

          <Link to="/" >
          
            <div className="w-48 pl-2 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-1.avif" alt="Knorr Chatpatta Noodles" width="200px" />

              <h6 className="pt-3.5">Knorr Chatpatta Noodles 200G</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.164</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.185</p>
                <p className="text-[12px]">-11%</p>
            
              </div>

            </div>

          </Link>

          <Link to="/" >
          
            <div className="w-48 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-2.avif" alt="Weight Machine" width="200px" />

              <h6 className="pt-3.5">180kgs Household Precision Electronic...</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.1688</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.2,399</p>
                <p className="text-[12px]">-30%</p>
            
              </div>

            </div>
          
          </Link>

          <Link to="/" >
          
            <div className="w-48 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-3.avif" alt="Palmolive Soap" width="200px" />

              <h6 className="pt-1">Palmolive Natural Flawless Glow Bar Soap...</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.132</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.148</p>
                <p className="text-[12px]">-11%</p>
            
              </div>

            </div>
          
          </Link>

          <Link to="/" >
          
            <div className="w-48 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-4.avif" alt="Nofea Sanitary Pads" width="200px" />

              <h6 className="pt-1">Nofea Napkins/Sanitary Pads Maxi Thick Extra...</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.1,046</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.1,444</p>
                <p className="text-[12px]">-28%</p>
            
              </div>

            </div>
          
          </Link>

          <Link to="/" >
          
            <div className="w-48 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-5.avif" alt="Alif Urdu Novel" width="200px" />

              <h6 className="pt-1">Alif Best Urdu Novel - Best Selling Urdu Reading...</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.519</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.595</p>
                <p className="text-[12px]">-13%</p>
            
              </div>

            </div>

          </Link>

          <Link to="/">
          
            <div className="w-48 hover:shadow-xl">
            
              <img src="/assets/flash-sale/img-6.avif" alt="Keratin Shampoo" width="200px" />

              <h6 className="pt-3.5">Keratin shampoo + keratin hair mask + keratin seru...</h6>

              <h3 className="text-orange-500 font-medium text-[18px]">Rs.715</h3>

              <div className="flex justify-items-start gap-1 items-center pl-0.5">

                <p className="line-through text-gray-500 text-[12px]">Rs.2,000</p>
                <p className="text-[12px]">-64%</p>
            
              </div>

            </div>

          </Link>

        </div>

      </div>


      <h1 className="text-[24px] mt-12 mx-2.5">Categories</h1>

      <div className="bg-white mx-2.5 py-4">

        <div className="flex justify-around">
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-1.avif" alt="3D Printer" width="100px" />
              <p className="pt-2.5">3D Printer</p>
            </div>
          </Link>

          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-2.avif" alt="Pasta, Noodle & Pizza Tools" width="90px" />
              <p className="text-[15px]">Pasta, Noodle &<br />Pizza Tools</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-3.avif" alt="SIM Tools" width="110px" />
              <p className="pt-1">SIM Tools</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-4.avif" alt="Screen Protectors" width="100px" />
              <p className="pt-3">Screen Protectors</p><br />
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-5.avif" alt="Shorts" width="105px" />
              <p className="pt-2.5">Shorts</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-6.avif" alt="Casserole Pots" width="100px" />
              <p className="pt-3">Casserole Pots</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-7.avif" alt="Hoodies & Sweatshirts" width="100px" />
              <p className="pt-1">Hoodies &<br />Sweatshirts</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-8.avif" alt="Toy Boxes & Organisers" width="100px" />
              <p className="pt-1">Toy Boxes &<br />Organisers</p>
            </div>
          </Link>
          
        </div>

        <hr className="text-gray-300" />

        <div className="flex justify-around pt-5">
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-9.avif" alt="Dog & Cat Electric Clippers" width="100px" />
              <p className="pt-1">Dog & Cat Electric<br />Clippers</p>
            </div>
          </Link>

          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-10.avif" alt="Dining Sets" width="100px" />
              <p className="pt-2.5">Dining Sets</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-11.avif" alt="Microphones" width="100px" />
              <p className="pt-2.5">Microphones</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-12.avif" alt="Lashes & Harnesses" width="100px" />
              <p className="pt-1.5">Lashes &<br />Harnesses</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-13.avif" alt="Paints" width="100px" />
              <p className="pt-2.5">Paints</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-14.avif" alt="Scooters" width="100px" />
              <p className="pt-2.5">Scooters</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-15.avif" alt="Donate to Educate" width="90px" />
              <p className="pt-1">Donate to<br />Educate</p>
            </div>
          </Link>
          
          <Link to="/">
            <div className="text-center">
              <img src="/assets/categories/img-16.avif" alt="Coloring & Drawing" width="100px" />
              <p className="pt-1.5">Coloring &<br />Drawing</p>
            </div>
          </Link>
          
        </div>

      </div>


      <h1 className="text-[24px] mt-12 mx-2.5">Just For You</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mx-2.5">

        {products.map((item) => (

          <Link to={`/products/${item.id}`} key={item.id}>

            <Card className="h-[320px] flex flex-col justify-between hover:!shadow-xl">

              <div className="h-[180px] flex items-center justify-center p-2">
                
                <CardMedia component="img" image={item.thumbnail} alt={item.title} className="h-full object-contain"/>
              
              </div>

              <CardContent className="flex flex-col justify-between flex-1 px-1 gap-1 !important">

                <Typography className="text-sm font-semibold line-clamp-2 !leading-tight">
                  {item.title}
                </Typography>

                <div className="flex items-center gap-1">

                  <span className="text-orange-500 text-[18px]">
                    Rs.{Math.floor(item.price)}
                  </span>

                  <span className="text-gray-500 text-xs pl-1 pt-0.5">
                    -{Math.floor(item.discountPercentage)}%
                  </span>
                
                </div>

                <div className="flex items-center gap-1">

                  <Rating value={item.rating || 4} precision={0.5} size="small" readOnly sx={{ fontSize: "14px", gap: "0px" }} />

                  <span className="text-gray-500 text-xs">
                    ({Math.floor(item.stock + 20)})
                  </span>

                </div>

              </CardContent>

            </Card>

          </Link>

        ))}

      </div>


      <div className="flex justify-center py-5 pt-10">
        
        <button onClick={loadMore} className="text-[#1a9cb8] bg-transparent border border-[#1a9cb8] py-2.5 px-40 text-[14.8px] cursor-pointer">LOAD MORE</button>

      </div>

    </>
  );

}

export default Products
