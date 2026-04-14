'use client'
import { ChartLine, Clock3, House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLink = () => {
    const pathname = usePathname();

    const getClass = (path) => {
        return (
            pathname === path ? "text-white font-semibold bg-green-900" : "")
    }
// console.log('parthname',pathname);
    return (
        <div className='lg:flex'>
            <li><Link href={'/'} className={`text-gray-400 ${getClass('/')}`}>   <House /> Home</Link></li>

            <li><Link href={'/timeline'} className={`text-gray-400 ${getClass('/timeline')}`}>  <Clock3 /> TimeLine</Link></li>

            <li><Link href={'/stats'} className={`text-gray-400 ${getClass('/stats')}`}>   <ChartLine /> Stats</Link></li>
           
        </div>
    );
};

export default MyNavLink; 