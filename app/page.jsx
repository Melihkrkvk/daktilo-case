"use client";
import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Provider from "./provider";


const Home = () => {
    const [colorScheme, setColorScheme] = useState('light');

    const toggleColorScheme = (value) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
    };
    return (
        <Provider toggleColorScheme={toggleColorScheme} colorScheme={colorScheme}>
            <Navbar />
        </Provider>
    )
}

export default Home
