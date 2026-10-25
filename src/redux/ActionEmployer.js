import React from "react";
import * as type from "./typedActionReduser";
export function addEmployer(numero,nom,prenom,adress){
    return{type :type.addEmployer,payload:{numero:numero,nom:nom,prenom:prenom,adress:adress}}
}
export function deleteEmployer(numero){
    return {type:"DeleteEmployer",payload:numero
    
    }
}

export function updateEmployer(numero,nom,prenom,adress){
    return{type :type.updateEmployer,payload:{numero:numero,nom:nom,prenom:prenom,adress:adress}}
}