"use client"
import SendProvider from '@/context/send.context';
import React from 'react';

const Providers = ({children}) => {
    return (
        <SendProvider>
            {children}
        </SendProvider>
    );
};

export default Providers;