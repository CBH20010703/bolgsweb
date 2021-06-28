import React from 'react'
import { Route, Switch,Router} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import Login from '../view/Login/Login.jsx';
export default class RouterMap  extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"  component={Home}/>
                    <Route exact path="/NavCode" component={Navcode} />
                    <Route  path="*" component={Error} />
               </Switch>
            </Router>
               
          
           
        )
    }
}


