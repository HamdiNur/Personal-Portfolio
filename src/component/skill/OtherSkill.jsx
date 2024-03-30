import React from 'react'

const OtherSkill = () => {
   return(
   <div className="skills__content">
   <h3 className="skills__title">OtherSkil</h3>
    <div className="skills__box">
      <div className="skills__group">
         <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
               <h3 className="skills__name">Graphic Design</h3>
                 <span className="skills__level">Intermidate</span>
            </div>
         </div>

         <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
               <h3 className="skills__name">Video Editing</h3>
                 <span className="skills__level">Intermidate</span>
            </div>
         </div>

         <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
               <h3 className="skills__name">English</h3>
                 <span className="skills__level">Intermidate</span>
            </div>
         </div>
         

      </div>

      <div className="skills__group">
      
         <div className="skills__data">
         <i class='bx bx-badge-check'></i>
         <div>
            <h3 className="skills__name">Arabic</h3>
              <span className="skills__level">Fluent</span>
         </div>
      </div>

      <div className="skills__data">
         <i class='bx bx-badge-check'></i>
         <div>
            <h3 className="skills__name">Hindi</h3>
              <span className="skills__level">Intermidate</span>
         </div>
      </div>
      <div className="skills__data">
      <i class='bx bx-badge-check'></i>
      <div>
         <h3 className="skills__name">Korean</h3>
           <span className="skills__level">Still learning</span>
      </div>
   </div>



      </div>

    </div>

 </div>
   )

}

export default OtherSkill;