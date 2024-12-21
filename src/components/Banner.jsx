import banner1 from "../assets/banner.jpg"
import banner2 from "../assets/female-hand-holding-cloths.jpg"
import banner3 from "../assets/donate-key.jpg"

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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide> <img src={banner1} alt="cloth-photo" /> </SwiperSlide>
        <SwiperSlide> <img src={banner2} alt="cloth-photo" /> </SwiperSlide>
        <SwiperSlide> <img src={banner3} alt="cloth-photo" /> </SwiperSlide>
    
      </Swiper>

      <div className="space-y-4">
        <h2 className="text-4xl font-bold">What we offer!</h2>
        <p>
        BDCOT Step believes that we all have that inner voice inside our head that makes us terrible each time we throw off or abandon something that we don’t use anymore but that can be used to someone in need. Be it a dress that doesn’t fit you anymore, childhood cloth or some old fashioned shoes, we make sure that we deliver them to a place where they can be given a new life. <br />

Have you ever asked yourself: Which are the organizations where I can give away my old household items? Where can I donate clothes? Can someone pick up the donations from my home/office? Can I know the requirements of the NGOs near me and fulfil them on my birthday? <br />

You have questions and BDCOT Step has the answers! Just surf around our website and you will learn everything you need to know to make a donation. Whenever you are ready, we will even help you schedule a donation pick-up. <br />
        </p>
      </div>
    </>
  );
}
