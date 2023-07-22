"use client";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

const Provider = ({ children, colorScheme, toggleColorScheme }) => {
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme,
                defaultGradient: { deg: 70, from: 'orange', to: 'red' },
                // colors: { dark: ['red', 'yellow', 'blue', 'purple']}
                 }}
                 withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default Provider;