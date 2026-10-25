import React from "react";
import AddEmployer from "./pages/addEmployer";
import ListeEmployes from "./pages/listeEmployes";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import UpdateEmployer from "./pages/updateEmployer";


export default function App(){
    return(
        <div>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/employes" element={<ListeEmployes/>} />
                <Route path="/addEmployer" element={<AddEmployer/>} />
                <Route path="/updateEmployer/:numero" element={<UpdateEmployer/>} />
                
            </Routes>
           
        </div>
    )
}