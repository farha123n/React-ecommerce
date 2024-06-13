import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Swipper = () => {
    return (
        <Swiper className='z-10'
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
              <SwiperSlide  ><img className='h-96 w-full' src="img/beef.jpg" alt="" /></SwiperSlide>
      <SwiperSlide ><img className='h-96 w-full' src="img/Chicken-rooster-in-grass.jpg" alt="" /></SwiperSlide>
      <SwiperSlide ><img className='h-96 w-full' src="img/pexels-enginakyurt-2042591.jpg" alt="" /></SwiperSlide> 
        </Swiper>
    );
};

export default Swipper;