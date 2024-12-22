import banner1 from "../assets/banner.jpg"
import banner2 from "../assets/female-hand-holding-cloths.jpg"
import banner3 from "../assets/donate-key.jpg"
import banner4 from "../assets/two-chid.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
    {/* index.css */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide> <img src={banner1} alt="cloth-photo1" /> </SwiperSlide>
        <SwiperSlide> <img src={banner2} alt="cloth-photo2" /> </SwiperSlide>
        <SwiperSlide> <img src={banner3} alt="cloth-photo3" /> </SwiperSlide>

      </Swiper>

{/* 3rd section */}
      <div className="space-y-6 bg-blue-200 p-12 text-center">
        <h2 className="text-4xl font-bold">What we offer!</h2>
        <div className="space-y-6 text-xl">
          <p>
            BDCOT Step believes that we all have that inner voice inside our head that makes us terrible each time we throw off or abandon something that we don’t use anymore but that can be used to someone in need. Be it a dress that doesn’t fit you anymore, childhood cloth or some old fashioned shoes, we make sure that we deliver them to a place where they can be given a new life.  </p>

          <p>
            Have you ever asked yourself: Which are the organizations where I can give away my old household items? Where can I donate clothes? Can someone pick up the donations from my home/office? Can I know the requirements of the NGOs near me and fulfil them on my birthday? </p>

          <p>
          You have questions and BDCOT Step has the answers! Just surf around our website and you will learn everything you need to know to make a donation. Whenever you are ready, we will even help you schedule a donation pick-up. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-14 ">
        <img src={banner4} alt="" />
        <div className="space-y-5">
        <h3 className="text-3xl font-semibold">Your gift will bring smiles to more children like Sahar</h3>
        <p>Amidst an ongoing conflict and back-to-back earthquakes, families like Sahar’s are living in a state of constant stress and cannot afford basic <br />essentials. And with winter temperatures in many areas of Afghanistan dropping as low as -20 degrees Celsius, it’s critical that children receive warm clothes and blankets in time. Without them, children are at risk of developing life-threatening illnesses, like pneumonia. <br />

UNICEF is preparing warm winter kits with clothing and blankets for children and their families in need. But the needs are immense and we cannot do this without your help. <br />

Donate now to help a child stay warm this winter.</p> <br />

{/* btn here */}
<button className="btn bg-orange-400 hover:text-green-600 text-white text-xl font-bold">Send Warmth Now</button> 

<p>Millions of children around the world are counting on our support to stay warm this winter. With your help, we can ensure they have the essentials they need to make it through the harsh, cold months ahead.</p>
        </div>
      </div>
    </div >
    </>
  );
}
