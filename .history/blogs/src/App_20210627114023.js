import './App.css';
import { React, Component } from "react";
import Headers from './component/Header/Headers';
import MenuList from './component/Menu/MenuList';
import Footers from './component/Footer/Footers';
import RouterMap from './router/RouterMap';
import { Layout} from 'antd';
import { BrowserRouter} from 'react-router-dom'
const {  Content, Sider } = Layout;
export default class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  collapsed: false, }
  }
  toggle = (data) => {
     console.log(data)
    this.setState({
      collapsed: data,
    });
  };
  render() { 
    return (
      <div>
        
      </div>
    );
  }
}
 



