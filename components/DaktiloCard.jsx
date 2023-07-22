import React from 'react'
import Link from 'next/link';
import { Card, Image, Text, Badge, createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  topicBadge: {
    bottom: 10,
    left: 10,
  },
  adsBadge: {
    top: 10,
    right: 10,
  },
}));


function DaktiloCard({title, desc, image, imageAlt, showDesc = false, ads, category, style, imagePosition}) {
  const {classes} = useStyles();

  if (imagePosition === 'bottom') {
    return (
      <Card
      shadow="sm"
      padding="xl"
      component={Link}
      href="#"
      style={style}
      className={classes.card}
      id='card'
    >
     

      <Text weight={500} size="lg" mt="md">
        {title}
      </Text>
      {showDesc && (
        <Text mt="xs" color="dimmed" size="sm">
          {desc}
        </Text>
      )}

<Card.Section style={{position: 'relative' }}>
        <Image
          src={image}
          height={160}
          alt={imageAlt}
        />
        {(ads || category) &&
          <Badge pos='absolute' display='flex' variant='filled' className={ads ? classes.adsBadge : classes.topicBadge}>{ads ? ads : category}</Badge>
          }
      </Card.Section>
    </Card>
    );
  }
  return (
    <Card
        shadow="sm"
        padding="xl"
        component={Link}
        href="#"
        style={style}
        className={classes.card}
        id='card'
      >
        <Card.Section style={{position: 'relative' }}>
          <Image
            src={image}
            height={160}
            alt={imageAlt}
          />
          {(ads || category) &&
            <Badge pos='absolute' display='flex' variant='filled' className={ads ? classes.adsBadge : classes.topicBadge}>{ads ? ads : category}</Badge>
            }
        </Card.Section>
  
        <Text weight={500} size="lg" mt="md">
          {title}
        </Text>
        {showDesc && (
          <Text mt="xs" color="dimmed" size="sm">
            {desc}
          </Text>
        )}
      </Card>
    
  );
 
};
export default DaktiloCard;