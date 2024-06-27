import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { how_it_works_info } from "../../../components/data";
import { BsArrowRight } from "react-icons/bs";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

export const Swiper_con = () => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          prevEl: ".prev_arrow",
          nextEl: ".next_arrow",
        }}
        className="wrapper"
      >
        {how_it_works_info.map((i, key) => {
          return (
            <SwiperSlide className="box" key={key}>
              <div className="icon">{i.icon}</div>
              <h3>{i.header}</h3>
              <p>{i.desc}</p>
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

      <div className="swiper_btns">
        <span className="prev_arrow">
          <IoArrowBackSharp />
        </span>

        <span className="next_arrow">
          <IoArrowForward />
        </span>
      </div>
    </>
  );
};
