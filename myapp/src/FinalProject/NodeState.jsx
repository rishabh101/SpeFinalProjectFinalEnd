import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>
{
    const s1=[{}]
    const s2=[{subservice:'',
cost:0}]
    const [Services,setServices]=useState(s1);
    const [SubService,setSubservices]=useState(s2);
    const update=(data)=>
    {
        setServices(data);
    }
    const update2=(data)=>
    {
        setSubservices(data);
    }
    return(
        <noteContext.Provider value={{Services,update,SubService,update2}}>
            {props.children}
        </noteContext.Provider>
       
    )
}
export default NoteState;