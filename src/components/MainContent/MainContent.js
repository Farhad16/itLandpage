import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Tools from '../Tools/Tools';
import './MainContent.css';


const MainContent = () => {
    return (
        <div id="main">
            <Home></Home>
            <About></About>
            <Services></Services>
            <Tools></Tools>
            <Contact></Contact>
        </div>
    );
};

export default MainContent;