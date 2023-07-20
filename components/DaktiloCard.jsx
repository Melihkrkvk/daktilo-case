import React from 'react'
import { createStyles, Paper, Text, Title, Button, rem } from '@mantine/core';

const cardTypeLookup = (cardType) => {
  const obj = {
    standart: 200,
    default: 400,
  };
  return obj[cardType] || obj['default'];
};

const useStyles = createStyles((theme, {cardType}) => ({
    card: {
      height: `${rem(cardTypeLookup(cardType))}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      //color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[0],
      lineHeight: 1.2,
      fontSize: rem(32),
      marginTop: theme.spacing.xs,
    },
  
    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },

  }));


 

  export default function DaktiloCard({image, title, category, buttonTitle, cardType}) {
    const { classes } = useStyles({ cardType });
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          {buttonTitle}
        </Button>
      </Paper>
    );
}
