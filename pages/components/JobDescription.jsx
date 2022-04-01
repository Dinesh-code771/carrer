import React from 'react';
import style from "./Job.module.css"
const JobDescription = ()=>{
    return <>
       <div className={style.cont}>
           <h1>Add job-Description </h1>
           <div className={style.descrip}>
               <h4>Description *</h4>
           </div>
           <div className={style.textArea}>
               <div className={style.icons}></div>
               <div className={style.area}>
                   <input type="text-area" />
               </div>
           </div>
           <div className={style.skills}>
               <h1>Add skills</h1>
               <p>Add skills keyword to get you a job</p>
               <button><h2>Add Skills</h2></button>
           </div>
        
       </div>
    </>
}
export default JobDescription;