"use client";
import React from 'react'
import { DaktiloProfileCard } from '@components/DaktiloProfileCard';
import DaktiloList from '@components/DaktiloList';
import { authorsData } from '@utils/mock';
import { Container, Grid } from '@mantine/core';




function Authors() {
    return (
        <>
        <DaktiloList Component={DaktiloProfileCard} data={authorsData} />
     </>
    )
}

export default Authors;
/* 
     <Container>
     <Grid columns={8}>
{authorsData.map((item, index) => (
<Grid.Col key={index} span={2}>
  <DaktiloProfileCard
  avatar={item.avatar}
  name={item.name}
  email={item.email}
  job={item.job}
   />
</Grid.Col>
))
}

</Grid>
</Container>


*/