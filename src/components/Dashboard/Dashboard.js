import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartdata.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='mx-20 my-10 w-75 flex justify-between items-center'>
            <div>
                <h3 className='my-5 text-2xl font-semibold'>Sell per Month</h3>
                <LineChart width={500} height={250} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h3 className='my-5 text-2xl font-semibold'>Investment vs Revenue per month</h3>
                <BarChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
        </div >
    );
};

export default Dashboard;