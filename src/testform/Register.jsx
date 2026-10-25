import React from "react";
import Input from "./Input";

export default function Register (){
    return(
        <form action="" method="POST">
           
            <Input label="lastname" 
                   type="text"
                   id="lastname"
                   name="lastname"
                   placeholder="entre lastname"
                   required="required"
            />

            <Input label="frastname" 
                   type="text"
                   id="fristname"
                   name="fristname"
                   placeholder="entre fristname"
                   required="required"
            />


        </form>
    )
}