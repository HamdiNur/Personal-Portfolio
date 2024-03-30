import React from 'react'
import "./banner.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Bio from './Bio';




const Banner =()=> {
  return (
   <section className="home section" id="home">
      <div className="home__container container grid">
         <div className="home__content grid">
            <Social/>
            <div className="banner__img"></div>
            <Data/>
         </div>
         <ScrollDown />
      </div>
   </section>
  )
}

export default Banner