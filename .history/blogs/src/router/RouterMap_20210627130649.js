import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Login from "../view/Login/Login"
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            
                <Switch>
                        <Route exact path="/"  component={Home}/>
                         <Route exact path="/Login" component={Login} />
                    <Route  path="*" component={Error} />
               </Switch>
          
           
        )
    }
}


