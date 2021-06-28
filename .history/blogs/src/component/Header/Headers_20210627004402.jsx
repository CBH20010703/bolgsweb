import React, { Component } from 'react'
import { Layout } from 'antd';
import "./Headers.css"
const { Header } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

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
