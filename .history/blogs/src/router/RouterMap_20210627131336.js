import React from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import Login from "../view/Login/Login"
import Context from '../view/context/context'
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            
                <Switch>
                        <Route  path="/"  component={Context}/>
                        <Route exact path="/login/index" component={Login} />
                        <Redirect to="/"></Redirect>
               </Switch>
          
           
        )
    }
}


