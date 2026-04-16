



"use client"
import { SendContext } from '@/context/send.context';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import callImg from '@/assets/img/call.png'
import textImg from '@/assets/img/text.png'
import videoImg from '@/assets/img/video.png'
import { IoFilter } from 'react-icons/io5'; 

const TimeLinePage = () => {
    const { send } = useContext(SendContext);
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredTimeline = send.filter(item => {
        if (activeFilter === "All") return true;
        return item.type.toLowerCase() === activeFilter.toLowerCase();
    });

    const filterOptions = ["All", "Call", "Text", "Video"];

    return (
        <div className='bg-[#F8FAFC] py-10 min-h-screen'>
            <div className='container mx-auto px-4'>
                <div className=' space-y-8  mb-8 gap-5'>
                    <h1 className='text-3xl font-bold text-[#244D3F]'>Timeline</h1>

                    {/* --- Dropdown Filter Bar --- */}
                    <div className="dropdown dropdown-end">
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="btn bg-white border-gray-300 hover:border-[#244D3F] px-8 rounded-xl flex items-center gap-2"
                        >
                            <IoFilter className="text-[#244D3F]" />
                            <span>Filter: <span className="font-bold">{activeFilter}</span></span>
                        </div>
                        <ul 
                            tabIndex={0} 
                            className="dropdown-content z-[1] menu p-2 shadow-xl bg-white rounded-box w-52 mt-2 border border-gray-100"
                        >
                            {filterOptions.map((option) => (
                                <li key={option}>
                                    <button 
                                        className={`${activeFilter === option ? "bg-green-50 text-[#244D3F] font-bold" : ""}`}
                                        onClick={() => {
                                            setActiveFilter(option);
                                            // Close dropdown by blurring active element
                                            document.activeElement.blur();
                                        }}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* ------------------------- */}
                </div>

                {/* Conditional Rendering for Empty States */}
                {send.length === 0 ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 font-bold text-2xl text-center py-20 rounded-2xl shadow-sm">
                        No Contact History Available
                    </div>
                ) : filteredTimeline.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <p className="text-xl text-gray-400">No {activeFilter} history found.</p>
                    </div>
                ) : (
                    <div className="max-w-full ">
                        {filteredTimeline.map((friend, index) => (
                            <div key={index} className='flex gap-5 items-center bg-white p-5 border border-gray-200 rounded-2xl mb-5 hover:shadow-md transition-shadow'>
                                <div className="shrink-0">
                                    <Image
                                        src={
                                            friend.type === "call" ? callImg :
                                            friend.type === "text" ? textImg :
                                            videoImg
                                        }
                                        width={40}
                                        height={40}
                                        alt={friend.type}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg">
                                        <span className="font-bold text-[#244D3F] capitalize">
                                            {friend.type}
                                        </span>
                                        <span className="text-gray-500"> with </span>
                                        <span className="font-semibold text-gray-800">{friend.name}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {new Date().toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;