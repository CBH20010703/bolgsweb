import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Context from '../view/context/context'
import Login from "../view/Login/Login.jsx"
export default class RouterMap  extends React.Component {
    render() {
        return (
            <Switch>
                  <Route exact path="/home" component={Context} />
                 <Route exact path="/Login" component={Login} />
            </Switch>
        )
    }
}


