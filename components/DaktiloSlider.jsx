'use client';
import React, { useState } from 'react'
import { Carousel } from '@mantine/carousel';
import { createStyles, rem } from '@mantine/core';
import { sliderData, authorsData } from '@utils/mock';
import DaktiloSliderCard from './DaktiloSliderCard';
import { DaktiloProfileCard } from './DaktiloProfileCard';

const useStyle = createStyles((theme) => ({

  container: {
    display: 'flex',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

  },

  thumbnail: {
    border: 1,
    width: 20,
    height: 20,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    

  },
  active: {
    border: 1,
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 15,
    display: 'flex',
    justifyContent: 'center'
  },
}))





  export default function DaktiloSlider({ style, slidesToScroll, slideGap, miniCarousel = false, orientation = 'horizontal', indicators = false, Component, slideData}) {
    const {classes} = useStyle();

    if(miniCarousel) {
      const slides = slideData.map((item, index) => (
        <Carousel.Slide key={index}>
          <Component {...item} />
        </Carousel.Slide>
      ));
    return (
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2), }]}
        slideGap={slideGap}
        align="start"
        slidesToScroll={slidesToScroll}
        style={style}
        orientation={orientation}
        mt={20}
      >
        {slides}
      </Carousel>
    )
    }  
    const slides = sliderData.map((item) => (
      <Carousel.Slide key={item.title}>
        <DaktiloSliderCard buttonTitle='Haberi Oku' {...item} />
      </Carousel.Slide>
    ));



  return (
    <>
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap={slideGap}
      align="start"
      slidesToScroll={slidesToScroll}
      styles={style}
      orientation={orientation}
      withIndicators={indicators}
    >
      {slides}
    </Carousel> 
    </>
  )
}
/*
   indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',
          '&[data-active]': {
            width: rem(40),
          },
        },
 */  