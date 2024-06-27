import { heroImage1, heroImage2, heroImage3 } from "../../../assets/images";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
// import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { GiCheckMark } from "react-icons/gi";

export const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      // modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      speed={700}
      // navigation
      pagination={{ clickable: true }}
      className="wrapper"
    >
      <SwiperSlide className="box">
        <div className="txt">
          <h2>SINC Partners is a service incubation company </h2>
          <p>
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange
            for minute equity (usually 0.5% to 2%).
          </p>
          <button>SINC with us</button>
        </div>

        <div className="img_con">
          <img src={heroImage1} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="box">
        <div className="txt">
          <h2>We are big on these 3 things; </h2>
          <ul>
            <li>
              {" "}
              <span>
                <GiCheckMark />
              </span>
              Service Incubation & Ecosystem Advocacy
            </li>
            <li>
              {" "}
              <span>
                <GiCheckMark />
              </span>
              Building SAAS & Marketing Tech Platforms
            </li>
            <li>
              {" "}
              <span>
                <GiCheckMark />
              </span>
              Institutional Innovations
            </li>
          </ul>
          <button>SINC with us</button>
        </div>

        <div className="img_con">
          <img src={heroImage2} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="box">
        <div className="txt">
          <h2>Come with an idea, leave with a company.</h2>
          <p>
            You, alongside seasoned service partners and investors, expedite the
            growth and market entry of your startup.
          </p>
          <button>SINC with us</button>
        </div>

        <div className="img_con">
          <img src={heroImage3} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
