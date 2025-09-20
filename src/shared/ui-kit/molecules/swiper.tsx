import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface Props {
  elementsList: React.ReactNode[];
  elementAmount: number;
}

export const SwiperImg = ({ elementsList, elementAmount }: Props) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Mousewheel, Scrollbar]}
        slidesPerView={elementAmount}
        navigation
        scrollbar={{
          hide: true,
        }}
        mousewheel
        className="[&_.swiper-scrollbar]:-mb-1.5 
        [&_.swiper-scrollbar-drag]:!neutral 
         [&_.swiper-button-prev]:!text-primary 
         [&_.swiper-button-next]:!text-primary 
          [&_.swiper-button-prev]:!w-6
    [&_.swiper-button-prev]:!h-6
    [&_.swiper-button-next]:!w-6
    [&_.swiper-button-next]:!h-6  "
      >
        {elementsList.map((el, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">{el}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
