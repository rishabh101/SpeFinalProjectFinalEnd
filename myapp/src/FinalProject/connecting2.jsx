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

}
export default new  ConnectingService2;