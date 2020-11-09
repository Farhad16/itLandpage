import { faChartLine, faCode, faCube, faCubes, faFileCode, faPaintBrush, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';


const Services = () => {


    return (
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">
                    Our services</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faCode} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                Web Design</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faChartLine} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                Advertising</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faPaintBrush} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                App Design</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faFileCode} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                Web development</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faCubes} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                Mobile App</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <FontAwesomeIcon icon={faTasks} className="icon"></FontAwesomeIcon>
                            <div class="text">
                                Management</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;