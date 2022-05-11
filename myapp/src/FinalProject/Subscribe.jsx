import React from "react";
import noteContext from './noteContext';
import { useContext } from 'react';

const Subscribe=(props)=>
{
    const a=useContext(noteContext);
    const {subservice,setSubservice}=a;
    
    return(
    <div>
    Booking for the  {a.SubService} service is confirmed
    
    </div>
    
)
}
export default Subscribe;