"use client";
import { SendContext } from '@/context/send.context';
import React, { useContext } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { toast } from 'react-toastify';

const SendPart = ({ friend }) => {

    const {send, setSend } = useContext(SendContext);
    console.log(send,"somthing");

    const handleSend = () =>{
        setSend([...send,{ ...friend, type: "call" }])
        toast.success(`${friend.name} is successfully called`)
    }
    return (
        <div className='px-15 py-5  bg-[#F8FAFC] rounded-2xl border border-gray-400 flex flex-col items-center w-45 h-25' onClick={handleSend}>
            <p><BiSolidPhoneCall /></p>
            <p className='text-gray-600 mt-2'>Call</p>
        </div>
    );
};

export default SendPart;