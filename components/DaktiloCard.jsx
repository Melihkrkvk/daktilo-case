'use client';
import React from 'react'
import Link from 'next/link';
import { Card, Image, Text, Badge, createStyles, AspectRatio} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  topicBadge: {
    bottom: 10,
    left: 10,
  },
  adsBadge: {
    top: 10,
    right: 10,
  },
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
  title: {
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.primaryColor : theme.defaultGradient
    }
  },
}));


function DaktiloCard({title, desc, image, imageAlt, showDesc = false, ads, category, style, imagePosition, badgeColor, isBig = false, height}) {
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
       <Card.Section style={{position: 'relative' }}>

      <Text weight={500} size="lg">
        {title}
      </Text>
      {showDesc && (
        <Text mt="xs" color="dimmed" size="sm">
          {desc}
        </Text>
      )}
    
        {(ads || category) &&
          <Badge pos='absolute' display='flex' variant='filled' className={ads ? classes.adsBadge : classes.topicBadge}>{ads ? ads : category}</Badge>
        }
        <Image
          src={image}
          height={160}
          alt={imageAlt}
        />
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
        style={{style}}
        className={classes.card}
        id='card'
      >
        <Card.Section pos={'relative'}>
          <Image
            src={image}
            height={(isBig ? 320 : 160) || (height) }
            alt={imageAlt}
          />
          {(ads || category) &&
            <Badge color={badgeColor} pos='absolute' display='flex' variant='filled' className={ads ? classes.adsBadge : classes.topicBadge}>{ads ? ads : category}</Badge>
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