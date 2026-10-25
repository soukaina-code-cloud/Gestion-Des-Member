import React from "react";
import { useState } from "react";
export default function Notes(){
       const[nom,setNom]=useState("");
       const[matiere,setMatiere]=useState([]);
       const[note,setNote]=useState();
       const[stylenote,setStyleNote]=useState({color:"yellow",backgroundColor:"orange"});
       const[listnote,setListNote]=useState([]);
       
       const matieres=[{id:1,matiere:"mathematique"},
        {id:2,matiere:"physique"},
        {id:3,matiere:"arabe"}
       ]

       function handlesupprimer(index){
        setListNote(listnote.filter((item,i)=>i !== index));

       }
        function handlenote(e){
            const val= e.target.value;
            if(isNaN(val)){
                setNote(0)
                setStyleNote({color:"yellow",backgroundColor:"red"})
            }else{
                if(val<=20){
                    setNote(val)
                setStyleNote({color:"black",backgroundColor:"white"})

                }else{
                    setNote((previous)=>previous)
                setStyleNote({color:"white",backgroundColor:"blue"})

                }
            }

        }

        function handlechange(e){
             switch(e.target.id){
              case "nom":  setNom(e.target.value)
              break;
              case "mat": setMatiere(e.target.value);
               break;
               case "note": setNote(e.target.value)
               break;
               default :
               break;
             }
        }
        
        function handleajouter(){
            
            setListNote([...listnote,{matiere:matiere,note:note}])
            setMatiere("");
            setNote(0)
        }

        const moyenne = listnote.length
  ? (listnote.reduce((sum, item) => sum + Number(item.note), 0) / listnote.length).toFixed(2)
  : 0;



    return(<div>
        <h1>liste notes</h1>
        <label>nom:</label>
        <input type="text" id="nom" onChange={handlechange}/><br/>
        <label>matiere:</label>
        <select id="mat" onChange={handlechange}>
            {matieres.map((m,index)=>(
                <option key={index} value={m.matiere}>{m.matiere}</option>
            ))}
        </select><br/>
        <label>note:</label>
        <input type="text" id="note" onChange={handlenote} /><br/>
        <button type="button" onClick={handleajouter}>ajouter</button>

        

               {listnote.map((item,index)=>(<div style={{boxShadow:"4px 3px 5px yellow",
            border:"1px solid gray",margin:"10px", borderRadius:"5px"}
            }  key={index}>{index}  {item.matiere} {item.note} 
                <i >
                <button style={{backgroundColor:"red"}} onClick={()=>handlesupprimer(index)}>x</button></i></div>
               ))}
    

        <div> {nom} votre moyenne est :{moyenne} /20</div>



    </div>)
}