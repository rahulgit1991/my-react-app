import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Banner() {
  return (
    <section className="banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
            <div className="banner-content">
                <img src="https://dummyimage.com/1920x500/000/fff" alt="Banner Image" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="banner-content">
                <img src="https://dummyimage.com/1920x500/777/fff" alt="Banner Image" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="banner-content">
                <img src="https://dummyimage.com/1920x500/333/fff" alt="Banner Image" />
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;