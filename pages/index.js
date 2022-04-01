
import { useRouter } from 'next/router'
import {React,useState,useEffect} from 'react';
import array from "../public/data";
import Header from './components/Header';
import style from "../styles/index.module.css";
import Body from './components/Body';
export default function Home() {

  const router = useRouter();
  const [userDetails,setUserDetails] = useState(array);
const handleClick = ()=>{
  router.push("careeradd")
}
  console.log(array);
 
   return (
     <>
     <div className={style.container}>
     <Header/>
     <div >
       <button onClick={handleClick}className={style.add}>Add</button></div>
     <Body data={userDetails}/>
     </div>
    
    
     </>
   )

}

