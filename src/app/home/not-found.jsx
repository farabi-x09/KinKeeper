
"use client"
import React from 'react';
import Link from 'next/link';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';

const FriendNotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FAFC] px-4">
            <div className="max-w-md w-full text-center">
                {/* Visual Element */}
                <div className="relative mb-8 flex justify-center">
                    <div className="absolute inset-0 bg-green-100 blur-3xl rounded-full opacity-50 scale-150"></div>
                    <div className="relative bg-white p-6 rounded-[32] shadow-sm border border-gray-100">
                        <HiOutlineUserGroup className="text-6xl text-[#244D3F] opacity-20" />
                        <div className="absolute -bottom-2 -right-2 bg-red-100 p-2 rounded-full border-4 border-[#F8FAFC]">
                            <span className="text-2xl">🔍</span>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl font-bold text-[#244D3F] mb-3">Friend Not Found</h1>
                <p className="text-gray-500 mb-10 leading-relaxed">
                    We could not find the person you are looking for. They might have been removed from your shelf, or the link is incorrect.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                    <Link 
                        href="/" 
                        className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white border-none rounded-2xl h-14 normal-case text-lg shadow-lg shadow-green-900/10"
                    >
                        <BiArrowBack className="text-xl" />
                        Back to My Shelf
                    </Link>
                    
                    <Link 
                        href="/timeline" 
                        className="btn btn-ghost text-gray-500 hover:bg-gray-100 rounded-2xl h-14 normal-case"
                    >
                        View Recent Activity
                    </Link>
                </div>

                {/* Branding Subtle Note */}
                <p className="mt-12 text-sm text-gray-400 font-medium tracking-widest uppercase">
                    KeenKeeper
                </p>
            </div>
        </div>
    );
};

export default FriendNotFound;