import React from 'react'
import {  Route, Switch} from 'react-router-dom'
import Login from "../view/Login/Login"
import Context from '../view/context/context'
import Error from '../view/404/Error'
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            
            <Switch>
                 <Route  path="/"  component={Context}/>   
                 <Route path="/login" component={Login} />
                 <Route path="*" component={Error} />
    
               </Switch>
          
           
        )
    }
}


