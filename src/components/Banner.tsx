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
                <img src="https://dummyimage.com/1920x500/000/fff" class="d-none d-md-block desktop-banner" alt="Banner Image" />
                <img src="https://dummyimage.com/768x900/000/fff" class="d-block d-md-none mobile-banner" alt="Banner Image" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="banner-content">
                <img src="https://dummyimage.com/1920x500/777/fff" class="d-none d-md-block desktop-banner" alt="Banner Image" />
                <img src="https://dummyimage.com/768x900/777/fff" class="d-block d-md-none mobile-banner" alt="Banner Image" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="banner-content">
                <img src="https://dummyimage.com/1920x500/333/fff" class="d-none d-md-block desktop-banner" alt="Banner Image" />
                <img src="https://dummyimage.com/768x900/333/fff" class="d-block d-md-none mobile-banner" alt="Banner Image" />
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;