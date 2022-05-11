import React,{Component} from 'react';
import axios from 'axios';
class ConnectingService2 extends Component{
    successful()
    {
        return(axios.get(`http://localhost:8080/service/getCategories`));
    }
     servicesSuccessful(category)
     {
         return(axios.get(`http://localhost:8080/service/getService/${category}`));
     }
    
     subservicesSuccessful(service)
     {
        return(axios.get(`http://localhost:8080/service/getsubservice/${service}`));
     }
<<<<<<< HEAD

=======
      subscribe(userid,subserviceid)
      {
        return(axios.get(`http://localhost:8080/service/subscribe/${userid}/${subserviceid}`));   
      }

      getOrders(userid)
      {
          return(axios.get(`http://localhost:8080/service/orders/${userid}`));
      }
>>>>>>> Commit done
}
export default new  ConnectingService2;