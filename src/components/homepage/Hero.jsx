import { Plus } from 'lucide-react';
import React from 'react';

const HeroPage = () => {
    return (
    <div className='bg-[#F8FAFC] pb-10 pt-20'>
        <div className=' w-11/12 mx-auto border-b border-gray-400'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-3xl lg:text-4xl'>Friends to keep close in your life</h1>
                <p className='max-w-150 mx-auto text-gray-500'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className='btn bg-green-900 text-white my-5'><Plus /> Add a Friend</button>
            </div>

            <div className='justify-center  flex gap-5 mx-auto flex-wrap my-10 '>

                <div className=' p-10 text-center rounded-xl bg-white shadow w-[320]'>
                    <p className='font-bold text-2xl mb-2'>12</p>
                    <p className='text-gray-400'>Total Friends</p>
                </div>
                <div className=' p-10 text-center rounded-xl bg-white shadow w-[320]'>
                    <p className='font-bold text-2xl mb-2'>4</p>
                    <p className='text-gray-400'>On Track</p>
                </div>
                <div className=' p-10 text-center rounded-xl bg-white shadow w-[320]'>
                    <p className='font-bold text-2xl mb-2'>6</p>
                    <p className='text-gray-400'>Need Attention</p>
                </div>
                <div className=' p-10 text-center rounded-xl bg-white shadow w-[320]'>
                    <p className='font-bold text-2xl mb-2'>12</p>
                    <p className='text-gray-400'>Interactions This Month</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HeroPage;