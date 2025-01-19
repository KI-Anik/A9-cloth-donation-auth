// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const ExtraTwoSec = () => {
    return (
        <div className='text-center'>

            <h2 className="text-3xl text-sky-600 font-bold  my-14">We couldn&apos;t have done it without the donors like you</h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>Being a BDCOT donor is an honor and privilege for me. When you make a donation, you give hope and happiness to children who need it the most. This is what motivates me to continue donating to BDCOT.</p>
                        <h4 className="font-semibold"> - Avishekh, a BDCOT Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I know that my donations will get to the right people and assist them in their trouble. It makes me feel that I have done something special for those in need. I also believe BDCOT to be a worthy organisation and one which will use the money efficiently where it is most needed.</p>


                        <h4 className="font-semibold"> - Gashubije, a BDCOT Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>It seemed to me, after working with various other organizations, that BDCOT is the most focused on children's needs and the most able. I feel I am able to make a difference no matter how big the task is with an organisation that never gives up!</p>

                        <h4 className="font-semibold"> - Mainus, a BDCOT Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I was once a victim of a crisis. The experience was tough. The man who accommodated us treated us nicely. I know there are a lot of people out there who need help daily. To me, it doesn't matter whether you have all or not. With the little you have; you can put a smile on someone else's face.</p>

                        <h4 className="font-semibold"> - George, a BDCOT Donor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" p-8 pb-10 bg-white shadow-xl space-y-7">
                        <p>I know that my donations will get to the right people and assist them in their trouble. It makes me feel that I have done something special for those in need. I also believe BDCOT to be a worthy organisation and one which will use the money efficiently where it is most needed.</p>

                        <h4 className="font-semibold"> - washington, a BDCOT Donor.</h4>
                    </div>
                </SwiperSlide>

            </Swiper>

            <Link to={'/donationCam'} className='btn bg-orange-400 hover:text-green-600 text-white text-xl my-8 font-bold'>Donate Now</Link>


            {/* LAST SECTION start */}
            <section className='space-y-6 bg-slate-300 p-12 text-center'>
                <h2 className="text-5xl text-sky-600 font-bold  my-14">Frequently Asked Questions</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is BDCOT</div>
                    <div className="collapse-content">
                        <p>BDCOT is the United Nations Children&apos;s Fund, working to protect and promote the rights of every child, everywhere. We work to help the most vulnerable with health care and immunizations, safe water and sanitation, nutrition, education, emergency relief, and more.

                            Thanks to support from donors like you, we have been able to make a difference for children in need, to save, nurture, and protect the most vulnerable. We are active in over 190 countries and territories and have helped save more children&apos;s lives than any other humanitarian organization.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How can i make donation</div>
                    <div className="collapse-content">
                        <p>You can securely make a one-time or/and monthly donation online on our website on the Donate Now button.

                            Your contribution may be of any amount with no limitations. No donation is too small, and any donation can help save children&apos;s lives.

                            You choose for how long you wish to donate: monthly or only once, and you can easily amend the frequency and amount of your donation or cancel your online giving. In order to contribute to a fundamental change in the lives of vulnerable children, the longer you choose to get involved, the more powerful your donation will be. A child&apos;s life can improve with your long-term, constant support. By donating, you become an active part of the solution and of the change process.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How will i know how my donation is being utilized?</div>
                    <div className="collapse-content">
                        <p>We will be sending you regular updates in the form of e-mails, digital communication, etc., of the progress that has been made and keep you updated about BDCOT&apos;s work, in the region, and around the world.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}


export default ExtraTwoSec;