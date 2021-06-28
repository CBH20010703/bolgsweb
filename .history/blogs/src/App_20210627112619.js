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
      <BrowserRouter>
        <RouterMap  />
          {/* <Layout>
            <Sider  trigger={null} collapsible collapsed={this.state.collapsed}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              }}
            >
              <MenuList/>
            </Sider>
            <Layout className="site-layout" style={{ paddingLeft:this.state.collapsed?"60px":"200px",transition:"0.1s ease" }}>
              <Headers toggle={this.toggle} parent={this.state.collapsed}></Headers>
              <Content style={{ margin: '24px 16px 0', height: "auto", background:"#fff" }}>
                 
              </Content> 
              <Footers/>
            </Layout>
          </Layout> */}
      </BrowserRouter>
    );
  }
}
 



