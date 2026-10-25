import React from "react";
import { use } from "react";
import {useState,useEffect} from "react";


export default function Moyenne(){
    const[nom,setNom]=useState("")
    const[n1,setN1]=useState(0)
    const[n2,setN2]=useState(0)
    const[n3,setN3]=useState(0)
    
    const[moyenne,setMoyenne]=useState("")
     

    function handlechange(e){
      switch(e.target.id){
        case "nom": setNom(()=>e.target.value)
        break;
         case "phy": setN1(()=>e.target.value)
        break;
         case "mt": setN2(()=>e.target.value)
        break;
         case "fr": setN3(()=>e.target.value)
        break;
        default:
          break;
      }

    }

      function calculer(e){
      
        
        let m=((parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3)
        setMoyenne(()=>m.toFixed(2))

      }

      useEffect(()=>{
        calculer()
      },[n1,n2,n3,nom])



    return(<div style={{border:"1px solid pink",
    borderRadius:"10px",
    boxShadow:"6px 4px 6px yellow",
    textAlign:"center"}}>
        <h1> Calculer Moyenne</h1>
      <label>nom :</label>
        <input type="text" id="nom" onChange={handlechange}/><br></br>
        <label>physique</label>
        <input type="text" id="phy" onChange={handlechange}/><br/>
        <label>Math</label>
        <input type="text" id="mt" onChange={handlechange}/><br/>
        <label>francais</label>
        <input type="text" id="fr" onChange={handlechange}/><br/>
        <input type="button" value="calculer" onClick={calculer}/>
        <p> {nom} vous avez eu: {moyenne}</p>

        
        {moyenne<=9 &&( <span style={{color:"red"}}>faibale</span>)}
        {(moyenne>9 && moyenne<=11 )&&( <span style={{color:"yellow"}}>passable</span>)}
        {(moyenne>11 && moyenne <=13 ) &&( <span style={{color:"green"}}>bien</span>)}
        {(moyenne>13 && moyenne <=16 ) &&( <span style={{color:"pink"}}>tres bien</span>)}
        {moyenne>16 &&( <span style={{color:"orange"}}>excellent</span>)}


        
        
    </div>)
}