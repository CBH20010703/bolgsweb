import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import view from "../view.jsx"
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/NavCode" component={Navcode} />
                <Route path="/about" render={()=>(
                    <About>
                        <Route path="/about/other" component={view} />
                    </About>
                    )}>
                </Route>
                    <Route  path="*" component={Error} />
               </Switch>
           
        )
    }
}


