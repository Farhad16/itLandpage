import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">
                    Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">
                            Get in Touch</div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                        <div className="icons">
                            <div className="contact-row">
                                <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt}></FontAwesomeIcon>
                                <div className="info">
                                    <div className="head">
                                        Phone</div>
                                    <div className="sub-title">
                                        +01758416616</div>
                                </div>
                            </div>
                            <div className="contact-row">
                                <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt}></FontAwesomeIcon>
                                <div className="info">
                                    <div className="head">
                                        Address</div>
                                    <div className="sub-title">
                                        Shukrabad, Dhanmondi, Dhaka</div>
                                </div>
                            </div>
                            <div className="contact-row">
                                <FontAwesomeIcon className="contact-icon" icon={faEnvelope}></FontAwesomeIcon>
                                <div className="info">
                                    <div className="head">
                                        Email</div>
                                    <div className="sub-title">
                                        farhadswe35@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">
                            Write Message</div>
                        <form action="#">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." required ></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default Contact;