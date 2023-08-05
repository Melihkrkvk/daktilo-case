import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, } from '@mantine/core';
import Slider1, { CarouselItem } from '@components/Sliders/Slider1';
import DaktiloCard from '@components/DaktiloCard';
import DaktiloList from '@components/DaktiloList';
import { DaktiloProfileCard } from '@components/DaktiloProfileCard';
import { authorsData } from '@utils/mock';
import DaktiloSliderCard from '@components/DaktiloSliderCard';

const PRIMARY_COL_HEIGHT = rem(540);

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <>
    <Container my='md'>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1,}]}>
      <DaktiloSliderCard height={PRIMARY_COL_HEIGHT} title={'Deneme'} category={'deneme'} image={'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'} />
        <Grid gutter="md">
          <Grid.Col span={6}>
          <DaktiloProfileCard name={'deneme'} />
          </Grid.Col>
          <Grid.Col span={6}>
          <DaktiloProfileCard name={'deneme'} />
          </Grid.Col>
          <Grid.Col span={6}>
          <DaktiloProfileCard name={'deneme'} />
          </Grid.Col>
          <Grid.Col span={6}>
          <DaktiloProfileCard name={'deneme'} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
    </>
  );
}