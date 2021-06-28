import React, { Component } from 'react'
import { Layout } from 'antd';
import "./Headers.css"
const { Header } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,

} from '@ant-design/icons';

export default class Headers extends Component {
    render() {
        return (
            <div>
                <Header className="site-layout-background" style={{ padding: 0 }} >
                     {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
                </Header>
            </div>
        )
    }
}
