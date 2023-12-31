"use client";
import React, { useEffect, useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, useMantineColorScheme, Switch, useMantineTheme, Transition, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconSun, IconMoonStars } from '@tabler/icons-react';
import { links } from '@utils/mock';
import Link from 'next/link';
import DaktiloSearch from '@components/DaktiloSearch';

const useStyles = createStyles((theme) => ({
    header: {
        zIndex: 2,
        position: 'fixed',
        top: 0,
    },
  
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: rem(56),

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    links: {
        width: rem(260),

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    social: {
        width: rem(260),

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },
    search: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },
    searchButton: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },

    dropdown: {
        zIndex: 9,
        position: 'relative',
    }
}));


export default function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    const items = links.map((link) => (
        <Link key={link.label}
        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={() => {
            setActive(link.link);
        }}
        >
            {link.label}
        </Link>
    ));
    return (
        <Header height={56} className={classes.header}>
            <Container className={classes.inner}>
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>

                Logo

                <Group spacing={5} className={classes.social} position="right" noWrap>
                <div className={classes.search}>
                <DaktiloSearch/>    
                </div>
               {/* <div className={classes.searchButton}>
                <DaktiloSearch isButton/>
                </div>*/}
                     <ActionIcon size="lg">
                        <IconBrandTwitter size="1.1rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.1rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon sx={{marginRight: 10}} size="lg">
                        <IconBrandInstagram size="1.1rem" stroke={1.5} />
                    </ActionIcon>
                    <Switch
                        checked={colorScheme === 'dark'}
                        onChange={() => toggleColorScheme()}
                        size="lg"
                        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
                        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
                    />
                </Group>
            </Container>
            <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        </Header>
    )
}
