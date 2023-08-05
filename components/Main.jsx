'use client';
import React from 'react';
import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

export default function Main({ children }) {
	const theme = useMantineTheme();
	return (
		<div
			id="wrapper"
			style={{
				backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
				margin: '100px 0 310px',
				boxShadow: theme.shadows.md,
				paddingBottom: '100px',
			}}
		>
			{children}
		</div>
	);
}
