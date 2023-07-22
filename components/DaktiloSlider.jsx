import React from 'react'
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';
import { sliderData } from '@utils/mock';
import DaktiloSliderCard from './DaktiloSliderCard';


  export default function DaktiloSlider({ style, slidesToScroll, slideGap }) {    
    const slides = sliderData.map((item) => (
      <Carousel.Slide key={item.title}>
        <DaktiloSliderCard buttonTitle='Haberi Oku' {...item} />
      </Carousel.Slide>
    ));
  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap={slideGap}
      align="start"
      slidesToScroll={slidesToScroll}
      style={style}
      orientation='horizontal'
    >
      {slides}
    </Carousel>
  )
}
