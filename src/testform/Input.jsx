export default function Input(params){
    const style={backgroundColor:"pink", border:"1px solid gray",margin:"5px"}
    return(
        <>
        <label htmlFor={params.id}>{params.label}</label>
            <input style={style} type={params.type}
             id={params.id} 
             name={params.name} 
             placeholder={params.placeholder} 
             required={params.required}/><br/>

           
        </>
    )
}