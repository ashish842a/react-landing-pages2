import React from 'react'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Advertisement from '../Advertisement/Advertisement';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import KeyFeature from '../KeyFeature/KeyFeature';

function Home() {
  return (
   <>
    <Nav />
    <Main />
    <Advertisement />
    <KeyFeature />
    <Feedback />
    <Contact />
    <Footer />
   </>
  )
}

export default Home;