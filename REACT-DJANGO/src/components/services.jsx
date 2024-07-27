

import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                <div className="service-card">
                    <h2>Book Sales</h2>
                    <p>We offer a wide range of books for sale, including fiction, non-fiction, academic texts, and more. Our collection is regularly updated to include the latest releases and bestsellers.</p>
                </div>
                <div className="service-card">
                    <h2>Book Rentals</h2>
                    <p>Not ready to commit to a purchase? No problem! Our book rental service allows you to borrow books for a specified period. Enjoy your favorite books without the long-term commitment.</p>
                </div>
                <div className="service-card">
                    <h2>Book Recommendations</h2>
                    <p>Our team of literary experts provides personalized book recommendations based on your interests and reading history. Discover your next favorite book with our tailored suggestions.</p>
                </div>
                <div className="service-card">
                    <h2>Author Events</h2>
                    <p>Join us for book signings, readings, and discussions with your favorite authors. Our events provide a great opportunity to meet authors and fellow book lovers.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
