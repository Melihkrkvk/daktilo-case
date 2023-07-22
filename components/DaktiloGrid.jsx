import React from 'react'
import { createStyles, Paper, Text, Title, Button, rem, SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Grid } from '@mantine/core';
import DaktiloCard from '@components/DaktiloCard';
import { gridData } from '@utils/mock';




const useStyles = createStyles((theme) => ({}));
 

export default function DaktiloGrid() {
  const { classes } = useStyles();  
  const theme = useMantineTheme();
  return (
    <Container my="md" style={{ padding: 0 }} id='con'>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        <DaktiloCard
          title={gridData[0].title}
          image={gridData[0].image}
          imageAlt={gridData[0].imageAlt}
          ads={gridData[0].ads}
          category={gridData[0].category}
          desc={gridData[0].desc}
          showDesc
          imagePosition={'bottom'}
        />
        <Stack>
          <DaktiloCard
            title={gridData[1].title}
            image={gridData[1].image}
            imageAlt={gridData[1].imageAlt}
            ads={gridData[1].ads}
          category={gridData[1].category}
          />
          <DaktiloCard
            title={gridData[2].title}
            image={gridData[2].image}
            imageAlt={gridData[2].imageAlt}
            ads={gridData[2].ads}
            category={gridData[2].category}
          />
        </Stack> 
      </SimpleGrid>
    
    </Container>
  );
}
