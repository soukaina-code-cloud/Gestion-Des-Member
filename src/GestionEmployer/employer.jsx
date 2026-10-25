import React from "react";
import { Link } from "react-router-dom";
import AddEmployer from "./pages/addEmployer";
import { useDispatch } from "react-redux";
import { deleteEmployer } from "../redux/ActionEmployer";
import { updateEmployer } from "../redux/ActionEmployer";
export default function Employer(props){
    const {numero,nom,prenom,adress}=props.employer
    const dispatch =useDispatch()
    return(
        <div style={{border:"1px solid black",borderRadius:"5px",width:"200px"}}><h1>EMPLOYER</h1>
        <div style={{border:"1px solid black",borderRadius:"5px"}}>
            <span> Employer numero :{numero}</span>

        </div>
        <div style={{border:"1px solid black",borderRadius:"5px"}}>
            <span> nom :{nom}</span>
            <span> prenom :{prenom}</span>
            <span> adress :{adress}</span>



        </div>
        <div style={{border:"1px solid black",borderRadius:"5px"}}>
            <Link to={`/updateEmployer/${numero}`}>modifier</Link>
            <button onClick={()=> dispatch(deleteEmployer(numero))}>supprimer</button>
        </div>

        </div>
    )
}