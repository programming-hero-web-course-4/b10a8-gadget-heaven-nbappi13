import React from 'react';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Statistics Page</h2>
                <p>Here you will find all the important statistics and data.</p>
            </div>
        </div>
    );
};

export default Statistics;
