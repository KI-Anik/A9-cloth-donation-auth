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
import { FaSearch, FaWpforms } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaMapLocation } from "react-icons/fa6";
import ExtraTwoSec from "./Pages/Home/ExtraTwoSec";

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  useEffect(() => {
    Aos.init({duration:1500})
  }, [])

  return (
    <>
      {/* index.css */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide> <img src={banner1} alt="cloth-photo1" /> </SwiperSlide>
        <SwiperSlide> <img src={banner2} alt="cloth-photo2" /> </SwiperSlide>
        <SwiperSlide> <img src={banner3} alt="cloth-photo3" /> </SwiperSlide>

      </Swiper>

      {/* 3rd section */}
      <section className="space-y-6 bg-slate-300 p-12 text-center">
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
          <img data-aos="fade-right" src={banner4} alt="" />
          <div className="space-y-5" data-aos="fade-left">
            <h3 className="text-3xl font-semibold">Your gift will bring smiles to more children like Sahar</h3>
            <p>Amidst an ongoing conflict and back-to-back earthquakes, families like Sahar’s are living in a state of constant stress and cannot afford basic <br />essentials. And with winter temperatures in many areas of Afghanistan dropping as low as -20 degrees Celsius, it’s critical that children receive warm clothes and blankets in time. Without them, children are at risk of developing life-threatening illnesses, like pneumonia. <br />

              BDCOT is preparing warm winter kits with clothing and blankets for children and their families in need. But the needs are immense and we cannot do this without your help. <br />

              Donate now to help a child stay warm this winter.</p> <br />

            {/* btn here */}
            <Link to={'/donationCam'} className="btn bg-orange-400 hover:text-green-600 text-white text-xl font-bold">Send Warmth Now</Link>

            <p>Millions of children around the world are counting on our support to stay warm this winter. With your help, we can ensure they have the essentials they need to make it through the harsh, cold months ahead.</p>
          </div>
        </div>
      </section >

      {/* how it works start */}
      <section className="bg-slate-200 space-y-4 text-center p-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <p>Donate winter clothing in just 3 steps and bring  warmth to this need</p>

        <div className="grid md:grid-cols-3 justify-center items-center gap-5">
          {/* 1st card */}
          <div className="p-5 bg-white shadow-xl space-y-2" data-aos="fade-down-right">
            <FaSearch className="text-3xl mx-auto"></FaSearch>
            <h2 className="text-xl font-semibold">step 1: Find a Camp</h2>
            <p>select a donation camp near you and view the details.</p>
          </div>

          {/*2nd card */}
          <div className="p-5 bg-white shadow-xl space-y-2" data-aos="zoom-in-down">
            <FaWpforms className="text-3xl mx-auto"></FaWpforms>
            <h2 className="text-xl font-semibold">step 2: Fill the form</h2>
            <p>provide the neccessary details about your donation. </p>
          </div>

          {/* 3rd card */}
          <div className="p-5 bg-white shadow-xl space-y-2" data-aos="fade-down-left">
            <GiConfirmed className="text-3xl mx-auto"></GiConfirmed>
            <h2 className="text-xl font-semibold">step 3: Confirm Donation</h2>
            <p>submit your donation and receive a confirmation message.</p>
          </div>

          {/* all district */}
          <div className="col-span-3">
            <ul className="grid grid-cols-4">
              <li className="flex justify-center items-center gap-3 space-y-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Dhaka</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Chattogram</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Barishal</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Sylhet</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Khulna</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Rangpur</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Mymensing</h5>
              </li>
              <li className="flex justify-center items-center gap-3">
                <FaMapLocation></FaMapLocation>
                <h5 className="font-semibold">Rajshahi</h5>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* how it works end */}

      {/* 4th section start */}
      <section>
        <ExtraTwoSec></ExtraTwoSec>
      </section>
      {/* 4th section end */}
    </>
  );
}
