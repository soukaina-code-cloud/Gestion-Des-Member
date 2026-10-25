import React from "react";
import Employer from "../employer";
import { useSelector } from "react-redux";
export default function ListeEmployes(){
    const employes=useSelector(state=>state.employes)
    return(
        <div>
            <h1>liste employer</h1>
            <div>
                {employes.map((emp,index)=>{
                    return (
                        <Employer employer={emp} key={index}/>
                    ) 
                })}
                
            </div>

        </div>
)
}