import React, { useState } from 'react'
import "./project.css"
import ScrollDown from '../ScrollDown'

const Projects = () => {
  const [toggleState,setToggleState]=useState(0);
  const toggTab=(index)=>{
     setToggleState(index)
  }
  return (
    <section className="services section" id="projects">
       <h2 className="section__title"> <br />Projects</h2>
       <span className="section__subtitle">What I developed</span>

       <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className='uil uil-dumbbell services__icon'></i>
            <h3 className="services__title"> <br/>Gym <br/> website</h3>
                            
            <span className="services__button" onClick={()=>toggTab(1)}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className="services__modal">
            <div className="services__modal-content">
            <i className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">Gym Management</h3>
            <p className="services__modal-description">
              more one one years doing projects but still learning 
              new things 

            </p>
            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  develop the front of this project
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  
                 It has Home
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 
                 About
                 </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 

                 Design and mockups of products for companies                 </p>
               
              </li> 
            </ul>
           </div>
           </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className='uil uil-university services__icon'></i>
            <h3 className="services__title"> <br />University<br/>Mangement Sys</h3>
            <span className="services__button" onClick={()=>toggTab(1)}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className={toggleState === 1 ?"services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
            <i onClick={()=>toggTab(0)} className="uil uil-times services__modal-close"></i>
            <h3 className="services__modal-title">UI/UX</h3>
            <p className="services__modal-description">
              more one one years doing projects but still learning 
              new things 

            </p>
            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  develop the user interface
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  
                 Web Page development
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 
                 create UX element interactions
                 </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 

                 Design and mockups of products for companies                 </p>
               
              </li> 
            </ul>
           </div>
           </div>
          </div>
        </div>
        
        <div className="services__content">
          <div>
            <i className='uil uil-car services__icon'></i>
            <h3 className="services__title"> <br /> Rent Car <br/> Management System
                           </h3>
            <span className="services__button " onClick={()=>toggTab(1)}>View More 
            <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div className="services__modal">
            <div className="services__modal-content">
            <i className="uil uil-times services__modal-close"></i>
         
            <h3 className="services__modal-title"> Car systemr<br/></h3>
            <p className="services__modal-description">
              more  than one  years doing projects but still learning 
              new things 

            </p>
            <ul className="services__modal-services grid">
              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  develop the user interface
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">  
                 Web Page development
                </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 
                 create UX element interactions
                 </p>
               
              </li> 

              <li className="services__modal-services">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info"> 

                 Design and mockups of products for companies                 </p>
               
              </li> 
            </ul>
           </div>
           </div>
          </div>
        </div>
        
       </div>
    </section>
  )
}

export default Projects