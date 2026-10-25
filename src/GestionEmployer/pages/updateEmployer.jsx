import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployer } from "../../redux/ActionEmployer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
 export default function UpdateEmployer(){
    
    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[adress,setAdress]=useState("");
    const dispatch=useDispatch();
    const employes=useSelector(state=>state.employes);
    const num = useParams().numero;
    const navigate=useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        dispatch (updateEmployer(num,nom,prenom,adress));
        navigate("/employes");
    }

    useEffect(()=>{
        const myemp=employes.find(emp=>String(emp.numero)===num)
        if(myemp){
            setNom(myemp.nom)
            setPrenom(myemp.prenom)
            setAdress(myemp.adress)

        }
        
    },[])
    return(
        <div>
            <h1> Update Employer {num}</h1>
            <form onSubmit={handleSubmit}>
            <label>numero</label>
            <input type="number" value={num} disabled/><br/>
            <label>nom</label>
            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/><br/>
            <label>prenom</label>
            <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/><br/>
            <label>adress</label>
            <input type="text" value={adress} onChange={(e)=>setAdress(e.target.value)}/><br/>
            <button type="submit">update</button></form>
        </div>
    )
}