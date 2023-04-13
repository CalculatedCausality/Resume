import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import { TweenMax, Power3 } from 'gsap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.educationRef = React.createRef();
    this.skillsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    TweenMax.from(this.headerRef.current, 2, {
      opacity: 0,
      y: -100,
      ease: Power3.easeOut,
    });
    TweenMax.from(this.aboutRef.current, {
      opacity: 0,
      y: 10,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenMax.from(this.experienceRef.current, {
      opacity: 0,
      x: -10,
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenMax.from(this.educationRef.current, {
      opacity: 0,
      y: 10,
      ease: Power
