import './App.css';
import { React, Component } from "react";
import Headers from './component/Header/Headers';
import MenuList from './component/Menu/MenuList';
import Footers from './component/Footer/Footers';
import RouterMap from './router/RouterMap';
import { Layout} from 'antd';

const {  Content, Sider } = Layout;
export default class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  collapsed: false, }
  }
   toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() { 
    return (
      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
       <MenuList/>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Headers></Headers>
          <Content style={{ margin: '24px 16px 0', overflow:"auto", height: "84vh", background:"#fff" }}>
          <RouterMap  />
        </Content> 
      <Footers/>
    </Layout>
  </Layout>
    );
  }
}
 



