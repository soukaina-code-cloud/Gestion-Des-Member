import React,{useState} from "react";
export default function Courses() {

     const [idc,setIdc]=useState("");
     const[namec,setNamec]=useState("");
     const[categorie,setCategorie]=useState("homme");
     const[distance,setDistance]=useState("");
     const[participant,setParticipant]=useState([]);


    const courses=[
        {id:"marchef",nom:"marche femme",categorie:"f",distance:10000},
        {id:"marcheh",nom:"marche homme",categorie:"h",distance:12000},
        {id:"marchef",nom:"marathon femme",categorie:"f",distance:16000},
        {id:"marchef",nom:"marathon homme",categorie:"h",distance:19000}
        

    ];
    const participants=[
        {id:"1",nom:"med",idcourses:"marchh"},
        {id:"2",nom:"med",idcourses:"marchf"}
        
    ];


    return(<div>
           <form>
            <label> courses id</label>
            <input type="text" onChange={(e)=> setIdc(e.target.value)}/>
             <label> courses name</label>
            <input type="text" onChange={(e)=> setNamec(e.target.value)}/> 
            <label> courses categorie</label>
            <input type="radoi" name="c" value="femme" onChange={(e)=> setIdc(e.target.checked)}/>
            <input type="radoi" name="c" value="homme" onChange={(e)=> setIdc(e.target.checked)}/>
             <label> courses distance</label>
            <input type="number" onChange={(e)=> setDistance(e.target.value)}/>
            <button>nouveaux principale</button>
           </form>
           <h2>participants</h2>
           <table >
             <tr><th>id participants</th><th>nom</th><th>id cource</th><th></th></tr>
             {participant.map((p,index)=>
             <tr key={index}><td>{p.id}</td><td>{p.nom}</td><td>{p.categorie}</td><td><button onClick={handelesuprimer}>supprimer</button></td></tr>
            )}
           </table>

           {nouveaupartisipant &&( <>
           <label> id</label>
            <input type="text" onChange={(e)=> setId(e.target.value)}/>
             <label>nom</label>
            <input type="text" onChange={(e)=> setnom(e.target.value)}/> 
            <label> id courses </label>
            <input type="text" name="c" value="femme" onChange={(e)=> setIdc(e.target.checked)}/>
            <button onClick={fg}>canal</button>
            <button onClick={gg}>ok</button>
            
           </>)}
    </div>)
}