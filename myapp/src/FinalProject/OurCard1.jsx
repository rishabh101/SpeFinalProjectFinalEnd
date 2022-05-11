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


    const {Credentials,setCredentials}=a;

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

  
    if(ser1=='MassageforMen')
>>>>>>> Commit done
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

    if(ser1=='ApplianceRepair')
>>>>>>> Commit done
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


        
          
        
           
           

            if(ser1=='RepairsandPainting')
            {
                return(    
                    <div>
         <Card>
         <CardImg src="data:image/jpeg;base64,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" width="100%"/>
         <CardBody>
         <CardTitle>{props.details}</CardTitle>
        
         <Button onClick={()=>loginClicked2(props.details)} >
             View RepairsandPainting
        
         </Button>
         </CardBody>
                 </Card>
                 </div>           
                )
            }
            if(ser1=='AppliancesRepair')
            {
                return(    
                    <div>
         <Card>
         <CardImg src="data:image/jpeg;base64,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" width="100%"/>
         <CardBody>
         <CardTitle>{props.details}</CardTitle>
        
         <Button onClick={()=>loginClicked2(props.details)} >
             View AppliancesRepair
        
         </Button>
         </CardBody>
                 </Card>
                 </div>           
                )
            }
            if(ser1=='CleaningandPest')
            {
                return(    
                    <div>
         <Card>
         <CardImg src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/10/03190847/shutterstock_512435689-2-768x256.jpg"/>
         <CardTitle>{props.details}</CardTitle>
        <CardBody>
         <Button onClick={()=>loginClicked2(props.details)} >
             View CleaningandPest
        
         </Button>
         </CardBody>
                 </Card>
                 </div>           
                )
            }
            else{
                return(
                    <div></div>
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

              navigate(`/next2/${a.credentials.email}`);

            
        
             
            }
          });
          }

      
}

export default OurCard1;
