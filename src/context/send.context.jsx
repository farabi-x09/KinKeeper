"use client"
import React, { createContext, useState } from 'react';

export const SendContext = createContext();

const SendProvider = ({children}) => {
    const [send, setSend] = useState([]);

    const data = {
        send, setSend
    };
    return (
        <SendContext.Provider value ={data} >
            {children}
        </SendContext.Provider>
    );
};

export default SendProvider;