import React, { useState } from "react";
import "./App.css";
export default function (){
   const[id,setId] = useState("");
   const[nom,setNom] = useState("");
   const[age,setAge] = useState("");
   const[abonnement,setAbonnement] = useState("Mensuel");
   const[actif,setActif] = useState(false);
   const[recherche,setRecherche] = useState("");
   function handlerechercher(e) {
     setRecherche(e.target.value);
   }
   const [membres, setMembres] = useState([
  {
    id: 1,
    nom: "Sara",
    age: 24,
    abonnement: "Mensuel",
    actif: true
  },
  {
    id: 2,
    nom: "Youssef",
    age: 30,
    abonnement: "Annuel",
    actif: false
  },
  {
    id: 3,
    nom: "Imane",
    age: 21,
    abonnement: "Mensuel",
    actif: true
  }
]);

    const ajouter=(e)=>{
        e.preventDefault();
        if(nom.trim()==="" || age ===""){
            alert("remplir tous les champs");
            return;
        }
        const nouvelMember = {
        id : Date.now(),
        nom : nom.trim(),
        age : Number(age) ,
        abonnement : abonnement,
        actif : true
        };
        setMembres([...membres,nouvelMember]);
        setNom("");
        setAge("");
        setActif("");

    }

    const supprimer = (id)=> {
        setMembres(membres.filter((m)=> m.id !== id));

    }

    function changerStatut(id) {
    setMembres(membres.map((m) =>
      m.id === id ? { ...m, actif: !m.actif } : m
    ));
  }

  const resultat = membres.filter((m) =>
    m.nom.toLowerCase().includes(recherche.toLowerCase())
  );
    const filterechercher = ()=>{
        const res = membres.filter((m)=>
             m.nom.toLowerCase().includes(recherche.toLowerCase()));
        return res;
    }
    const nombreActifs = membres.filter(
        m=> m.actif===true
    ).length;
    const nomberMembres = membres.length;

    return(<div style={{backgroundColor:"#f9f7f4"}}>
        <h1>Gestion Des Membres</h1><div className="stats">
        <div className="stat"><h4>Actifs</h4> <span>{nombreActifs}</span></div>
        <div className="stat"><h4>Total membres</h4><span>{nomberMembres}</span></div></div>
        <form onSubmit={ajouter}>
            <input type="text" placeholder="Nom" value={nom} 
            onChange={(e)=> setNom(e.target.value)}/>
             <input type="number" placeholder="age" value={age} 
            onChange={(e)=> setAge(e.target.value)}/>
            <select className="select" value={abonnement} onChange={(e)=> setAbonnement(e.target.value)}>
             <option value="Mensuel">Mensuel</option>
             <option value="Annuel">Annuel</option>
            </select>
            <button style={{backgroundColor:"#59b6ef"}} type="submit">ajouter</button>
        </form>
        <label > Rechercher </label>
        <input  type="text" value={recherche} 
        placeholder="Rechercher...." onChange={handlerechercher}/>
        
        <table className="table" border="1">
            <tr style={{backgroundColor:"#989794"}}> <th>Statut</th><th>Abonnement</th><th>Nom</th><th>Age</th><th>Action</th></tr>
            {filterechercher().map((m)=>(
                <tr key ={m.id}>
                    <td>{m.actif ?  "actif" : "inactif"}</td>
                    <td>{m.abonnement}</td>
                    <td>{m.nom}</td>
                    <td>{m.age}</td>
                    <td><button style={{backgroundColor:"#ddf697"}} onClick={()=>changerStatut(m.id)}>Activer / desactiver</button>
                    <button style={{backgroundColor:"#faa384"}} onClick={()=>supprimer(m.id)}>supprimer</button></td>
                </tr>
            ))}
        </table>
    </div> )







}