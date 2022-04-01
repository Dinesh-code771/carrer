import React from 'react';
import style from "./CarrerDashBoard.module.css";
const CarrerDashBoard= ({change,data})=>{
  return(
      <>
      <div className={style.container}>
          <div className={style.carrer}>
            <h1>Carrer DashBoard</h1>
          </div>
          <div className={style.input}>
           <div className={style.firstCont}>
               <div className={style.title}>
               <input onChange={(e)=>change(e)} value={data.title} type="text" placeholder="Title" name="title" />
               </div>
               <div className={style.type}>
               <input onChange={(e)=>change(e)} value={data.type} type="text" placeholder="Employment type (Optional choice)" name="type" />
               </div>
           </div>
           <div className={style.secondCont}>
               <div className={`${style.location} ${style.common}`}>
               <input onChange={(e)=>change(e)}  value={data.locatio} type="text" placeholder="Location" name="location"/>
               </div>
               <div className={`${style.job} ${style.common}`}>
               <input  onChange={(e)=>change(e)} value={data.job} type="text" placeholder="Job" name="job"/>
               </div>
               <div className={`${style.worktype} ${style.common}`}>
               <input  onChange={(e)=>change(e)} value={data.worktype} type="text" placeholder="workType" name="workType"/>
               </div>
               <div className={`${style.paid} ${style.common}`}>
               <input  onChange={(e)=>change(e)} value={data.paid} type="text"placeholder="Paid" name="paid"/>
               </div>
           </div>
          </div>
          <div className={style.short}>
              <input onChange={(e)=>change(e)}  type="text"placeholder='Short-description' value={data.shorts} name='short' />
          </div>
      </div>
      </>
  )
}
export default CarrerDashBoard