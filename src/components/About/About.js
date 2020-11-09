import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import profile from '../images/picture.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">What is CompanyName</h2>
                <div className="about-content">
                    <div className="column left" data-aos="fade-right" data-aos-duration="1000">
                        <img src={profile} alt="" />
                    </div>
                    <div className="column right" data-aos="fade-left">
                        <div className="intro">What is <span>Company Name?</span></div>
                        <p className="short-details">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium quos nobis corrupti, animi porro, tempora commodi
                            vero perspiciatis ad sint reprehenderit magni! Commodi, soluta
                            aliquam. Distinctio blanditiis reprehenderit mollitia dolore
                            minima aliquid, iure non facilis, iusto explicabo tempora!
                            Atque optio eveniet molestiae vero? Quia ullam expedita rem
                            voluptatem? Aspernatur, alias aliquid. Culpa similique optio
                            dolorem corrupti deserunt iste minus illum quibusdam sunt nulla
                            ipsum sit qui, molestias, quis autem sapiente ullam! Quam nesciunt
                            dolorem exercitationem perspiciatis quae? Eligendi eius delectus sunt
                            laudantium facere beatae temporibus ut porro dignissimos itaque at unde
                            consequatur fugiat praesentium, dolorem, harum doloremque maxime officiis.
                        </p>
                        <a href="#blogs" >Our Expertise</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;