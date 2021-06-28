import React, { Component } from 'react'
import { Layout } from 'antd';


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import "./Headers.css"
const { Header } = Layout;
export default class Headers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
    let {parent,toggle} =this.props
        return (
            <div>
                <Header className="site-layout-background" style={{ padding: 0 }} >
                     {React.createElement(parent ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle(!parent),
            })}
                </Header>
            </div>
        )
    }
}
