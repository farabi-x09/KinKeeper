import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const FooterPage = () => {
    return (
        <div className='bg-[#244D3F] py-20'>
            <div className='container mx-auto text-center space-y-5 pb-10 border-b border-gray-500'>
                <h1 className='font-bold text-3xl md:text-5xl xl:text-7xl text-white'>KeenKeeper</h1>
                <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white text-xl'>Social Links</p>
                <div className='flex gap-5  justify-center'>
                    <p className='bg-white text-black p-3 rounded-full '><FaInstagram /></p>
                    <p className='bg-white text-black p-3 rounded-full '><FaSquareFacebook /></p>
                    <p className='bg-white text-black p-3 rounded-full '><FaXTwitter /></p>
                </div>
            </div>
            <div className='container mx-auto flex flex-wrap gap-5 md:justify-between mt-10 text-gray-300 justify-center px-5 text-center'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-10 flex-wrap  justify-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>

            </div>
        </div>
    );
};

export default FooterPage;