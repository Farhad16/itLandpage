import React from 'react';
import './Home.css';
import Typed from 'react-typed';

const Home = () => {
    return (
        <div className="bg" id="home">
            <section className="headerMain">
                <div className="max-width">
                    <div className="header-content">
                        <div className="text-1">Let's Grow</div>
                        <div className="text-2">Your Brand</div>
                        <div className="text-3">
                            <span>
                                <Typed
                                    strings={[
                                        'To the next level',
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={60}
                                    loop >
                                </Typed>
                            </span>
                        </div>
                        <a href="#contact">Order Now</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;