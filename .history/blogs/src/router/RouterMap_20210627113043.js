import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from "../view/Home/Home.jsx";
import Error from "../view/404/Error.jsx";
import Navcode from "../view/NavCode/NavCode.jsx"
import { Layout } from 'antd';
const {  Content} = Layout;
export default class RouterMap  extends React.Component {
    render() {
        return (
           
                <Switch>
                    <Route exact path="/"  component={Home}/>
                <Route exact path="/NavCode" component={Navcode} />
                <Route exact path="/Nav" render={()=>(
                    <Content style={{ margin: '24px 16px 0', height: "auto", background:"#fff" }}>
                             <Route path="/nav/home" component={Home} />
                    </Content>
                )}/>
                    <Route  path="*" component={Error} />
               </Switch>
           
        )
    }
}


