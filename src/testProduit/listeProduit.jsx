import React from "react";
import Produit from "./Produit";
import images from "./images";
export default function listeProduit(){
    let produits=[
        {nom:"hp",color:"gray",ram:32, taille:16.2 ,image:images.dell},
        {nom:"msi-thin",color:"gray",ram:32 ,taille:16.4,image:images.hp},
        {nom:"lenovo",color:"gray",ram:16,taille:14.3,image:images.novo},
        {nom:"dell",color:"gray",ram:32,taille:16,image:images.dell},
        {nom:"makbook",color:"gray",ram:16,taille:13,image:images.mac},
    ]
    const style={backgroundColor:"pink",
         border:"1px solid gray",margin:"5px"
         ,width:"200px"
        }

    return(
        <>
        <Produit  produit={produits} style={style} prefix ={"new product"}/>
        </>
    )
}