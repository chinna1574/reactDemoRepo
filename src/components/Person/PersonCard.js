import React from "react";
import './Person.css';

export default function PersonCard(props){
    console.log('[PC] rendered')
let design = (
<div className='PersonStyle' onClick={()=> props.selectPerson(props.person.id)}> 
    Name:&nbsp;{props.person.name}
</div>

)
return design;
}