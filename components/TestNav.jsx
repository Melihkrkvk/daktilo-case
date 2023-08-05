'use client';
import { useState } from 'react';
import {
  createStyles,
  Container,
  Group,
  Text,
  Tabs,
  Burger,
  rem,
  Switch,
  useMantineColorScheme,
  Transition,
  Paper
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconSun, 
  IconMoonStars 
} from '@tabler/icons-react';
import Link from 'next/link';
import DaktiloSearch from './DaktiloSearch';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
  },
  inner_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    textDecoration: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
  dropdown: {
    zIndex: 9,
    position: 'relative',
}
}));



export function HeaderTabs({ user, tabs }) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();


  const items = tabs.map((tab, index) => (
      
        <Link key={index} className={classes.link} href={tab.link}>
      <Tabs.Tab value={tab.label} key={index}>
        {tab.label}
        </Tabs.Tab>
        </Link>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'blue', flex: 3,}}>

        <div style={{backgroundColor: 'red', flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center',}}>
        <DaktiloSearch />
        </div>
        <div style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', display: 'flex', alignItems: 'center', }}>
        <Text>Logo</Text>
        </div>
        <div style={{flex: 1, justifyContent: 'flex-end', display: 'flex', alignItems: 'center'}}>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
        </div>
      </Container>
      <Container>
        <Tabs
          defaultValue={tabs[0].label}
          variant="outline"
          style={{display: 'flex', justifyContent: 'center'}}
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      
      </Container>
    </div>
  );
}