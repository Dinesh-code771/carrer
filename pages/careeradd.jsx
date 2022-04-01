import {React,useState} from 'react';
import { useRouter } from 'next/router'
import Header from './components/Header';
import array from "../public/data";
import styles from "../styles/careeradd.module.css"
import CarrerDashBoard from './components/CarrerDashBoard';
import JobDescription from './components/JobDescription';
const Career = ()=>{
    const router = useRouter();
    const[userData,setUserData] = useState({
        title:"",
        type:"",
        location:"",
        job:"",
        workType:"",
        paid:"",
        short:"",
    });
    const handleOnChange = (e)=>{
      const obj = { 
       }
       obj[e.target.name] = e.target.value;
       setUserData({
           ...userData,
           ...obj
       });
       
    }
    const handleSubmit = ()=>{
      array.push({...userData})
      router.push("/")
    }
    return(
        <>
        <div className= {styles.main}>
        <Header/>
       <CarrerDashBoard change={handleOnChange} data={userData}/>
       <JobDescription/>
       <div className={styles.submit}>
             <button onClick={handleSubmit}>Submit</button>
         </div>
        </div>
      
        </>
    )
}
export default Career;