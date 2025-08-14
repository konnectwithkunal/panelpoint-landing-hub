import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import img15 from "@/assets/15.jpeg";
import img16 from "@/assets/16.jpeg";
import img17 from "@/assets/17.jpeg";
import img18 from "@/assets/18.jpeg";
import img19 from "@/assets/19.jpeg";
import img20 from "@/assets/20.jpeg";
import img21 from "@/assets/21.jpeg";
import img22 from "@/assets/22.jpeg";
import img23 from "@/assets/23.jpeg";
import img24 from "@/assets/24.jpeg";
import img25 from "@/assets/25.jpeg";
import img26 from "@/assets/26.jpeg";
import img27 from "@/assets/27.jpeg";
import img28 from "@/assets/28.jpeg";
import img29 from "@/assets/29.jpeg";
import img30 from "@/assets/30.jpeg";
import img31 from "@/assets/31.jpeg";
import img32 from "@/assets/32.jpeg";
import img33 from "@/assets/33.jpeg";
import img34 from "@/assets/34.jpeg";
import img35 from "@/assets/35.jpeg";
import img36 from "@/assets/36.jpeg";


type ImageSource = string;

const Gallery: FC = () => {
  const images: ImageSource[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-orange-500">Gallery</span>
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            initialSlide={0} // ensures starts from left
            className="pb-14"
          >
            {images.map((src: ImageSource, idx: number) => (
              <SwiperSlide key={idx}>
                <div
                  className="overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
<div className="swiper-button-prev-custom absolute top-1/2 left-4 md:-left-12 transform -translate-y-1/2 z-10">
  <button className="bg-orange-500 text-white p-2 md:p-3 rounded-full hover:bg-accent/80">
    <svg
      className="w-4 md:h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
</div>
<div className="swiper-button-next-custom absolute top-1/2 right-4 md:-right-12 transform -translate-y-1/2 z-10">
  <button className="bg-orange-500 text-white p-2 md:p-3 rounded-full hover:bg-accent/80">
    <svg
      className="w-4 md:h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
      />

      <style jsx>{`
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          transition: opacity 0.3s;
        }
        .swiper-button-prev-custom.swiper-button-disabled,
        .swiper-button-next-custom.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
          @media (max-width: 640px) {
        .swiper-pagination {
          margin-top: 16px; /* More gap between gallery and dots */
        }
      }
      `}</style>
    </section>
  );
};

export default Gallery;
