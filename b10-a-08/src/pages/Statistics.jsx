// Statistics.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';
import styles from './Statistics.module.css';

const data = [
  { name: 'Product A', price: 590, rating: 4.5, amt: 1400 },
  { name: 'Product B', price: 868, rating: 4.7, amt: 1506 },
  { name: 'Product C', price: 1397, rating: 4.2, amt: 989 },
  { name: 'Product D', price: 1480, rating: 4.8, amt: 1228 },
  { name: 'Product E', price: 1520, rating: 4.1, amt: 1100 },
  { name: 'Product F', price: 1400, rating: 4.6, amt: 1700 },
];

const Statistics = () => {
  return (
    <div className={styles.statisticsPage}>
      <Helmet>
        <title>Product Statistics</title>
      </Helmet>
      <div className={styles.container}>
        <h2 className={styles.title}>Product Insights and Trends</h2>
        <p className={styles.description}>Dive into comprehensive data analysis of product prices, sales, and customer ratings. Understand how trends align with product performance.</p>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" label={{ value: 'Products', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" name="Sales Volume" />
              <Bar dataKey="price" barSize={20} fill="#413ea0" name="Price ($)" />
              <Line type="monotone" dataKey="price" stroke="#ff7300" name="Price Trend" />
              <Scatter dataKey="rating" fill="red" name="Customer Rating" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p className={styles.note}>Note: Scatter points highlight average customer ratings for each product. Analyze the data to make informed decisions.</p>
      </div>
    </div>
  );
};

export default Statistics;
