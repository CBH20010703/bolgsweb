import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Context from '../view/context/context'

export default class RouterMap  extends React.Component {
    render() {
        return (
            <Switch>
                  <Route  path="/" component={Context} />
                  <Route  path="/login" component={Login} />
            </Switch>
        )
    }
}


