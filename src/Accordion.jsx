import react from "react";
import reactDom from "react-dom";
import { questions } from './api';
import { useState } from 'react';
import Myaccordion from "./Myaccordion";
const Accordion=()=>{
    const [data,setdata]=useState(questions);
    return(
        <>
         <h1 className='heading'>Questions(through api rendering)</h1>
         {
             data.map((currelem)=>{
                 const {id}=currelem;
return <Myaccordion key={id} {...currelem}/>;

             })
         }
        </>
    );
}
export default Accordion;