'use client';
import React from 'react';
import { Grid, Container, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function DaktiloList({data, Component}) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
   <Container>
    <Grid columns={8}>
        {data.map((item, index) => (
        <Grid.Col key={index} lg={2} md={2} sm={4} xs={4}>
          <Component {...item} />
        </Grid.Col>
        ))
        }
        
    </Grid>
   </Container>
  )
};
