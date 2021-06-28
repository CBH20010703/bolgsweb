import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            
                <Switch>
                        <Route exact path="/"  component={Home}/>
                         <Route exact path="/NavCode" component={Navcode} />
                    <Route  path="*" component={Error} />
               </Switch>
          
           
        )
    }
}


