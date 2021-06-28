import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import "./Headers.css"
export default class Headers extends Component {
    render() {
    let {parent} =this.props
        return (
            <div>
                <Header className="site-layout-background" style={{ padding: 0 }} >
                     {React.createElement(parent ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
                </Header>
            </div>
        )
    }
}
