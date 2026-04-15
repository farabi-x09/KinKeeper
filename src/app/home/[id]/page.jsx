import SendPart from '@/components/send/SendPart';
import Image from 'next/image';
import React from 'react';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { IoMdVideocam } from 'react-icons/io';
import { LuArchive } from 'react-icons/lu';
import { MdNotificationsPaused } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';

const friendsPromise = async function () {
    const res = await fetch("https://kinkeeper-theta.vercel.app/friends.json")
    const data = await res.json();
    return data
}

const FriendDetailsPage = async ({ params }) => {
    const friends = await friendsPromise()
    const { id } = await params;
    const friend = friends.find(friend => friend.id == id);
    // console.log(friend, 'friend');

    return (
        <div className='bg-[#F8FAFC] py-20'>
            <div className='container mx-auto flex flex-wrap space-y-2 justify-center gap-10'>
                <div className=''>
                    {/* card img part */}
                    <div className='bg-white p-10 text-center flex flex-col  items-center gap-2 rounded-2xl shadow-xl'>
                        <figure>
                            <Image width={200} height={200} src={friend.picture} alt={friend.name} className="w-20" />
                        </figure>
                        <h1 className='font-bold text-xl'>{friend.name}</h1>

                        <p
                            className={`${friend.status === "overdue"
                                ? "bg-red-700"
                                : friend.status === "almost due"
                                    ? "bg-yellow-700"
                                    : "bg-green-800"} w-30 capitalize text-white rounded-2xl`
                            }
                        >
                            {friend.status}
                        </p>
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
                        <p className='text-gray-400'>
                            {`"${friend.bio}"`}
                        </p>
                        <p className='text-gray-400'>
                            Preferred: {friend.email}
                        </p>

                    </div>
                    <p className='bg-white p-3 font-semibold rounded-xl mt-5 flex gap-2 items-center justify-center shadow-xl'><MdNotificationsPaused /> Snooze 2 weeks</p>
                    <p className='bg-white p-3 font-semibold rounded-xl mt-5 flex gap-2 items-center justify-center shadow-xl'><LuArchive /> Archive</p>
                    <p className='bg-white p-3 font-semibold rounded-xl mt-5 flex gap-2 items-center justify-center text-red-500 shadow-xl'><RiDeleteBin5Line />
                        Delete</p>

                </div>
                <div className=' flex flex-col justify-between p-5 space-y-6 '>
                    {/* card details */}
                    <div className='flex xl:justify-between gap-5 flex-wrap justify-center'>
                        <div className='p-8 bg-white text-center rounded-xl border border-gray-300 '>
                            <p className='text-[#244D3F] text-2xl font-semibold'>{friend.days_since_contact}</p>
                            <p className='text-gray-500 mt-1'>Days Since Contact</p>
                        </div>
                        <div className='p-8 bg-white text-center rounded-xl border border-gray-300'>
                            <p className='text-[#244D3F] text-2xl font-semibold'>{friend.goal}</p>
                            <p className='text-gray-500 mt-1'>Goal (Days)</p>
                        </div>
                        <div className='p-8 bg-white text-center rounded-xl border border-gray-300 '>
                            <p className="text-[#244D3F] text-2xl font-semibold">
                                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </p>
                            <p className='text-gray-500 mt-1'>Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white flex flex-wrap justify-between p-8 rounded-xl border border-gray-300 space-y-5'>
                        <div>
                            <h4 className='text-[#244D3F] font-semibold mb-2 text-xl'>Relationship Goal</h4>
                            <p>
                                <span className='text-gray-500 mr-2'>
                                    Connect every 
                                </span> 
                                <span className='font-semibold text-lg'>
                                      {friend.goal} days
                                </span> 
                            </p>
                        </div>
                        <button className='btn '>Edit</button>
                    </div>
                    <div className='bg-white p-8 rounded-xl border border-gray-300'>
                         <h4 className='text-[#244D3F] font-semibold mb-3 text-xl'>Quick Check-In</h4>
                         <div className='flex md:justify-between flex-wrap space-y-8 justify-center space-x-5'>
                            <SendPart friend={friend}></SendPart>
                            <div className='px-15 py-5  bg-[#F8FAFC] rounded-2xl border border-gray-400 flex flex-col items-center w-45 h-25'>
                                <p><BsChatLeftTextFill /></p>
                                <p className='text-gray-600 mt-2'>Text</p>
                            </div>
                            <div className='px-15 py-5  bg-[#F8FAFC] rounded-2xl border border-gray-400 flex flex-col items-center w-45 h-25'>
                                <p><IoMdVideocam /></p>
                                <p className='text-gray-600 mt-2'>Video</p>
                            </div>
                         
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;