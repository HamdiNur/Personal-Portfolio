import React from "react";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Bio from "../component/Bio";
import Skills from "../component/skill/Skills";
// import Info from "../component/Info"
import Projects from "../component/projectis/Projects";

import Contact from "../component/contacts/Contact";
import Footer from "../component/footer/Footer";
import ScrollUp from "../component/scrolling/ScrollUp";
const Home =() =>{
   return <div>
    
      <Header />
    <main className="main">
      <Banner />
      <Bio />
      <Skills />
      <Projects />
       <Contact />
       <Footer/>
       <ScrollUp />

    
      </main>
     
   </div>
}
export default Home;