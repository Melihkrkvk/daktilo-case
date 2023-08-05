'use client';
import { CacheProvider } from '@emotion/react';
import {
	useEmotionCache,
	MantineProvider,
	ColorSchemeProvider,
	useMantineTheme
} from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export default function RootStyleRegistry({ children }) {
	const [colorScheme, setColorScheme] = useState('light');
	const theme = useMantineTheme();

	const toggleColorScheme = (value) => {
		const nextColorScheme =
			value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(nextColorScheme);
	};
	const cache = useEmotionCache();
	cache.compat = true;

	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' '),
			}}
		/>
	));

	return (
		<CacheProvider value={cache}>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{
						colorScheme,
						//primaryColor: 'grape',
					}}
					withGlobalStyles
					withNormalizeCSS
				>
					<body style={{backgroundColor: colorScheme === 'dark' ? theme.colors.dark[7]: theme.white}}>

					{children}
					</body>
				</MantineProvider>
			</ColorSchemeProvider>
		</CacheProvider>
	);
}
