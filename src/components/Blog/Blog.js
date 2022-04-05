import React from 'react';

const Blog = ({ blog }) => {
    const { author, question, answer } = blog;
    return (
        <div className='border-0 border-r-2 shadow-lg mb-20 mt-4 mx-20 p-16'>
            <h2 className='text-3xl font-semibold'>{question}</h2>
            <p><small>{author}</small></p>
            <p className='text-md'>{answer}</p>
        </div>
    );
};

export default Blog;