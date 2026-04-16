// 'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <Link href={`/home/${friend.id}`} className='card bg-white p-10 text-center flex  items-center space-y-1 max-w-[350] rounded-2xl border border-gray-300'>
            <figure>
                <Image width={200} height={200} src={friend.picture} alt={friend.name} className="w-20" />
            </figure>
            <h1 className='font-bold text-xl'>{friend.name}</h1>
            <p className='text-gray-400'>{friend.days_since_contact}d ago</p>
            <p className=" p-2 rounded uppercase">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-200 px-2 py-1 mr-2 rounded-2xl text-sm "
                    >
                        {tag}
                    </span>
                ))}
            </p>
            <p
                className={`${
                    friend.status === "overdue"
                        ? "bg-red-700"
                        : friend.status === "almost due"
                            ? "bg-yellow-700"
                            : "bg-green-800"} w-30 capitalize text-white rounded-2xl`
                }
            >
                {friend.status}
            </p>



        </Link>
    );
};

export default FriendCard;