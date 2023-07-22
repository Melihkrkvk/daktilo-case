"use client";
import Navbar from "@components/Navbar";
import BackToTop from "@components/BackToTop";
import { useState } from "react";
import { Footer } from "@components/Footer";
import { useMantineTheme } from '@mantine/core';
import Provider from "./provider";

export default function RootLayout({ children }) {
  const [colorScheme, setColorScheme] = useState('light');
  const theme = useMantineTheme();

  const toggleColorScheme = (value) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };
 
  return (
    <html lang="en">
      <body>
        <Provider toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}>
          <>
          <Navbar />
          <div id="wrapper" style={{ backgroundColor: colorScheme === 'dark' ? theme.colors.dark[7] : theme.white, margin: '60px 0 310px', boxShadow: theme.shadows.md, paddingBottom: '100px', paddingTop: '15px' }}>
            {children}
          </div>
          <Footer />
          <BackToTop />
          </>
        </Provider>
      </body>
    </html>
  );
}
