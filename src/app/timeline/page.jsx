"use client"
import { SendContext } from '@/context/send.context';
import Image from 'next/image';
import React, { useContext } from 'react';

const TimeLinePage = () => {
     const {send, setSend} = useContext(SendContext);
     console.log(send,'something');
    return (
        <div>
          {
            send.length === 0 ?(
                <h2 className="font-bold text-4xl text-center my-25 bg-red-400 container mx-auto py-10 rounded-2xl">No Contact Avaliable</h2>
            ):( send.map((friend, index) =>{
                return (
                    <div key={index}>
                        <div>
                            <Image src={friend.picture} width={120} height={120} alt='ff'></Image>
                        </div>
                    </div>
                )
            })
                
            )
          }
        </div>
    );
};

export default TimeLinePage;