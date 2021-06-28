import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import  from '../App.js';
export default class RouterMap  extends React.Component {
    render() {
        return (
           
            <Switch>
                  <Route exact path="/" component={App} ></Route>
               
            </Switch>
           
        )
    }
}


