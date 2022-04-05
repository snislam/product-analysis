import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-10'>Read Our Blogs</h2>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id} />)
            }
        </div>
    );
};

export default Blogs;