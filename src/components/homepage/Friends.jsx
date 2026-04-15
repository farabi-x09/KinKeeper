
import React from 'react';
import FriendCard from '../ui/FriendCard';






const friendsPromise = async function () {
    const res = await fetch("https://kinkeeper-theta.vercel.app/friends.json")
    const data = await res.json();
    return data
}


const FriendsPage = async () => {
    const friends = await friendsPromise()

    // const overdueCount = friends.filter(f => f.status === "overdue").length;
    // const almostDueCount = friends.filter(f => f.status === "almost due").length;
    // const onTrackCount = friends.filter(f => f.status === "on-track").length;

    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto py-10'>
                <h1 className='font-bold text-3xl mb-10 text-center md:text-left'>Your Friends</h1>
                <div>

                    {
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  justify-center '>
                            {friends.map((friend, index) => {
                                return <FriendCard friend={friend} key={index}></FriendCard>
                            })
                            }

                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default FriendsPage;