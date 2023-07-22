"use client";
import DaktiloSlider from '@components/DaktiloSlider';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, Grid, Container } from '@mantine/core';
import DaktiloCard from '@components/DaktiloCard';
import DaktiloGrid from '@components/DaktiloGrid';
import { cardData } from '@utils/mock';


const Home = () => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slidesToScroll = mobile ? 1 : 2;
    const responsiveSpan = mobile ? 6 : 3;

    return (
        
        <Container>
            <Grid mt={10}>
                {cardData.map((card, index) => (
                    <Grid.Col span={responsiveSpan} key={index}>
                        <DaktiloCard
                            title={card.title}
                            image={card.image}
                            imageAlt={card.imageAlt}
                            ads={card.ads}
                            category={card.category}
                        />
                    </Grid.Col>
                ))}
            </Grid>
            <DaktiloSlider style={{ marginTop: '15px' }} slidesToScroll={slidesToScroll} slideGap={10}  />
            <DaktiloGrid />
        </Container> 
    );
};

export default Home;