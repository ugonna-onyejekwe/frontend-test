import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Featured_in_info, how_it_works_info } from "../../../components/data";
import { BsArrowRight } from "react-icons/bs";
import { heroImage1 } from "../../../assets/images";

export const Swiper_con2 = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={"auto"}
        autoplay={{ delay: 1000 }}
        speed={700}
        className="wrapper"
        breakpoints={{
          800: {
            slidesPerView: 1,
          },
        }}
      >
        {Featured_in_info.map((i, key) => {
          return (
            <SwiperSlide className="box" key={key}>
              <div className="img_con">
                <img src={heroImage1} alt="img" />
              </div>

              <div className="txt_con">
                <img src={i.company_logo} alt="img" className="company_logo" />
                <h3>{i.header}</h3>
                <p>{i.desc}</p>

                <div className="reporter">
                  <h5>reported by:</h5>
                  <h6>{i.reporter}</h6>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="btn">
        <button className="no_outline">
          build your dream{" "}
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};
