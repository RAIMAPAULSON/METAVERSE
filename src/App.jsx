import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Quotes from './Components/Quotes/Quotes';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Features from './Components/Features/Features';
import AppStore from './Components/AppStore/AppStore.jsx'
import Footer from './Components/Footer/Footer.jsx';
import PopupPlayer from './Components/PopupPlayer/PopupPlayer.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlay, setisPlay] = React.useState(false);
  const togglePlay = () => {
    setisPlay(!isPlay);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  )
};

export default App
