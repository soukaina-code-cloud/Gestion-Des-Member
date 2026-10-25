import Empolyer from "../GestionEmployer/employer";
import * as type from "./typedActionReduser";

const initstate={
    employes:[],
    user:{}
}

export function reducerEmployer(state=initstate,action){
    switch(action.type){
        case type.addEmployer:
            return {...state,employes:[...state.employes,action.payload]}
          case type.updateEmployer:
            return {...state,employes:state.employes.map(emp=>{
                if(String(emp.numero) !== String( action.payload.numero)){
                    return emp
                }else{
                    return {...emp,nom:action.payload.nom,prenom:action.payload.prenom,adress:action.payload.adress}
                }
            })}
         
         case type.DeleteEmployer:
            return {...state,employes:state.employes.filter(emp=>emp.numero !== action.payload)}       
        break;
        default:
            return state;

    }

}