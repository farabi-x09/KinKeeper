import React from 'react';
import { FadeLoader } from 'react-spinners';

const loadingPage = () => {
    return (
        <div className='flex items-center justify-center my-20'>
          <FadeLoader />
        </div>
    );
};

export default loadingPage;