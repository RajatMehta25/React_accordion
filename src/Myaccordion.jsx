import reactDom from "react-dom";
import react, { useState } from "react";


const Myaccordion=({question,answer})=>{
    const [show,setshow]=useState(false);
    return(
<>
<h2><span onClick={()=>setshow(!show)}>{show?"-":"+"}</span>&emsp;&emsp;{question}</h2>
{show && <h3>{answer}</h3>}
</>
    );
}

export default Myaccordion;