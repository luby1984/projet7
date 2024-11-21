import React from 'react'
import { ApartmentBanner } from '../components/ApartmentBanner.jsx';
import { ApartmentDescription } from '../components/ApartmentDescription.jsx'
import "./About.scss"

function About() {
  return (
    <>
    <ApartmentBanner />
    <div className='about__container'>
    <ApartmentDescription />
    <ApartmentDescription />
    <ApartmentDescription />
    <ApartmentDescription />
    </div>
    </>
  );
}

export default About;