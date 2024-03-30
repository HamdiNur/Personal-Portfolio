import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
<footer className="footer">
   <div className="footer__container container">
      <h1 className="footer__title">Hamdi</h1>
      <ul className="footer__list">
         <li>
            <a href="#bio" className="footer__link">Bio</a>
         </li>
         <li>
            <a href="#skills" className="footer__link">Skills</a>
         </li> <li>
            <a href="#projects" className="footer__link">Projects</a>
         </li>
      </ul>
 
   <div className="footer__social">
   <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
      <i class="bx by bxl-facebook"></i>
     </a>
     <a href="https://twitter.com/" className="footer__social-link" target='_blank'>
     <i class="bx by bxl-twitter"></i>
     </a>
     <a href="https://www.instagram.com/" className="footer__social-link" target='_blank'>
     <i class="bx by bxl-instagram" ></i>
     </a>
   </div>
   <span className="footer__copy">
   &#169; hamdoonur. All rigths reserved
   
   </span>
   </div>
</footer>
  )
}

export default Footer