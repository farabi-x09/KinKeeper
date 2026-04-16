"use client";
import { SendContext } from '@/context/send.context';
import React, { useContext } from 'react';
import { IoMdVideocam } from 'react-icons/io';
import { toast } from 'react-toastify';

const SendVideoPart = ({friend}) => {
     const { send, setSend } = useContext(SendContext);

     
         const handleSend = () => {
             setSend([...send, { ...friend, type: "video" }])
             toast.success(`${friend.name} is successfully video called`)
         }
      
    return (
          <div className='px-15 py-5  bg-[#F8FAFC] rounded-2xl border border-gray-400 flex flex-col items-center w-45 h-25' onClick={handleSend}>
                                <p><IoMdVideocam /></p>
                                <p className='text-gray-600 mt-2'>Video</p>
                            </div>
    );
};

export default SendVideoPart;