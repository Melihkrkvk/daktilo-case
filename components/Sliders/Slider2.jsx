import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
    swiper: {
        width: 270,
        height: 400,
    },
    swiper_slide: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#fff',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiper_slide_img: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'        
    }
}));

function Slider2 () {
    const {classes} = useStyle();
  return (
    <Swiper
      className={classes.swiper}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className={classes.swiper_slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={classes.swiper_slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={classes.swiper_slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={classes.swiper_slide}>Slide 4</SwiperSlide>
      
    </Swiper>
  );
};
export default Slider2