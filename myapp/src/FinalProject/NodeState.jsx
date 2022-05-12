import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>
{
    const s1=[{}]
    const s2=[{subservice:'',
cost:0}]

    
const s3=[{email:'',password:''}]
const s4=[]
    const s5=[]
    const [Services,setServices]=useState(s1);
    const [SubService,setSubservices]=useState(s2);
    const[credentials,setCredentials]=useState(s3);
    const [userId,setUserid]=useState(s4);
    const [orders,setOrders]=useState(s5);

    const update=(data)=>
    {
        setServices(data);
    }
    const update2=(data)=>
    {
        setSubservices(data);
    }
   
    const update3=(data)=>
    {
       setCredentials({email:data.email,password:data.password});
    }
   const update4=(data)=>
   {
       setUserid(data);
   }
   const update5=(data)=>
   { 
       setOrders(data);

   }
    return(
        <noteContext.Provider value={{Services,update,SubService,update2,credentials,update3,userId,update4,orders,update5}}>

            {props.children}
        </noteContext.Provider>
       
    )
}
export default NoteState;
