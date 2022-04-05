import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center w-50 h-screen'>
            <h1 className='text-6xl font-bold'>404 - Not found</h1>
            <h3 className='text-md font-medium'>Opps! The url you enter is not correct. Please enter correct url or click on navbar.</h3>
        </div>
    );
};

export default NotFound;