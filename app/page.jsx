"use client";
import DaktiloSlider from '@components/DaktiloSlider';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';


const Home = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slidesToScroll = mobile ? 1 : 2;

    return (
        <>
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        <DaktiloSlider style={{ marginTop: '5px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
        </>
    )
};

export default Home;
