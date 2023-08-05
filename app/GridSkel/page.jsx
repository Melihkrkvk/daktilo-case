'use client'
import { LeadGrid } from '@components/GridDemo/Gridv2'
import React from 'react'
import DaktiloSliderCard from '@components/DaktiloSliderCard'
import DaktiloCard from '@components/DaktiloCard'
import Slider1, { CarouselItem } from '@components/Sliders/Slider1'
import { Container, Grid, SimpleGrid, Stack, rem } from '@mantine/core'
import Grid3 from '@components/GridDemo/Grid3'
import DaktiloSlider from '@components/DaktiloSlider'
import AuthorCard from '@components/UserCards/AuthorCard'
import { authorData } from '@utils/milliGazeteDemo'


const GridSkel = () => {
  
  return (
    <>
  <Container >
  <Grid columns={12}>
    <Grid.Col>
        <SimpleGrid breakpoints={[
          {maxWidth: 'md', cols: 4},
          {maxWidth: 'sm', cols: 2},
          {maxWidth: 'xs', cols: 2},
          ]} cols={4}>
        <DaktiloCard title={'deneme'} />
        <DaktiloCard title={'deneme'} />
        <DaktiloCard title={'deneme'} />
        <DaktiloCard title={'deneme'} />
        </SimpleGrid>
      </Grid.Col>

      <Grid.Col>
        <Slider1>
          <CarouselItem>1</CarouselItem>
        </Slider1>
      </Grid.Col>
      <Grid.Col mb={'xl'}>
      <DaktiloSlider miniCarousel slideGap={5} slidesToScroll={2} indicators={true} Component={AuthorCard} slideData={authorData}/>
      </Grid.Col>
     
      <Grid.Col md={6} lg={6} xs={12} sm={12}>
        <Slider1>
          <CarouselItem>1</CarouselItem>
        </Slider1>
      </Grid.Col>
      <Grid.Col md={6} lg={6} xs={12} sm={12}>
        <SimpleGrid cols={2}>
         <DaktiloCard title={'deneme'} />
         <DaktiloCard title={'deneme'} />
         <DaktiloCard title={'deneme'} />
         <DaktiloCard title={'deneme'} />
        </SimpleGrid>
      </Grid.Col>
      <Grid.Col my={'lg'}>
        <Slider1>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>1</CarouselItem>
        </Slider1>
      </Grid.Col>
      <Grid.Col>
      <SimpleGrid cols={4} breakpoints={[
          {maxWidth: 'md', cols: 4},
          {maxWidth: 'sm', cols: 2},
          {maxWidth: 'xs', cols: 2},
          ]}>
        <DaktiloCard title={'deneme'} />
        <Stack>
        <DaktiloCard title={'deneme'} />
        <DaktiloCard title={'deneme'} />
        </Stack>
        <DaktiloCard title={'deneme'} />
        <Stack>
          <DaktiloCard title={'deneme'} />
        <DaktiloCard title={'deneme'} />
        </Stack>
      </SimpleGrid>
      </Grid.Col>
      <Grid.Col>

      <SimpleGrid cols={3} breakpoints={[
          {maxWidth: 'md', cols: 4},
          {maxWidth: 'sm', cols: 2},
          {maxWidth: 'xs', cols: 2},
          ]}>
            <Stack>

         <DaktiloSliderCard title={'deneme'}/>
         <DaktiloCard title={'denemes'} />
            </Stack>
        <Stack>
        <DaktiloCard title={'deneme'} />
        <DaktiloSliderCard title={'deneme'}/>
        </Stack>
        <Stack>
        <DaktiloSliderCard title={'deneme'}/>
        <DaktiloCard title={'deneme'} />
   
        </Stack>
        <SimpleGrid columns={1}>
        </SimpleGrid>
      </SimpleGrid>
      </Grid.Col>

    </Grid>
  </Container>
    </>
    
  )
}

export default GridSkel;
