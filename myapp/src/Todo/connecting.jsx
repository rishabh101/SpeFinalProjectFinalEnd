import axios from 'axios';
import React ,{Component} from 'react';
class ConnectingService extends Component
{
executeHelloWorldService(email,password)
{
    console.log("executed");
   return(axios.get(`http://localhost:8080/user/login/${email}/${password}`));
}
}
export default new ConnectingService();