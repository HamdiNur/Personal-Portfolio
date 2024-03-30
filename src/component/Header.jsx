import React, { useState } from 'react'
import logo from '../img/download.jpg'
import './header.css';

const  Header = () =>{
      /*=========Change Background header ===========*/
   window.addEventListener("scroll",function(){
      const header=document.querySelector(".header");
      //when the scroll is higher than 200 viewpr height, add 
      //the scroll-header class to tag woth scroll-top class
      if(this.scrollY >=80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
   });
   /*=========Toggle Menue ===========*/
   const [Toggle, showMenu] = useState(false);
  return (
   
   <header className="header">
      <nav className="nav container">
         <a href="index.html" className="nav__logo">Hamdi</a>
         <div className={Toggle ? "nav__menu show-menu": 
               "nav__menu"}>
            <ul className="nav__list grid">
               <li className="nav__item">
                  <a href="#home" className="nav__link ">
                     <i className="uil uil-estate nav__icon"></i>Home 
                  </a>
               </li>
               <li className="nav__item">
                  <a href="#bio" className="nav__link">
                     <i className="uil uil-user nav__icon"></i>Bio
                  </a>
               </li>

               <li className="nav__item">
                  <a href="#skills" className="nav__link">
                     <i className="uil uil-file-alt nav__icon"></i>Skill
                  </a>
               </li>
               <li className="nav__item">
                  <a href="#projects" className="nav__link">
                     <i className="uil uil-briefcase-alt nav__icon"></i>Project
                  </a>
               </li>
               <li className="nav__item">
                  <a href="#contact" className="nav__link">
                     <i className="uil uil-message nav__icon"></i>Contact
                  </a>
               </li>
               <li className="nav__item">
                  <a href="" className="nav__link">
                     <i className="uil uil-nav__icon"></i>
                  </a>
               </li>
            </ul>
            <i class="uil uil-times nav__close"  onClick={() => showMenu
            (!Toggle)}></i>
         </div>

         <div className="nav__toggle" onClick={() => showMenu
            (!Toggle)}>
         <i class="uil uil-apps"></i>
         </div>
      </nav>
   </header>
  )
}

export default Header