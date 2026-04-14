// 'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/img/logo.png';
import MyNavLink from './MyNavLink';

const Navber = () => {

    return (
      <div className='bg-[#F8FAFC]'>
        <div className='bg-white sticky rounded-xl top-0'>
      <div className="container mx-auto  flex justify-between navbar bg-base-100 ">
  <div className=" navbar-start flex justify-between  mx-auto lg:mx-0 w-full">
         <div>
    <Image src={logo} alt='Logo' className='lg:w-40'></Image>
    </div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow -left-15">
        <MyNavLink></MyNavLink>
      </ul>
    </div>
   
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <MyNavLink></MyNavLink>
    </ul>
  </div>

</div>
</div>
</div>
    );
};

export default Navber;