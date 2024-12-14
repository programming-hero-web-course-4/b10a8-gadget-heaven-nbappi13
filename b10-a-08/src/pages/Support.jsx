import React, { useState } from 'react';
import './Support.css'; 

const Support = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = { name, email, message };
        localStorage.setItem('supportFormData', JSON.stringify(formData));

        console.log("Form submitted", formData);
        alert('Thank you for reaching out! We will get back to you soon.');

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="support-page container mx-auto p-6">
            <div className="support-header text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 rounded-lg mb-8">
                <h2 className="text-4xl font-bold mb-4">Welcome to Our Support Center!</h2>
                <p className="text-lg">How can we assist you today? We're here to make your experience smooth and enjoyable.</p>
            </div>

            <section className="faq-section mb-12">
                <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQs)</h3>
                <div className="space-y-6">
                    <div className="faq-item bg-gray-100 p-4 rounded shadow-md">
                        <p className="text-lg font-semibold">How do I track my order?</p>
                        <p className="text-sm">Simply go to your order history in the dashboard, click on the order number, and you’ll see the tracking details.</p>
                    </div>
                    <div className="faq-item bg-gray-100 p-4 rounded shadow-md">
                        <p className="text-lg font-semibold">Can I return or exchange a product?</p>
                        <p className="text-sm">Yes, we offer a 30-day return and exchange policy. Visit our returns page for more details.</p>
                    </div>
                    <div className="faq-item bg-gray-100 p-4 rounded shadow-md">
                        <p className="text-lg font-semibold">How do I contact customer support?</p>
                        <p className="text-sm">You can reach us through the contact form below, or call us at our customer support hotline.</p>
                    </div>
                </div>
            </section>

            <section className="contact-form-section mb-12">
                <h3 className="text-3xl font-bold mb-6">Need More Help?</h3>
                <p className="text-lg mb-4">Fill out the contact form below, and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message here"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
                    >
                        Submit
                    </button>
                </form>
            </section>

            <section className="useful-links-section">
                <h3 className="text-3xl font-bold mb-6">Useful Links</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><a href="#" className="text-blue-500 hover:underline">Order Tracking</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Return Policy</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Shipping Information</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Support;
