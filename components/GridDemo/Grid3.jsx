import React from 'react'
import { Container, Grid, Skeleton, Stack, rem, useMantineTheme, px, SimpleGrid} from '@mantine/core';
import { useMediaQuery} from '@mantine/hooks';
import DaktiloSliderCard from '@components/DaktiloSliderCard';
import DaktiloCard from '@components/DaktiloCard';
import Slider1, { CarouselItem } from '@components/Sliders/Slider1';
import { mansetData } from '@utils/milliGazeteDemo';

const Grid3 = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const responsiveSpan = mobile ? 6 : 3;

  return (
   <div></div>
  );
}

export default Grid3;
