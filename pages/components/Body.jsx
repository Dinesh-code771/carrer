import React from "react";
import style from "./body.module.css";
const Body = ({data}) => {
    console.log(data)
  return (
    <>
    {
        data.map((data,index)=>{
              return <>
                <div key={index}className={style.jobTitle}>
        <h4>{data.job}</h4>
      </div>
      <div className={style.body}>
        <div className={style.description}>
          <div className={style.title}>
            <h3>{data.title}</h3>
          </div>
          <div className={style.text}>
            <div className={style.para}>
              <p>
               {data.short}
              </p>
              
            </div>
            <div className={style.icons}>
              <h5> ${data.paid}</h5>
              <h4> ❤️Graits</h4>
            </div>
          </div>
          <div className={style.location}>
            <p>{data.location}/{data.workType}</p>
          </div>
        </div>
      </div></>
        })
    }
    </>
  );
};
export default Body;
