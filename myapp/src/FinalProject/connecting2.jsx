import React,{Component} from 'react';
import axios from 'axios';
class ConnectingService2 extends Component{
    successful()
    {
        return(axios.get(`http://localhost:8000/service/getCategories`));
    }
     servicesSuccessful(category)
     {
         return(axios.get(`http://localhost:8000/service/getService/${category}`));
     }
    
     subservicesSuccessful(service)
     {
        return(axios.get(`http://localhost:8000/service/getsubservice/${service}`));
     }

      subscribe(userid,subserviceid)
      {
        return(axios.get(`http://localhost:8000/service/subscribe/${userid}/${subserviceid}`));   
      }

      getOrders(userid)
      {
          return(axios.get(`http://localhost:8000/service/orders/${userid}`));
      }

}
export default new  ConnectingService2;
