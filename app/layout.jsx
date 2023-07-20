"use client";
import Navbar from "@components/Navbar";
import BackToTop from "@components/BackToTop";
import { useState } from "react";
import Provider from "./provider";

export default function RootLayout({ children }) {
  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = (value) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };
  return (
    <html lang="en">
      <body>
        <Provider toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}>
          <Navbar />
          {children}
          <BackToTop />
        </Provider>
      </body>
    </html>
  )
}
