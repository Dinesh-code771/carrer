import React from 'react';
import style from "./Header.module.css"
const Header = ()=>{
    return(
        <>
         <div className={style.header}>
             <div className={style.logo}>
             <img src="data:image/png;base64,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" alt="Girl in a jacket" width="500" height="600"/>
             </div>
             <div className={style.details}>
                 <div className={style.products}>
                     <div>OurProducts</div>
                     <div>insights</div>
                     <div>smart Yarn</div>
                     <div>About</div>
                     <div>contact</div>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Header;
