import React,{Component, useState} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import noteContext from './noteContext';
import { useNavigate } from 'react-router';
import ConnectingService2 from './connecting2.jsx';
import { useContext } from 'react';
const OurCard1=(props)=>
{
    let ser1=props.details;
    const a=useContext(noteContext);

    let navigate=useNavigate();
    if(ser1=='SalonForM')
    {
return(    
               <div>
    <Card>
    <CardImg src= "https://portenoire.com/wp-content/uploads/2019/06/2019_06_12-Tips-for-Marketing-a-Salon-to-Men-and-Getting-More-Male-Clients-1200x628-1080x628.jpg" width="100%"/>
    <CardBody>
    <CardTitle>{props.details}</CardTitle>
   
    <Button onClick={()=>loginClicked2(props.details)} >
        View Salon for M Services

    </Button>
    </CardBody>
            </Card>
            </div>           
           )
    }
    if(ser1=='SalonforW')
    {
        return(    
            <div>
 <Card>
 <CardImg src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
 <CardBody>
 <CardTitle>{props.details}</CardTitle>

 <Button onClick={()=>loginClicked2(props.details)} >
     View SalonFoW Services

 </Button>
 </CardBody>
         </Card>
         </div>           
        )
    }
    if(ser1=='MassageforM')
    {
return(    
               <div>
    <Card>
    <CardImg src= "https://portenoire.com/wp-content/uploads/2019/06/2019_06_12-Tips-for-Marketing-a-Salon-to-Men-and-Getting-More-Male-Clients-1200x628-1080x628.jpg" width="100%"/>
    <CardBody>
    <CardTitle>{props.details}</CardTitle>
   
    <Button >
        View Massage for M Services

    </Button>
    </CardBody>
            </Card>
            </div>           
           )
    }
    if(ser1=='Acservice')
    {
        return(    
            <div>
 <Card>
 <CardImg src="https://image.shutterstock.com/image-vector/online-assistant-virtual-technical-support-600w-1431106397.jpg" width="100%"/>
 <CardBody>
 <CardTitle>{props.details}</CardTitle>

 <Button onClick={()=>loginClicked2(props.details)} >
     View SalonFoW Services

 </Button>
 </CardBody>
         </Card>
         </div>           
        )
    }
    else{
        return(
<div>

</div>
        )
        
    }
    


    function loginClicked2(service)
    {
        
        ConnectingService2.subservicesSuccessful(service).then(response=> {
            if(response.data!=null)
            {
            
              console.log(response.data);
              {
               a.update2(response.data);
              }
              navigate('/next2');
            
        
             
            }
          });
          }

      
}

export default OurCard1;