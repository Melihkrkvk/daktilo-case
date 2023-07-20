"use client";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

const Provider = ({ children, colorScheme, toggleColorScheme }) => {
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default Provider;