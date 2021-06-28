import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import Login from "../view/Login/Login.jsx"
import  App from "../App"
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            <Switch>
                <Route exact path="/"  component={App}>
                     <Route exact path="/Home"  component={Home}/>
                    <Route exact path="/NavCode" component={Navcode} />
             
                </Route >
                 <Route  path="/Login" component={Login} />
                       <Route  path="*" component={Error} />
               </Switch>
           
        )
    }
}


