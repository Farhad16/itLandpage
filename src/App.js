import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Services/Services';
import MainContent from './components/MainContent/MainContent';
import Contact from './components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import UploadImage from './components/UploadImage/UploadImage';
import WriteText from './components/WriteText/WriteText';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <Router>
      <ScrollToTop smooth color='#ffffff' fontWeight='bold' />
      <Navbar></Navbar>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <MainContent />
        </Route>
        <Route path="/uploadImage">
          <UploadImage />
        </Route>
        <Route path="/writeText">
          <WriteText />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
