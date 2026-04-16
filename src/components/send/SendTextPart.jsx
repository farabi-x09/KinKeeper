"use client";
import { SendContext } from '@/context/send.context';
import React, { useContext } from 'react';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

const SendTextPart = ({ friend }) => {

   const { send, setSend } = useContext(SendContext);
  

    const handleSend = () => {
        setSend([...send, { ...friend, type: "text" }])
        toast.success(`${friend.name} is successfully texted`)
    }
    return (
        <div className='px-15 py-5  bg-[#F8FAFC] rounded-2xl border border-gray-400 flex flex-col items-center w-45 h-25 ' onClick={handleSend}>
            <p><BsChatLeftTextFill /></p>
            <p className='text-gray-600 mt-2'>Text</p>
        </div>
    );
};

export default SendTextPart;