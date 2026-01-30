// src/components/FeatureGrid.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    title: "Fast Performance",
    img: "https://dummyimage.com/300x200/000/fff",
  },
  {
    title: "Responsive Design",
    img: "https://dummyimage.com/300x200/333/fff",
  },
  {
    title: "Modern UI",
    img: "https://dummyimage.com/300x200/555/fff",
  },
  {
    title: "Secure Code",
    img: "https://dummyimage.com/300x200/777/fff",
  },
];

function HomepageGrid() {
  return (
    <section className="container my-5">
      {/* ===== MOBILE SLIDER ===== */}
      <div className="d-block d-md-none">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card text-center">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== DESKTOP GRID ===== */}
      <div className="d-none d-md-block">
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 text-center">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageGrid;
