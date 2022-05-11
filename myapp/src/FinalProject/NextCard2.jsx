import noteContext from './noteContext';
import React, { useContext } from 'react';

import OurCard2 from './OurCard1';
import NoteState from './NodeState';

const NextCard2=()=>
{
    const context=useContext(noteContext);
    const {SubService,setSubservices} =context;
    return(
        <div>
        {
SubService.length>0?SubService.map((item) => <OurCard2 details={item.subservice} />):'No Services'

import OurCard2 from './OurCard2';
import NoteState from './NodeState';

const NextCard2=(props)=>
{
    const context=useContext(noteContext);
    const {SubService,setSubservices} =context;
    console.log(SubService)
    return(
        <div>
             
        {
           
(SubService.length>0)?<OurCard2 details={SubService[0]} />:'No Services'


               }
               </div>
    )
}
export default NextCard2;
