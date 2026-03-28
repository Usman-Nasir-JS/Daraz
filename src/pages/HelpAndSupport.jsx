import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function ServiceItem({ img, text }) {

  return (
    <div className='flex flex-col items-center text-center text-gray-500 hover:text-blue-500 cursor-pointer group'>

      <img src={img} alt={text} width="50px"
        className='rounded-full group-hover:shadow-lg group-hover:shadow-gray-300'
      />

      <p className='mt-2'>{text}</p>

    </div>
  );

}

function HelpAndSupport() {

  return (
    <>

      <nav className='w-full'>

        <div className='max-w-[1250px] mx-auto flex justify-between px-5 bg-white'>

          <div className='flex justify-center gap-2 items-center'>

            <img src="https://img.alicdn.com/imgextra/i3/O1CN01NPLO4Y28DL5IDtAeP_!!6000000007898-2-tps-5693-3201.png" alt="Daraz Logo" width={'125px'} />

            <h1 className='border-l border-gray-300 text-2xl px-2.5'>Help Ceneter</h1>
          
          </div>

          <div className='flex justify-center gap-10 px-4 items-center text-[22px]'>

            <NavLink to="/helpcenter"
              className={({ isActive }) =>
                isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
              }
            >
              Homepage
            </NavLink>

            <NavLink to="/helpcenter/faq"
              className={({ isActive }) =>
                isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
              }
            >
              FAQ
            </NavLink>

          </div>

        </div>
            
      </nav>

      <main className='w-full'>

        <div className='bg-[url("/assets/help-center/hero-img.png")] bg-cover bg-center max-w-[1250px] mx-auto'>

          <div className='pt-5'>

            <h4 className='text-white text-2xl text-center'>Hi , how can we help?</h4>
          
          </div>
            
          <div className='flex justify-center items-center py-7 pb-15'>

            <input type="text" placeholder='Search for topics, questions...' className='p-2.5 py-3 w-[500px] bg-white placeholder:text-gray-400 placeholder:text-sm focus:outline-0' />

            <div className='bg-[#FF472E] text-center py-2 px-3.5 border-[3.9px] border-white'>
              <SearchIcon className='text-white' />
            </div>

          </div>

        </div>

      </main>

      <section className='w-full'>

      <div className='bg-white mx-auto my-5 p-0.5 max-w-[1250px]'>

        <h3 className='text-start py-2.5 px-5 text-xl'>Self Service Tool</h3>

          <div className='grid grid-cols-4 gap-y-6 py-4 text-sm pb-6'>

            <ServiceItem img="/assets/help-center/section_img-1.avif" text="Track My Order" />

            <ServiceItem img="/assets/help-center/section_img-2.avif" text="Reset Password" />

            <ServiceItem img="/assets/help-center/section_img-3.avif" text="Daraz Wallet" />

            <ServiceItem img="/assets/help-center/section_img-4.avif" text="Cancel My Order" />

            <ServiceItem img="/assets/help-center/section_img-5.avif" text="Return My Order" />

            <ServiceItem img="/assets/help-center/section_img-6.avif" text="My Payment Options" />

            <ServiceItem img="/assets/help-center/section_img-7.avif" text="Change Delivery Address" />

            <ServiceItem img="/assets/help-center/section_img-8.avif" text="My Profile" />

          </div>

        </div>

      </section>

      <div className='w-full'>
                
        <div className='max-w-[1250px] mx-auto flex gap-2'>

          <div className='p-1.5 bg-white'>


            <h3 className='text-start py-2.5 px-5 text-xl'>Top Questions</h3>

            <div className='flex justify-around px-5 pr-8'>

              <div className='flex gap-1.5 text-md w-55 cursor-pointer hover:text-orange-500'>

                <p className='text-gray-300'>•</p>
                <p>How do I place an order on Daraz?</p>

              </div>

              <div className='flex gap-1.5 text-md w-56 cursor-pointer hover:text-orange-500'>

                <p className='text-gray-300'>•</p>
                <p>What are the terms and conditions when paying through Easy Monthly Instalment (EMI) ?</p>
              
              </div>

              <div className='flex gap-1.5 text-md w-55 cursor-pointer hover:text-orange-500'>
            
                <p className='text-gray-300'>•</p>
                <p>What is Daraz Collection point?</p>
            
              </div>

            </div>

            <div className='flex gap-1.5 text-md w-55 px-5 my-5 mb-6 cursor-pointer hover:text-orange-500'>
              <p className='text-gray-300'>•</p>
              <p>What is Daraz Land and How to Play?</p>
            </div>

          </div>

          <div className='bg-[url("/assets/help-center/card-img.png")] bg-cover bg-right'>
                        
            <h3 className='text-start py-2.5 px-5 text-xl'>My Cases</h3>
                    
            <p className='pl-5 text-sm'>To view your complains</p>

            <button className='bg-transparent py-2.5 border-2 border-[#1641b5] rounded-[10px] text-[#1641b5] px-45 mt-8 mx-5 mr-14 cursor-pointer hover:bg-[#dfe8ff]'>Click Here</button>

          </div>

        </div>

      </div>

      <section className='w-full'>

        <div className='bg-white mx-auto my-5 p-0.5 max-w-[1250px]'>

          <h3 className='text-start py-2.5 px-5 text-xl'>Categories</h3>
                                
          <div className='grid grid-cols-4 gap-y-6 py-4 text-sm pb-6'>
                                
            <ServiceItem img="/assets/help-center/section_img-9.avif" text="Promotions" />
            
            <ServiceItem img="/assets/help-center/section_img-10.avif" text="Account Management" />
            
            <ServiceItem img="/assets/help-center/section_img-11.avif" text="Daraz Categories" />
            
            <ServiceItem img="/assets/help-center/section_img-12.avif" text="Orders" />
            
            <ServiceItem img="/assets/help-center/section_img-13.avif" text="Shipping & Delivery" />
            
            <ServiceItem img="/assets/help-center/section_img-14.avif" text="Payments" />
            
            <ServiceItem img="/assets/help-center/section_img-15.avif" text="Returns & Refund" />
            
            <ServiceItem img="/assets/help-center/section_img-16.avif" text="Sell on Daraz" />
            
          </div>

        </div>
                                
      </section>

      <p className='text-center text-[22.5px] font-medium pb-5'>Still looking for answers? Ask Daz anytime, day or night, Click on 'Contact Customer Care' to connect wit...</p>

      <div className='w-full'>

        <div className='max-w-[1250px] mx-auto bg-white'>

          <div className='flex justify-around py-10 mb-5 rounded'>

            <div className='flex justify-center gap-2 items-center cursor-pointer'>
              
              <img src="/assets/help-center/footer_img-1.avif" alt="Contact Customer" width="50px" />
                            
              <p>Contact Customer Care <br /><span className='text-gray-500'>9AM- 4PM [Mon - Sun]</span></p>
                        
            </div>

            <div className='flex justify-center gap-2 items-center cursor-pointer'>
                            
              <img src="/assets/help-center/footer_img-2.avif" alt="Call Us" width="50px" />
                            
              <p>Call Us 021-111-132729 <br /><span className='text-gray-500'>9AM- 4PM [Mon - Sun]</span></p>
                        
            </div>

          </div>

        </div>

      </div>
        
    </>
  )

}

export default HelpAndSupport
