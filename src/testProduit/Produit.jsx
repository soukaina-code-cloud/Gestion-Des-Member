import React from "react";
export default function Produit(props){
    
    return (<>
        {props.produit.map((p,index)=>(
                <ol key={index} style={props.style}>
                    <img src={p.image} alt={p.nom} width="100%"/>
                    <li>{props.prefix}</li>
                <li>{p.nom}</li>
                <li key={index}>{p.color}</li>
                <li key={index}>{p.ram}</li>
                <li key={index}>{p.taille}</li>
            </ol>)
        )}
        
    </>);

    }