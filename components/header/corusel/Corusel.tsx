import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../../product/Product";
import { CoruselProps } from "./types";
export default function Corusel({ products }: CoruselProps) {
  return (
    <div className="w-full max-w-xs flex justify-center p-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products.map((el) => {
          return (
            <SwiperSlide className="bg-white rounded-lg max-w-xs" key={el.id}>
              <Product data={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
