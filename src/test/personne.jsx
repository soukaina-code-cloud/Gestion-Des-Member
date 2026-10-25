import React from "react";

 
export default function Personne({prefix,personne,style}){

    return(
       <>
       {personne.map((p,index)=>(
              <div style={style} key={index}>
                     <ul style={{listStyleType:"square"}}>
                            <li>{prefix}</li>
                            <li>{p.nom}</li>
                            <li>{p.prenom}</li>
                            <li>{p.age} ans</li>
                            <li>{p.note}</li>
                     </ul>
              </div>
       ))
}

       </>
    
   
)}