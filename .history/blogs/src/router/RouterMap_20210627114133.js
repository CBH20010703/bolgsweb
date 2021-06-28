import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import Login from "../view/Login/Login.jsx"
import App from "../App"
import view from '../view.jsx';
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            <Switch>
                <Route exact path="/"  component={App}>
                    <Route exact path="/view"  component={view}>
                         <Route exact path="view/Home"  component={Home}/>
                        <Route exact path="view/NavCode" component={Navcode} />
                    </Route>
                <Route  path="/Login" component={Login} />
                 <Route  path="*" component={Error} />
                </Route >
                 
               </Switch>
           
        )
    }
}


