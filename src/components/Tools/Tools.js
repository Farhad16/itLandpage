import React from 'react';
import './Tools.css';

import javascript from '../images/blogs/Javascript.png'
import reactjs from '../images/blogs/reactjs.png';
import node from '../images/blogs/node.png';
import express from '../images/blogs/express.jpg';
import angular from '../images/blogs/angular.jpg';
import python from '../images/blogs/python.jpg';
import laravel from '../images/blogs/laravel.png';


const Tools = () => {
    return (
        <section className="tools" id="tools">
            <div className="max-width">
                <h2 className="title">Technology we use</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={javascript} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/react-router-9f9f37093662" target="_blank">
                                    <h5 className="card-title">JavaScript</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={reactjs} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/objects-in-javascript-f58796207377" target="_blank">
                                    <h5 className="card-title">React</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={node} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/react-hooks-266d00f6f11a" target="_blank">
                                    <h5 className="card-title">Node js</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={express} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/html-semantic-elements-facf163c47a1" target="_blank">
                                    <h5 className="card-title">Express Js</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={angular} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/javascript-scope-f6a1c96e2d24" target="_blank">
                                    <h5 className="card-title">Angular Js</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={python} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/javascript-callback-function-f71c2108b7e5" target="_blank">
                                    <h5 className="card-title">Pyhton</h5>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <figure>
                                <img className="card-img-top" src={laravel} alt="" />
                            </figure>
                            <div className="card-body">
                                <a href="https://medium.com/@fhossain389/javascript-arrow-function-7454e5c52436" target="_blank">
                                    <h5 className="card-title">Laravel</h5>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Tools;