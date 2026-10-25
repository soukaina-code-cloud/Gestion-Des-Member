
import React,{ useState} from "react";
export default function Produit(){
   const[recherche,setRecherche] =useState("");
   const categories=["tous","telephone","ordinateur","accossior"];
   const[nom,setNom] =useState("");
   const[prix,setPrix] =useState(0);
   const[image,setImage] =useState("");
   const[categorie,setCategorie] =useState("");
   const[categorief,setCategorief] =useState("tous");
   const[produits,setProduits]=useState([]);
   const[produitsf,setProduitsf]=useState([]);
   const[modifierid,setModifierid]=useState(null);

   function handeleAjouter(e){
    e.preventDefault();
    setProduits([...produits,{id:Date.now(),image:image,nom:nom,prix:prix,categorie:categorie}]);
    setNom("");
    setPrix("");
    setCategorie("");
    setImage("");

   }
   const total=produits.reduce((t,p)=>t+Number(p.prix),0);

   function handleRechercher() {
    const res=produits.filter((p)=> p.nom.toLowerCase().includes(recherche).toLowerCase());
    setProduitsf(res);
    
    
   }
   function handleDet(id){
    setProduits(produits.filter((p)=> p.id !==id))

   }
   function handleEdit(id) {
    const produit = produits.find((p)=>p.id=== id);
    setNom(produit.nom);
    setPrix(produit.prix);
    setCategorie(produit.categorie);
    setModifierid(id);
    
   }

   function handleSauvegarder(e) {
    e.preventDefault();

    setProduits(
        produits.map((p) =>
            p.id === modifierid
                ? {
                      ...p,
                      nom: nom,
                      prix: prix,
                      categorie: categorie
                  }
                : p
        )
    );

    setNom("");
    setPrix("");
    setCategorie("");
    setModifierid(null);
}


   return(<div style={{textAlign:"center",padding:"10px"}}>
           <header style={{border:"1px solid black",padding:"5px",background:"#D8B4FE",borderRadius:"8px"}}><h1 style={{textAlign:"center"}}>Gestion Des Produits</h1>
            <input type="text" placeholder="Rechercher un produit" onChange={(e)=>setRecherche(e.target.value)} />
            <label>Filter par categorie</label>
            <select onChange={(e)=>setCategorief(e.target.value)}>
                {categories.map((c,index)=>
                <option key={index}  value={c}>{c}</option>
                )}
            </select>
           </header>
           <form style={{border:"1px solid black",padding:"5px",background:"#FDE68A",borderRadius:"8px"}} onSubmit={modifierid===null?handeleAjouter:handleSauvegarder}>
            <h2 style={{textAlign:"center"}}>Ajouter un produit</h2>
            <input type="text" placeholder="src imager" onChange={(e)=>setImage(e.target.value)}/>
            <label>Nom de profuit</label>
            <input type="text" placeholder="phone" onChange={(e)=>setNom(e.target.value)}/>
             <label>prix de profuit</label>
            <input type="number" placeholder="ex:999" onChange={(e)=>setPrix(e.target.value)}/>
             <label> categorie</label>
            <select value={categorie} onChange={(e)=>setCategorie(e.target.value)}>
                {categories.map((c,index)=>
                <option key={index}  value={c}>{c}</option>
                )}
            </select><br></br>
            <button type="submit" style={{background:"lightgreen",borderRadius:"8px"}}>{modifierid===null?"ajouter":"sauvegarder"}</button>

           </form>
            
            <h3>liste de produits</h3>
            {produits.map((p,index)=>(
               <div style={{border:"1px solid black",borderRadius:"5px",background:"pink"}} key={index}>
                <img src={p.image} alt={p.nom} width="150" height="150"/>
              <p> {p.nom}</p>
               <p>{p.prix}</p>
              <p> {p.categorie}</p>
              <button onClick={()=>handleDet(p.id)} style={{background:"orange",borderRadius:"8px"}}>supprimer</button>
              <button onClick={()=>handleEdit(p.id)} style={{background:"yellow",borderRadius:"8px"}}>modifier</button>
              </div> 
            ))}
        
            
            <div><h4>total de prix</h4> <span>{total}</span></div>
         
    

   </div>
   )}
