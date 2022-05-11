import noteContext from './noteContext';
import React, { useContext } from 'react';
import OurCard1 from './OurCard1';
import NoteState from './NodeState';


const NextCard=()=>
{
    const context=useContext(noteContext);

const NextCard=(props)=>
{
    const context=useContext(noteContext);
    
    

    const {Services,setServices} =context;
    return(
        <div>
        {
Services.length>0?Services.map((item) => <OurCard1 details={item} />):'No Services'
               }
               </div>
    )
}
export default NextCard;
