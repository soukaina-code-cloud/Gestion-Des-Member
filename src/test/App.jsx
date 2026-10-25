import Personne from "./personne.jsx";
let personnes=[
        {nom:"salma",prenom:"salami",age:22,note:19},
        {nom:"hanan",prenom:"hasani",age:20,note:19},
        {nom:"alae",prenom:"kamali",age:23,note:19},
        {nom:"lobna",prenom:"sadiki",age:24,note:19},
        {nom:"samah",prenom:"sadiki",age:24,note:19}

 ]
let style={backgroundColor:"pink",borderRaduis:"8px",border:"1px solid gray",padding:"5px",margin:"5px"};

export default function App(){
    return(<>
    <Personne prefix={"cmc"} personne={personnes} style={style}/>
    </>)
}