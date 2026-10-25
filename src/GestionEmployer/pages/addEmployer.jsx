import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployer } from "../../redux/ActionEmployer";
 export default function AddEmployer(){
    const[numero,setNumero]=useState(0);
    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[adress,setAdress]=useState("");
    const dispatch=useDispatch();
    const employes=useSelector(state=>state.employes);


    function handleSubmit(e){
        e.preventDefault();
        dispatch (addEmployer(numero,nom,prenom,adress));
        
    }


    return(
        <div>
            <h1> ajouter Employer {employes.length}</h1>
            <form onSubmit={handleSubmit}>
            <label>numero</label>
            <input type="number" onChange={(e)=>setNumero(e.target.value)}/><br/>
            <label>nom</label>
            <input type="text" onChange={(e)=>setNom(e.target.value)}/><br/>
            <label>prenom</label>
            <input type="text" onChange={(e)=>setPrenom(e.target.value)}/><br/>
            <label>adress</label>
            <input type="text" onChange={(e)=>setAdress(e.target.value)}/><br/>
            <button type="submit">ajouter</button></form>
        </div>
    )
}