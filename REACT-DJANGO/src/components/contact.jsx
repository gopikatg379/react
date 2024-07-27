import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions, please feel free to contact us.</p>
                    <p><strong>Email:</strong> bookstore@gmail.com</p>
                    <p><strong>Phone:</strong> +91 85820 33220</p>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-control" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31468.12563060906!2d76.26730405604186!3d9.931231799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5a2db8c7e5%3A0xd69d5bdfd2d74104!2sKochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1596127766988!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;