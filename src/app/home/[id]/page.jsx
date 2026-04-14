import React from 'react';

const FriendDetailsPage = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <h1>Friend details page</h1>
        </div>
    );
};

export default FriendDetailsPage;